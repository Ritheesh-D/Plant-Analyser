import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

const plantDetails = {
  'Aloevera': { scientificName: 'Aloe barbadensis miller', herbalUses: ['Soothes burns', 'Skin moisturizer', 'Hair growth', 'Wound healing'], medicalUses: ['Anti-inflammatory', 'Antioxidant', 'Antimicrobial', 'Laxative'], diseases: ['Skin burns', 'Eczema', 'Constipation', 'Psoriasis'], habitat: 'Native to Arabian Peninsula. Grows in tropical regions worldwide.', medicineForm: ['Gel', 'Juice', 'Capsule', 'Cream'], sideEffects: ['May cause digestive issues', 'Avoid during pregnancy'] },
  'Amla': { scientificName: 'Phyllanthus emblica', herbalUses: ['Vitamin C source', 'Hair growth', 'Digestive aid', 'Immunity booster'], medicalUses: ['Antioxidant', 'Anti-inflammatory', 'Hepatoprotective', 'Antidiabetic'], diseases: ['Scurvy', 'Hair loss', 'Diabetes', 'High cholesterol'], habitat: 'Native to Southeast Asia. Widely cultivated in India.', medicineForm: ['Juice', 'Powder', 'Capsule', 'Oil'], sideEffects: ['May cause constipation', 'Avoid before surgery'] },
  'Ashwagandha': { scientificName: 'Withania somnifera', herbalUses: ['Stress reducer', 'Energy booster', 'Sleep improver', 'Memory enhancer'], medicalUses: ['Adaptogenic', 'Anti-inflammatory', 'Antioxidant', 'Immunomodulatory'], diseases: ['Anxiety', 'Insomnia', 'Arthritis', 'Thyroid disorders'], habitat: 'Native to India and North Africa. Grows in dry stony soils.', medicineForm: ['Powder', 'Capsule', 'Root extract', 'Tablet'], sideEffects: ['Digestive upset', 'Avoid during pregnancy'] },
  'Brahmi': { scientificName: 'Bacopa monnieri', herbalUses: ['Memory enhancer', 'Anxiety reducer', 'Concentration improver', 'Stress relief'], medicalUses: ['Nootropic', 'Anxiolytic', 'Antioxidant', 'Neuroprotective'], diseases: ['Anxiety', 'ADHD', 'Memory loss', 'Depression'], habitat: 'Native to wetlands of India. Found in marshy areas worldwide.', medicineForm: ['Powder', 'Capsule', 'Oil', 'Syrup'], sideEffects: ['May cause nausea', 'Avoid during pregnancy'] },
  'Tulasi': { scientificName: 'Ocimum tenuiflorum', herbalUses: ['Immunity booster', 'Cold remedy', 'Stress relief', 'Fever reducer'], medicalUses: ['Antibacterial', 'Antiviral', 'Adaptogenic', 'Anti-inflammatory'], diseases: ['Cold', 'Fever', 'Respiratory infections', 'Stress'], habitat: 'Native to tropical Asia. Sacred plant in India.', medicineForm: ['Tea', 'Juice', 'Capsule', 'Essential oil'], sideEffects: ['May slow blood clotting', 'Avoid in pregnancy'] },
  'Neem': { scientificName: 'Azadirachta indica', herbalUses: ['Blood purifier', 'Skin treatment', 'Dental care', 'Natural pesticide'], medicalUses: ['Antibacterial', 'Antifungal', 'Anti-inflammatory', 'Antimalarial'], diseases: ['Skin infections', 'Malaria', 'Diabetes', 'Dental problems'], habitat: 'Native to Indian subcontinent. Drought resistant tree.', medicineForm: ['Oil', 'Powder', 'Capsule', 'Leaf paste'], sideEffects: ['Toxic in large doses', 'Not safe for pregnant women'] },
  'Hibiscus': { scientificName: 'Hibiscus rosa-sinensis', herbalUses: ['Hair growth', 'Blood pressure control', 'Liver health', 'Anti-aging'], medicalUses: ['Antihypertensive', 'Diuretic', 'Antioxidant', 'Anti-inflammatory'], diseases: ['High blood pressure', 'Hair loss', 'Liver disease', 'High cholesterol'], habitat: 'Native to tropical Africa. Widely cultivated worldwide.', medicineForm: ['Tea', 'Oil', 'Powder', 'Extract'], sideEffects: ['May lower blood pressure', 'Avoid during pregnancy'] },
  'Jasmine': { scientificName: 'Jasminum officinale', herbalUses: ['Stress relief', 'Skin care', 'Antiseptic', 'Mood enhancer'], medicalUses: ['Anxiolytic', 'Antidepressant', 'Antimicrobial', 'Anti-inflammatory'], diseases: ['Anxiety', 'Depression', 'Skin infections', 'Headache'], habitat: 'Native to tropical Asia. Widely cultivated for fragrance.', medicineForm: ['Essential oil', 'Tea', 'Extract', 'Cream'], sideEffects: ['May cause allergic reactions'] },
  'Lemon': { scientificName: 'Citrus limon', herbalUses: ['Immunity booster', 'Digestive aid', 'Skin brightening', 'Detox'], medicalUses: ['Antioxidant', 'Antimicrobial', 'Anti-inflammatory', 'Diuretic'], diseases: ['Scurvy', 'Kidney stones', 'Digestive issues', 'Cold and flu'], habitat: 'Native to South Asia. Cultivated worldwide.', medicineForm: ['Juice', 'Essential oil', 'Zest', 'Extract'], sideEffects: ['May erode tooth enamel', 'May irritate mouth sores'] },
  'Mint': { scientificName: 'Mentha spicata', herbalUses: ['Digestive aid', 'Breath freshener', 'Headache relief', 'Nausea treatment'], medicalUses: ['Carminative', 'Antispasmodic', 'Analgesic', 'Antimicrobial'], diseases: ['IBS', 'Nausea', 'Headache', 'Indigestion'], habitat: 'Native to Europe. Cultivated in moist environments worldwide.', medicineForm: ['Tea', 'Essential oil', 'Capsule', 'Fresh leaves'], sideEffects: ['May cause heartburn', 'Not safe for infants'] },
  'Mango': { scientificName: 'Mangifera indica', herbalUses: ['Digestive aid', 'Immunity booster', 'Eye health', 'Skin care'], medicalUses: ['Antioxidant', 'Anti-inflammatory', 'Antidiabetic', 'Antimicrobial'], diseases: ['Digestive problems', 'Eye disorders', 'Skin infections', 'Anemia'], habitat: 'Native to South Asia. Cultivated in tropical regions worldwide.', medicineForm: ['Fruit', 'Leaf extract', 'Bark decoction', 'Powder'], sideEffects: ['May cause allergic reactions', 'High sugar content'] },
  'Rose': { scientificName: 'Rosa damascena', herbalUses: ['Skin care', 'Stress relief', 'Digestive aid', 'Antioxidant'], medicalUses: ['Anti-inflammatory', 'Antimicrobial', 'Antioxidant', 'Analgesic'], diseases: ['Skin problems', 'Stress', 'Digestive issues', 'Menstrual pain'], habitat: 'Native to Asia. Cultivated worldwide in temperate regions.', medicineForm: ['Rose water', 'Essential oil', 'Tea', 'Extract'], sideEffects: ['May cause allergic reactions'] },
  'Curry_Leaf': { scientificName: 'Murraya koenigii', herbalUses: ['Hair growth', 'Digestive aid', 'Blood sugar control', 'Antioxidant'], medicalUses: ['Antidiabetic', 'Antimicrobial', 'Anti-inflammatory', 'Hepatoprotective'], diseases: ['Diabetes', 'Hair loss', 'Anemia', 'Digestive problems'], habitat: 'Native to India and Sri Lanka. Grows in tropical regions.', medicineForm: ['Fresh leaves', 'Powder', 'Oil', 'Extract'], sideEffects: ['Generally safe', 'Excessive use may cause stomach upset'] },
  'Pepper': { scientificName: 'Piper nigrum', herbalUses: ['Digestive aid', 'Anti-inflammatory', 'Antioxidant', 'Nutrient absorption'], medicalUses: ['Carminative', 'Antibacterial', 'Antioxidant', 'Bioavailability enhancer'], diseases: ['Indigestion', 'Arthritis', 'High cholesterol', 'Cancer prevention'], habitat: 'Native to Kerala India. Grows in tropical regions.', medicineForm: ['Powder', 'Oil', 'Extract', 'Whole peppercorn'], sideEffects: ['May cause burning sensation'] },
  'Pomegranate': { scientificName: 'Punica granatum', herbalUses: ['Antioxidant', 'Heart health', 'Anti-inflammatory', 'Immunity booster'], medicalUses: ['Antioxidant', 'Anti-inflammatory', 'Antidiabetic', 'Antihypertensive'], diseases: ['Heart disease', 'Diabetes', 'High blood pressure', 'Cancer prevention'], habitat: 'Native to Iran. Cultivated in Mediterranean and tropical regions.', medicineForm: ['Juice', 'Extract', 'Powder', 'Peel tea'], sideEffects: ['May interact with blood pressure medications'] },
  'Gauva': { scientificName: 'Psidium guajava', herbalUses: ['Digestive aid', 'Immunity booster', 'Skin care', 'Blood sugar control'], medicalUses: ['Antioxidant', 'Antimicrobial', 'Antidiabetic', 'Anti-inflammatory'], diseases: ['Diarrhea', 'Diabetes', 'Skin problems', 'High blood pressure'], habitat: 'Native to Central America. Cultivated in tropical regions.', medicineForm: ['Fruit', 'Leaf tea', 'Extract', 'Powder'], sideEffects: ['Generally safe'] },
  'Pappaya': { scientificName: 'Carica papaya', herbalUses: ['Digestive enzyme', 'Anti-inflammatory', 'Skin healing', 'Immunity booster'], medicalUses: ['Digestive aid', 'Antioxidant', 'Antimicrobial', 'Anti-inflammatory'], diseases: ['Digestive problems', 'Dengue fever', 'Skin wounds', 'Constipation'], habitat: 'Native to Central America. Cultivated in tropical regions worldwide.', medicineForm: ['Fruit', 'Leaf extract', 'Enzyme supplement', 'Seed extract'], sideEffects: ['Avoid during pregnancy'] },
  'Henna': { scientificName: 'Lawsonia inermis', herbalUses: ['Hair conditioner', 'Skin coolant', 'Antifungal', 'Wound healing'], medicalUses: ['Antimicrobial', 'Anti-inflammatory', 'Antifungal', 'Analgesic'], diseases: ['Hair problems', 'Skin infections', 'Fungal infections', 'Headache'], habitat: 'Native to North Africa and South Asia. Grows in hot dry climates.', medicineForm: ['Paste', 'Powder', 'Oil', 'Extract'], sideEffects: ['May cause allergic reactions'] },
  'Geranium': { scientificName: 'Pelargonium graveolens', herbalUses: ['Stress relief', 'Skin care', 'Insect repellent', 'Wound healing'], medicalUses: ['Antimicrobial', 'Anti-inflammatory', 'Anxiolytic', 'Antidepressant'], diseases: ['Anxiety', 'Skin infections', 'Nerve pain', 'Hormonal imbalance'], habitat: 'Native to South Africa. Cultivated in temperate regions.', medicineForm: ['Essential oil', 'Tea', 'Tincture', 'Cream'], sideEffects: ['May cause skin irritation'] },
  'Bamboo': { scientificName: 'Bambusa vulgaris', herbalUses: ['Anti-inflammatory', 'Digestive aid', 'Wound healing', 'Strength builder'], medicalUses: ['Anti-inflammatory', 'Antibacterial', 'Antioxidant', 'Diuretic'], diseases: ['Respiratory problems', 'Digestive issues', 'Wounds', 'Arthritis'], habitat: 'Native to tropical Asia. Grows in moist forests worldwide.', medicineForm: ['Shoot extract', 'Leaf tea', 'Powder', 'Juice'], sideEffects: ['Raw shoots toxic - must cook'] },
  'Amruta_Balli': { scientificName: 'Tinospora cordifolia', herbalUses: ['Immunity booster', 'Fever reducer', 'Body detoxifier', 'Anti-aging'], medicalUses: ['Immunomodulatory', 'Anti-inflammatory', 'Antidiabetic', 'Antipyretic'], diseases: ['Fever', 'Diabetes', 'Arthritis', 'Jaundice'], habitat: 'Native to tropical India. Grows as climbing shrub in deciduous forests.', medicineForm: ['Juice', 'Powder', 'Capsule', 'Decoction'], sideEffects: ['May cause constipation', 'Avoid during pregnancy'] },
  'Arali': { scientificName: 'Nerium oleander', herbalUses: ['Skin treatment', 'Pain relief', 'Heart tonic', 'Antimicrobial'], medicalUses: ['Cardiotonic', 'Anticancer', 'Antimicrobial', 'Analgesic'], diseases: ['Heart conditions', 'Skin diseases', 'Malaria', 'Pain'], habitat: 'Native to Mediterranean. Grows in tropical and subtropical regions.', medicineForm: ['Controlled extract', 'Medicinal oil'], sideEffects: ['HIGHLY TOXIC - all parts poisonous', 'Can cause death if ingested'] },
  'Ashoka': { scientificName: 'Saraca asoca', herbalUses: ['Menstrual disorders', 'Uterine health', 'Pain relief', 'Anti-inflammatory'], medicalUses: ['Uterine tonic', 'Anti-inflammatory', 'Astringent', 'Analgesic'], diseases: ['Menstrual disorders', 'Uterine problems', 'Hemorrhoids', 'Pain'], habitat: 'Native to Indian subcontinent. Grows in tropical forests and river banks.', medicineForm: ['Bark decoction', 'Powder', 'Extract', 'Capsule'], sideEffects: ['Avoid during pregnancy', 'May cause nausea'] },
  'Avacado': { scientificName: 'Persea americana', herbalUses: ['Heart health', 'Skin nourishment', 'Hair growth', 'Weight management'], medicalUses: ['Antioxidant', 'Anti-inflammatory', 'Cholesterol reducer', 'Blood sugar control'], diseases: ['Heart disease', 'High cholesterol', 'Diabetes', 'Skin problems'], habitat: 'Native to Central America. Cultivated in tropical and subtropical regions.', medicineForm: ['Fruit', 'Oil', 'Leaf extract', 'Seed powder'], sideEffects: ['High in calories', 'May cause allergic reactions'] },
  'Basale': { scientificName: 'Basella alba', herbalUses: ['Digestive aid', 'Wound healing', 'Laxative', 'Skin care'], medicalUses: ['Anti-inflammatory', 'Antioxidant', 'Demulcent', 'Diuretic'], diseases: ['Constipation', 'Skin wounds', 'Anemia', 'Urinary problems'], habitat: 'Native to tropical Asia and Africa. Grows in warm humid regions.', medicineForm: ['Fresh leaves', 'Juice', 'Paste', 'Extract'], sideEffects: ['Generally safe', 'May cause loose stools in excess'] },
  'Betel': { scientificName: 'Piper betle', herbalUses: ['Digestive aid', 'Antiseptic', 'Stimulant', 'Wound healing'], medicalUses: ['Antimicrobial', 'Anti-inflammatory', 'Analgesic', 'Carminative'], diseases: ['Digestive problems', 'Oral infections', 'Wounds', 'Headache'], habitat: 'Native to South and Southeast Asia. Grows in humid tropical regions.', medicineForm: ['Fresh leaf', 'Extract', 'Oil', 'Paste'], sideEffects: ['May cause oral cancer with tobacco', 'Addictive'] },
  'Betel_Nut': { scientificName: 'Areca catechu', herbalUses: ['Digestive stimulant', 'Antiparasitic', 'Mouth freshener', 'Wound healing'], medicalUses: ['Anthelmintic', 'Stimulant', 'Astringent', 'Diuretic'], diseases: ['Intestinal worms', 'Digestive problems', 'Dental issues', 'Edema'], habitat: 'Native to Philippines. Cultivated in tropical Asia and Pacific.', medicineForm: ['Nut', 'Extract', 'Powder', 'Paste'], sideEffects: ['Highly addictive', 'May cause oral cancer', 'Toxic in large amounts'] },
  'Castor': { scientificName: 'Ricinus communis', herbalUses: ['Laxative', 'Skin moisturizer', 'Hair growth', 'Anti-inflammatory'], medicalUses: ['Purgative', 'Anti-inflammatory', 'Antimicrobial', 'Analgesic'], diseases: ['Constipation', 'Skin problems', 'Joint pain', 'Hair loss'], habitat: 'Native to tropical East Africa. Grows in tropical and subtropical regions.', medicineForm: ['Oil', 'Seed extract', 'Leaf paste', 'Root decoction'], sideEffects: ['Seeds highly toxic', 'May cause diarrhea', 'Avoid during pregnancy'] },
  'Doddapatre': { scientificName: 'Plectranthus amboinicus', herbalUses: ['Cough remedy', 'Digestive aid', 'Wound healing', 'Fever reducer'], medicalUses: ['Antimicrobial', 'Anti-inflammatory', 'Antioxidant', 'Expectorant'], diseases: ['Cough', 'Cold', 'Digestive problems', 'Fever'], habitat: 'Native to Southern Africa. Widely cultivated in tropical Asia.', medicineForm: ['Fresh leaves', 'Juice', 'Tea', 'Paste'], sideEffects: ['Generally safe', 'Rarely causes allergic reactions'] },
  'Ekka': { scientificName: 'Calotropis gigantea', herbalUses: ['Pain relief', 'Skin treatment', 'Fever reducer', 'Anti-inflammatory'], medicalUses: ['Analgesic', 'Anti-inflammatory', 'Antipyretic', 'Anthelmintic'], diseases: ['Joint pain', 'Skin diseases', 'Fever', 'Intestinal worms'], habitat: 'Native to South and Southeast Asia. Grows in dry wasteland.', medicineForm: ['Leaf extract', 'Root bark', 'Latex external only'], sideEffects: ['Toxic latex', 'Never ingest', 'Use under medical supervision only'] },
  'Ganike': { scientificName: 'Solanum nigrum', herbalUses: ['Liver health', 'Fever reducer', 'Anti-inflammatory', 'Diuretic'], medicalUses: ['Hepatoprotective', 'Antipyretic', 'Anti-inflammatory', 'Antioxidant'], diseases: ['Liver disorders', 'Fever', 'Inflammation', 'Urinary problems'], habitat: 'Native to Eurasia. Widely naturalized in tropical regions worldwide.', medicineForm: ['Leaf extract', 'Fruit juice', 'Decoction', 'Paste'], sideEffects: ['Unripe berries toxic', 'May cause hallucinations', 'Avoid large doses'] },
  'Honge': { scientificName: 'Millettia pinnata', herbalUses: ['Skin treatment', 'Hair oil source', 'Wound healing', 'Anti-inflammatory'], medicalUses: ['Antimicrobial', 'Anti-inflammatory', 'Antifungal', 'Analgesic'], diseases: ['Skin diseases', 'Rheumatism', 'Wounds', 'Intestinal parasites'], habitat: 'Native to Indian subcontinent. Grows in tropical coastal regions.', medicineForm: ['Seed oil', 'Seed extract', 'Bark decoction', 'Leaf paste'], sideEffects: ['Seeds toxic if ingested raw', 'May cause skin irritation'] },
  'Insulin': { scientificName: 'Costus igneus', herbalUses: ['Blood sugar control', 'Kidney health', 'Anti-inflammatory', 'Antioxidant'], medicalUses: ['Antidiabetic', 'Diuretic', 'Anti-inflammatory', 'Antioxidant'], diseases: ['Diabetes', 'Kidney problems', 'High blood pressure', 'Cholesterol'], habitat: 'Native to Southeast Asia. Cultivated in tropical regions.', medicineForm: ['Fresh leaves', 'Juice', 'Tea', 'Extract'], sideEffects: ['May cause hypoglycemia', 'Consult doctor if diabetic'] },
  'Lemon_grass': { scientificName: 'Cymbopogon citratus', herbalUses: ['Digestive aid', 'Anxiety relief', 'Pain relief', 'Fever reducer'], medicalUses: ['Antimicrobial', 'Anti-inflammatory', 'Analgesic', 'Antipyretic'], diseases: ['Digestive disorders', 'Anxiety', 'High blood pressure', 'Fever'], habitat: 'Native to tropical South Asia. Cultivated worldwide.', medicineForm: ['Tea', 'Essential oil', 'Fresh stalks', 'Extract'], sideEffects: ['May cause allergic reactions', 'Avoid during pregnancy'] },
  'Nagadali': { scientificName: 'Artemisia nilagirica', herbalUses: ['Fever reducer', 'Antiseptic', 'Anti-inflammatory', 'Digestive aid'], medicalUses: ['Antipyretic', 'Antimicrobial', 'Anti-inflammatory', 'Anthelmintic'], diseases: ['Fever', 'Skin infections', 'Intestinal worms', 'Malaria'], habitat: 'Native to Nilgiri hills of South India. Grows in mountain regions.', medicineForm: ['Leaf extract', 'Tea', 'Essential oil', 'Paste'], sideEffects: ['May cause allergic reactions', 'Avoid during pregnancy'] },
  'Nithyapushpa': { scientificName: 'Catharanthus roseus', herbalUses: ['Anticancer herb', 'Blood sugar control', 'Wound healing', 'Blood pressure control'], medicalUses: ['Anticancer', 'Antidiabetic', 'Antihypertensive', 'Antimicrobial'], diseases: ['Cancer', 'Diabetes', 'High blood pressure', 'Leukemia'], habitat: 'Native to Madagascar. Cultivated in tropical regions worldwide.', medicineForm: ['Standardized extract', 'Capsule', 'Leaf juice', 'Decoction'], sideEffects: ['Toxic in large doses', 'May cause nerve damage', 'Medical supervision required'] },
  'Nooni': { scientificName: 'Morinda citrifolia', herbalUses: ['Immunity booster', 'Pain relief', 'Anti-inflammatory', 'Antioxidant'], medicalUses: ['Immunostimulant', 'Analgesic', 'Anti-inflammatory', 'Antioxidant'], diseases: ['Cancer prevention', 'Diabetes', 'High blood pressure', 'Arthritis'], habitat: 'Native to Southeast Asia. Grows in tropical coastal regions.', medicineForm: ['Juice', 'Capsule', 'Powder', 'Extract'], sideEffects: ['High potassium - avoid with kidney disease', 'May interact with medications'] },
  'Raktachandini': { scientificName: 'Pterocarpus santalinus', herbalUses: ['Skin brightening', 'Anti-inflammatory', 'Blood purifier', 'Wound healing'], medicalUses: ['Anti-inflammatory', 'Antioxidant', 'Antimicrobial', 'Astringent'], diseases: ['Skin diseases', 'Diabetes', 'Inflammation', 'Fever'], habitat: 'Endemic to Southern India. Grows in dry deciduous forests of Eastern Ghats.', medicineForm: ['Powder', 'Oil', 'Paste', 'Extract'], sideEffects: ['Generally safe', 'May cause mild skin irritation'] },
  'Sapota': { scientificName: 'Manilkara zapota', herbalUses: ['Energy booster', 'Digestive aid', 'Bone health', 'Skin care'], medicalUses: ['Antioxidant', 'Anti-inflammatory', 'Antidiarrheal', 'Expectorant'], diseases: ['Diarrhea', 'Constipation', 'Bone weakness', 'Respiratory problems'], habitat: 'Native to Mexico. Cultivated in tropical regions worldwide.', medicineForm: ['Fruit', 'Seed extract', 'Bark decoction', 'Leaf tea'], sideEffects: ['High sugar content', 'May cause weight gain in excess'] },
  'Wood_sorel': { scientificName: 'Oxalis corniculata', herbalUses: ['Vitamin C source', 'Fever reducer', 'Skin treatment', 'Antiscurvy'], medicalUses: ['Antioxidant', 'Antimicrobial', 'Anti-inflammatory', 'Diuretic'], diseases: ['Scurvy', 'Fever', 'Digestive problems', 'Skin infections'], habitat: 'Native to Europe and Asia. Widely naturalized in tropical regions.', medicineForm: ['Fresh leaves', 'Juice', 'Extract', 'Paste'], sideEffects: ['High oxalic acid', 'May cause kidney stones', 'Avoid with kidney problems'] },
};

const tamilDetails = {
  'Aloevera': { herbalUses: ['தோல் புண்களை ஆற்றும்', 'சரும பராமரிப்பு', 'முடி வளர்ச்சி', 'காயங்களை குணப்படுத்தும்'], medicalUses: ['அழற்சி எதிர்ப்பு', 'ஆக்சிஜனேற்ற எதிர்ப்பு', 'நுண்ணுயிர் எதிர்ப்பு', 'மலமிளக்கி'], diseases: ['தோல் புண்கள்', 'தோல் அரிப்பு', 'மலச்சிக்கல்', 'சொரியாசிஸ்'], habitat: 'அரேபிய தீபகற்பம் பூர்வீகம். வெப்பமண்டல பகுதிகளில் வளரும்.', medicineForm: ['ஜெல்', 'சாறு', 'மாத்திரை', 'கிரீம்'], sideEffects: ['வயிற்று பிரச்சனை வரலாம்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்'] },
  'Tulasi': { herbalUses: ['நோய் எதிர்ப்பு சக்தி அதிகரிக்கும்', 'சளி குணமாகும்', 'மன அழுத்தம் குறையும்', 'காய்ச்சல் குணமாகும்'], medicalUses: ['நுண்ணுயிர் எதிர்ப்பு', 'வைரஸ் எதிர்ப்பு', 'அழற்சி எதிர்ப்பு', 'தகவமைப்பு'], diseases: ['சளி', 'காய்ச்சல்', 'சுவாச நோய்கள்', 'மன அழுத்தம்'], habitat: 'வெப்பமண்டல ஆசியா பூர்வீகம். இந்தியாவில் புனித செடி.', medicineForm: ['தேநீர்', 'சாறு', 'மாத்திரை', 'எண்ணெய்'], sideEffects: ['இரத்த உறைவை குறைக்கலாம்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்'] },
  'Neem': { herbalUses: ['இரத்தம் சுத்திகரிக்கும்', 'தோல் நோய் குணமாகும்', 'பல் பராமரிப்பு', 'இயற்கை பூச்சிக்கொல்லி'], medicalUses: ['நுண்ணுயிர் எதிர்ப்பு', 'பூஞ்சை எதிர்ப்பு', 'அழற்சி எதிர்ப்பு', 'மலேரியா எதிர்ப்பு'], diseases: ['தோல் நோய்கள்', 'மலேரியா', 'நீரிழிவு', 'பல் பிரச்சனைகள்'], habitat: 'இந்திய துணைக்கண்டம் பூர்வீகம். வெப்பமண்டல பகுதிகளில் வளரும்.', medicineForm: ['எண்ணெய்', 'தூள்', 'மாத்திரை', 'இலை பேஸ்ட்'], sideEffects: ['அதிக அளவில் நஞ்சாகும்', 'கர்ப்பிணி பெண்களுக்கு ஆபத்தானது'] },
  'Rose': { herbalUses: ['சரும பராமரிப்பு', 'மன அழுத்தம் குறையும்', 'செரிமான உதவி', 'ஆக்சிஜனேற்ற எதிர்ப்பு'], medicalUses: ['அழற்சி எதிர்ப்பு', 'நுண்ணுயிர் எதிர்ப்பு', 'வலி நிவாரணி', 'ஆக்சிஜனேற்ற எதிர்ப்பு'], diseases: ['தோல் பிரச்சனைகள்', 'மன அழுத்தம்', 'மாதவிடாய் வலி', 'செரிமான பிரச்சனைகள்'], habitat: 'ஆசியா பூர்வீகம். மிதமான காலநிலையில் உலகெங்கும் பயிரிடப்படுகிறது.', medicineForm: ['ரோஸ் வாட்டர்', 'எண்ணெய்', 'தேநீர்', 'சாறு'], sideEffects: ['ஒவ்வாமை வரலாம்'] },
  'Mango': { herbalUses: ['செரிமான ஆரோக்கியம்', 'நோய் எதிர்ப்பு சக்தி', 'கண் ஆரோக்கியம்', 'சரும பராமரிப்பு'], medicalUses: ['ஆக்சிஜனேற்ற எதிர்ப்பு', 'அழற்சி எதிர்ப்பு', 'நீரிழிவு எதிர்ப்பு', 'நுண்ணுயிர் எதிர்ப்பு'], diseases: ['செரிமான பிரச்சனைகள்', 'கண் கோளாறுகள்', 'தோல் நோய்கள்', 'இரத்த சோகை'], habitat: 'தெற்காசியா பூர்வீகம். வெப்பமண்டல பகுதிகளில் பயிரிடப்படுகிறது.', medicineForm: ['பழம்', 'இலை தேநீர்', 'பட்டை கஷாயம்', 'தூள்'], sideEffects: ['ஒவ்வாமை வரலாம்', 'அதிக சர்க்கரை உள்ளது'] },
  'Hibiscus': { herbalUses: ['முடி வளர்ச்சி', 'இரத்த அழுத்தம் குறையும்', 'கல்லீரல் ஆரோக்கியம்', 'வயதான தோற்றம் தடுக்கும்'], medicalUses: ['இரத்த அழுத்த எதிர்ப்பு', 'சிறுநீரிறக்கி', 'ஆக்சிஜனேற்ற எதிர்ப்பு', 'அழற்சி எதிர்ப்பு'], diseases: ['அதிக இரத்த அழுத்தம்', 'முடி உதிர்வு', 'கல்லீரல் நோய்', 'கொலஸ்ட்ரால்'], habitat: 'வெப்பமண்டல ஆப்பிரிக்கா பூர்வீகம். வெப்பமண்டல பகுதிகளில் வளரும்.', medicineForm: ['பூ தேநீர்', 'எண்ணெய்', 'தூள்', 'சாறு'], sideEffects: ['இரத்த அழுத்தம் குறைக்கலாம்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்'] },
  'Brahmi': { herbalUses: ['நினைவாற்றல் மேம்படும்', 'கவலை குறையும்', 'கவனம் அதிகரிக்கும்', 'மன அழுத்தம் குறையும்'], medicalUses: ['மூளை வலிமை', 'கவலை எதிர்ப்பு', 'ஆக்சிஜனேற்ற எதிர்ப்பு', 'நரம்பு பாதுகாப்பு'], diseases: ['கவலை', 'ADHD', 'நினைவிழப்பு', 'மனச்சோர்வு'], habitat: 'இந்தியாவின் ஈரமான நிலங்கள் பூர்வீகம். சதுப்பு நிலங்களில் வளரும்.', medicineForm: ['தூள்', 'மாத்திரை', 'எண்ணெய்', 'சிரப்'], sideEffects: ['குமட்டல் வரலாம்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்'] },
  'Ashwagandha': { herbalUses: ['மன அழுத்தம் குறையும்', 'ஆற்றல் அதிகரிக்கும்', 'தூக்கம் மேம்படும்', 'நினைவாற்றல் வலுப்படும்'], medicalUses: ['தகவமைப்பு மூலிகை', 'அழற்சி எதிர்ப்பு', 'ஆக்சிஜனேற்ற எதிர்ப்பு', 'நோய் எதிர்ப்பு மேம்படும்'], diseases: ['மன அழுத்தம்', 'தூக்கமின்மை', 'மூட்டு வலி', 'தைராய்டு கோளாறுகள்'], habitat: 'இந்தியா மற்றும் வட ஆப்ரிக்கா பூர்வீகம். வறண்ட மண்ணில் வளரும்.', medicineForm: ['வேர் தூள்', 'மாத்திரை', 'வேர் சாறு', 'மாத்திரை'], sideEffects: ['செரிமான அசௌகரியம்', 'கர்ப்ப காலத்தில் தவிர்க்கவும்'] },
  'Mint': { herbalUses: ['செரிமான உதவி', 'வாய் துர்நாற்றம் போக்கும்', 'தலைவலி குறையும்', 'குமட்டல் போக்கும்'], medicalUses: ['வயிற்று வலி போக்கும்', 'நுண்ணுயிர் எதிர்ப்பு', 'வலி நிவாரணி', 'தசைப்பிடிப்பு போக்கும்'], diseases: ['IBS', 'குமட்டல்', 'தலைவலி', 'செரிமான பிரச்சனைகள்'], habitat: 'ஐரோப்பா பூர்வீகம். ஈரமான சூழலில் உலகெங்கும் வளரும்.', medicineForm: ['தேநீர்', 'எண்ணெய்', 'மாத்திரை', 'இலை'], sideEffects: ['நெஞ்செரிச்சல் வரலாம்', 'குழந்தைகளுக்கு கொடுக்க கூடாது'] },
  'Lemon': { herbalUses: ['நோய் எதிர்ப்பு சக்தி அதிகரிக்கும்', 'செரிமான உதவி', 'சரும பிரகாசம்', 'உடல் நச்சு நீக்கம்'], medicalUses: ['ஆக்சிஜனேற்ற எதிர்ப்பு', 'நுண்ணுயிர் எதிர்ப்பு', 'அழற்சி எதிர்ப்பு', 'சிறுநீரிறக்கி'], diseases: ['வாய்வு நோய்', 'சிறுநீரக கற்கள்', 'செரிமான பிரச்சனைகள்', 'சளி காய்ச்சல்'], habitat: 'தெற்காசியா பூர்வீகம். உலகெங்கும் வெப்பமண்டல பகுதிகளில் வளரும்.', medicineForm: ['சாறு', 'எண்ணெய்', 'தோல்', 'சாறு'], sideEffects: ['பல் பாதிக்கலாம்', 'வாய் புண் இருந்தால் தவிர்க்கவும்'] },
  'Pepper': { herbalUses: ['செரிமான உதவி', 'அழற்சி எதிர்ப்பு', 'ஆக்சிஜனேற்ற எதிர்ப்பு', 'ஊட்டச்சத்து உறிஞ்சுதல்'], medicalUses: ['வயிற்று வலி போக்கும்', 'நுண்ணுயிர் எதிர்ப்பு', 'ஆக்சிஜனேற்ற எதிர்ப்பு', 'உயிர் கிடைக்கும் திறன்'], diseases: ['செரிமான பிரச்சனைகள்', 'மூட்டு வலி', 'கொலஸ்ட்ரால்', 'புற்றுநோய் தடுப்பு'], habitat: 'கேரளா, இந்தியா பூர்வீகம். வெப்பமண்டல பகுதிகளில் வளரும்.', medicineForm: ['தூள்', 'எண்ணெய்', 'சாறு', 'மிளகு'], sideEffects: ['எரிச்சல் உணர்வு வரலாம்', 'மருந்துகளுடன் தொடர்பு வரலாம்'] },
};

router.post('/', upload.single('image'), async (req, res) => {
  let imagePath = null;
  try {
    if (!req.file) return res.status(400).json({ error: 'No image uploaded' });

    imagePath = req.file.path;
    const language = req.body.language || 'en';
    console.log('=== SCAN START ===');
    console.log('Language:', language);
    console.log('Calling Flask ML Model...');

    const axios = (await import('axios')).default;
    const FormData = (await import('form-data')).default;

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
    const plantKey = flaskData.plant_key;
    const plantName = flaskData.plant;
    const confidence = flaskData.confidence;
    console.log('✅ Plant identified:', plantName, confidence + '%');

    const details = language === 'ta'
      ? (tamilDetails[plantKey] || plantDetails[plantKey])
      : plantDetails[plantKey];

    const result = {
      commonName: plantName,
      scientificName: plantDetails[plantKey]?.scientificName || 'Unknown species',
      herbalUses: details?.herbalUses || ['Traditional medicinal plant'],
      medicalUses: details?.medicalUses || ['Natural remedy'],
      diseases: details?.diseases || ['General wellness'],
      habitat: details?.habitat || 'Tropical regions of Asia',
      medicineForm: details?.medicineForm || ['Extract', 'Tea', 'Powder'],
      sideEffects: details?.sideEffects || ['Consult doctor before use'],
      confidence: Math.round(confidence)
    };

    if (imagePath && fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    return res.json(result);

  } catch (err) {
    console.error('❌ Scan Error:', err.message);
    if (imagePath && fs.existsSync(imagePath)) {
      try { fs.unlinkSync(imagePath); } catch (e) { }
    }
    return res.json({
      commonName: 'Unknown Plant',
      scientificName: 'Unknown species',
      herbalUses: ['Please try again with a clearer image'],
      medicalUses: ['Could not analyze image'],
      diseases: ['No data available'],
      habitat: 'Not available',
      medicineForm: ['Not available'],
      sideEffects: ['Not available'],
      confidence: 0
    });
  }
});

export default router;