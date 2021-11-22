const mongoose = require('mongoose');
const { Schema } = mongoose;

const tradeSchema = new Schema({
  tradeType: {
    type: Boolean,
    required: true,
  },
  options: {
    type: Number,
    required: true
  },
  gearing: {
    type: Number,
    required: true,
  },
  startTime: {
    type: Number,
    required: true
  },
  endTime: {
    type: Number,
    required: true
  },
  entryPrice: {
    type: Number,
    required: true
  },
  exitPrice: {
    type: Number,
  },
  isExpired: {
    type: Boolean,
    default: false
  },
  outcome: {
    type: Boolean,    
  },
  result: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Trade', tradeSchema);
