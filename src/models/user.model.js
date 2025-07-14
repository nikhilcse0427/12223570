import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  mobileNo: {
    type: String,
    required: true
  },
  githubUsername: {
    type: String,
    required: true
  },
  rollNo: {
    type: String,
    required: true
  },
  accessCode: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

export default User; 