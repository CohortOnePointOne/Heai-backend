import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import User from '../../model/user.js';

const uid1 = new mongoose.Types.ObjectId();
const uid2 = new mongoose.Types.ObjectId();
const uid3 = new mongoose.Types.ObjectId();
const uid4 = new mongoose.Types.ObjectId();
const uid5 = new mongoose.Types.ObjectId();
const uid6 = new mongoose.Types.ObjectId();
const uid7 = new mongoose.Types.ObjectId();
const uid8 = new mongoose.Types.ObjectId();
const uid9 = new mongoose.Types.ObjectId();

const uIds = { uid1, uid2, uid3, uid4, uid5, uid6, uid7, uid8, uid9 };

async function createUsers() {
  const password = '12345678';
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);
  const users = [
    {
      _id: uid1,
      name: 'userI',
      username: 'User1',
      email: 'user1@gmail.com',
      password: hashedPass,
    },
    {
      _id: uid2,
      name:'userII',
      username: 'User2',
      email: 'user2@gmail.com',
      password: hashedPass
    },
    {
      _id: uid3,
      name: 'userIII',
      username: 'User3',
      email: 'user3@gmail.com',
      password: hashedPass
    },
    {
      _id: uid4,
      name: 'userIV',
      username: 'User4',
      email: 'user4@gmail.com',
      password: hashedPass
    },
    {
      _id: uid5,
      name: 'userV',
      username: 'User5',
      email: 'user5@gmail.com',
      password: hashedPass,
    },
    {
      _id: uid6,
      name:'userVI',
      username: 'User6',
      email: 'user6@gmail.com',
      password: hashedPass
    },
    {
      _id: uid7,
      name:'userVII',
      username: 'User7',
      email: 'user7@gmail.com',
      password: hashedPass
    },
    {
      _id: uid8,
      name: 'userVIII',
      username: 'User8',
      email: 'user8@gmail.com',
      password: hashedPass
    },
  ];
  await User.insertMany(users);
}

async function deleteUsers() {
  await User.deleteMany({});
}

export { uIds, createUsers, deleteUsers };