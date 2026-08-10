import mongoose from 'mongoose';

import { DEV_DB_URL, NODE_ENV, PROD_DB_URL } from './server.config.js';

export default async function connectTODB() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(DEV_DB_URL);
    } else if (NODE_ENV === 'production') {
      await mongoose.connect(PROD_DB_URL);
    }
    console.log(`connected to MongoDB database ${NODE_ENV}`);
  } catch (err) {
    console.log(`error occured : ${err}`);
  }
}
