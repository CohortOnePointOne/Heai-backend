import mongoose from 'mongoose';

const { DB_CONNECT } = process.env;

function connect() {
  // Connecting to the database
  mongoose
    .connect(`${DB_CONNECT}`, {})
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
