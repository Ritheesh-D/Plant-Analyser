import mongoose from 'mongoose';

const scanHistorySchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  plant_name: {
    type: String,
    required: true
  },
  image_url: {
    type: String
  },
  result_json: {
    type: Object,
    required: true
  },
  scan_date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const ScanHistory = mongoose.model('ScanHistory', scanHistorySchema);

export default ScanHistory;
