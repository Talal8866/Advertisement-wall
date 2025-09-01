const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Category",
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String // Path to the uploaded logo image
  },

  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  whatsapp: {
    type: String
  },
  facebook: {
    type: String
  },
  website: {
    type: String
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Company', companySchema);
