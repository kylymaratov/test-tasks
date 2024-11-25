import mongoose from 'mongoose';

async function connectDatabase(dbUrl: string) {
  return await mongoose.connect(dbUrl);
}

export default connectDatabase;
