import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
  profileId: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  firstName: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  avatar: {
    profile: mongoose.Schema.Types.Mixed,
    required: false,
  },
  telephone: {
    type: String,
    required: false,
  },
  createdAt: {
    type: String,
    required: false,
  },
  updatedAt: {
    type: String,
    required: false,
  },
});
let profiles = mongoose.model('profile', profileSchema);
export default profiles;
