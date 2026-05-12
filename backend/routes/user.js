import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import ScanHistory from '../models/ScanHistory.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/user/signup
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Auth user & get token
// @route   POST /api/user/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      user.last_login = new Date();
      await user.save();

      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Get user profile
// @route   GET /api/user/profile
router.get('/profile', requireAuth, async (req, res) => {
  res.json(req.user);
});

// @desc    Get user scan history from MongoDB
// @route   GET /api/user/history
router.get('/history', requireAuth, async (req, res) => {
  try {
    const history = await ScanHistory.find({ user_id: req.user._id }).sort({ scan_date: -1 });
    res.json(history);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Save scan to history in MongoDB
// @route   POST /api/user/history
router.post('/history', requireAuth, async (req, res) => {
  const { plant_name, scientific_name, result_json, image_url } = req.body;

  try {
    const historyItem = await ScanHistory.create({
      user_id: req.user._id,
      plant_name,
      scientific_name,
      result_json,
      image_url,
    });

    res.status(201).json(historyItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// @desc    Delete a scan from history
// @route   DELETE /api/user/history/:id
router.delete('/history/:id', requireAuth, async (req, res) => {
  try {
    const historyItem = await ScanHistory.findById(req.params.id);

    if (historyItem) {
      if (historyItem.user_id.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      await historyItem.deleteOne();
      res.json({ message: 'Scan removed from history' });
    } else {
      res.status(404).json({ message: 'Scan not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @desc    Delete all history
router.delete('/history-clear-all', requireAuth, async (req, res) => {
  try {
    await ScanHistory.deleteMany({ user_id: req.user._id });
    res.json({ message: 'All scan history deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
