import mongoose from 'mongoose';

const { MONGO_DB } = process.env;

function connect() {
  // Connecting to the database
  mongoose
    .connect(`${MONGO_DB}`, {})
    .then(() => {
      console.log('Successfully connected to database');
    })
    .catch((error) => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      process.exit(1);
    });
}

export default connect;
