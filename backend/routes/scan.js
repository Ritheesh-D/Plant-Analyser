import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import axios from 'axios';
import FormData from 'form-data';
import Groq from 'groq-sdk';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

import plants from '../data/plants.js';

router.post('/', upload.single('image'), async (req, res) => {
  let imagePath = null;
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    imagePath = req.file.path;
    const language = req.body.language || 'en';

    console.log('=== SCAN START ===');
    console.log('Language:', language);
    console.log('Calling Flask ML Model...');

    const formData = new FormData();
    const fileBuffer = fs.readFileSync(imagePath);
    formData.append('file', fileBuffer, {
      filename: req.file.originalname || 'plant.jpg',
      contentType: req.file.mimetype || 'image/jpeg',
    });
    formData.append('language', language);

    const axiosResponse = await axios.post('http://127.0.0.1:5001/predict', formData, {
      headers: { ...formData.getHeaders() }
    });
    const flaskData = axiosResponse.data;
    console.log('Flask parsed:', flaskData);

    if (flaskData.error) throw new Error('Flask error: ' + flaskData.error);

    const plantName = flaskData.plant;
    const confidence = flaskData.confidence;
    console.log('✅ Plant identified:', plantName, confidence + '%');

    // Find the plant in our plants list (it matches by common name from ML usually)
    let foundPlant = plants.find(p => p.commonName.toLowerCase() === plantName.toLowerCase() || p.scientificName.toLowerCase() === plantName.toLowerCase());

    // Fallback search if not exactly matching
    if (!foundPlant) {
      foundPlant = plants.find(p => plantName.toLowerCase().includes(p.commonName.toLowerCase()));
    }

    if (!foundPlant) {
      console.log('⚠️ Plant not in local database, querying Groq for details...');
      try {
        const groqPrompt = `
          You are an expert botanist. Provide detailed medicinal and botanical information for the plant "${plantName}".
          Return ONLY a valid JSON object matching this exact structure, with no markdown formatting or extra text:
          {
            "commonName": "${plantName}",
            "scientificName": "Exact scientific name",
            "herbalUses": ["Use 1", "Use 2", "Use 3"],
            "medicalUses": ["Use 1", "Use 2", "Use 3"],
            "diseases": ["Disease 1", "Disease 2"],
            "habitat": "Detailed description of habitat",
            "medicineForm": ["Form 1", "Form 2"],
            "sideEffects": ["Side effect 1", "Side effect 2"]
          }
          Ensure all arrays have at least 3-4 detailed entries if possible.
        `;

        const chatCompletion = await groq.chat.completions.create({
          messages: [{ role: 'user', content: groqPrompt }],
          model: 'llama-3.3-70b-versatile',
          temperature: 0.1,
          response_format: { type: 'json_object' }
        });

        const responseText = chatCompletion.choices[0].message.content;
        foundPlant = JSON.parse(responseText);
        console.log('✅ Groq provided details successfully!');
      } catch (err) {
        console.error('❌ GROQ SCAN ERROR:', err.message);

        if (err.message.includes('organization_restricted')) {
          console.error('⚠️ Groq Account Restricted. Please check billing.');
        }

        foundPlant = {
          commonName: plantName,
          scientificName: 'Unknown species',
          herbalUses: ['Information unavailable due to API restriction', 'Please check Groq console', 'Natural remedy'],
          medicalUses: ['Information unavailable'],
          diseases: ['Consult a botanist'],
          habitat: 'Unknown',
          medicineForm: ['Extract'],
          sideEffects: ['Always consult a professional']
        };
      }
    }

    const result = {
      commonName: foundPlant.commonName || plantName,
      scientificName: foundPlant.scientificName || 'Unknown',
      herbalUses: foundPlant.herbalUses || [],
      medicalUses: foundPlant.medicalUses || [],
      diseases: foundPlant.diseases || [],
      habitat: foundPlant.habitat || 'Unknown',
      medicineForm: foundPlant.medicineForm || [],
      sideEffects: foundPlant.sideEffects || [],
      confidence: Math.round(confidence)
    };

    const imageUrl = `/uploads/${path.basename(imagePath)}`;

    return res.json({ ...result, image_url: imageUrl });

  } catch (err) {
    console.error('❌ Scan Error:', err.message);
    if (imagePath && fs.existsSync(imagePath)) {
      try { fs.unlinkSync(imagePath); } catch (e) { }
    }
    return res.json({
      error: "We cannot scan this image. Please ensure you are scanning a clear medicinal plant or leaf."
    });
  }
});

export default router;
