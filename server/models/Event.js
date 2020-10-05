const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId } = Schema.Types;

const Event = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  startTime: {
    type: Date,
    required: true
  },
  endTime: {
    type: Date,
    required: true
  },
  creator: {
    type: ObjectId,
    ref: 'User'
  },
  access: {
    type: String,
    enum: ['public', 'private', 'shared'],
    default: 'private'
  },
  // If access declared as 'shared' these user Ids will have access
  shareList: [{
    type: ObjectId,
    ref: User
  }]
});

export default mongoose.model('Event', Event);