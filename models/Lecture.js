const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
  subjectId: { 
    type: String, 
    required: true, 
    index: true 
  },
  chapterId: { 
    type: String, 
    required: true, 
    index: true 
  },
  title: { 
    type: String, 
    required: true 
  },
  date: String,
  duration: String,
  youtubeId: String,
  imageUrl: String,
  completed: { 
    type: Boolean, 
    default: false 
  }
}, { timestamps: true });

module.exports = mongoose.model('Lecture', lectureSchema);
