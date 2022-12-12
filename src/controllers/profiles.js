import profiles from '../model/profiles';
import User from '../model/user';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';

class ProfileController {
  static async getAllprofiles(req, res) {
    const allProfiles = await profiles.find();
    if (allProfiles.length === 0) {
      return res.status(200).json({ message: 'profile doesnt exist' });
    }
    return res.json(allProfiles);
  }

  static async getAProfile(req, res) {
    const { id } = req.params;
    const oneProfile = await profiles.findOne({ profileId: id }).populate({
      path: 'userId',
      model: 'User',
    });
    if (!oneProfile) {
      return res.status(400).json({ message: 'this profile does not exist' });
    }
    return res.json({ profile: oneProfile });
  }

  static async createAProfile(req, res) {
    const { bio, firstName, lastName, avatar, telephone, username } = req.body;
    const registeredUser = await User.findOne({ username });
    if (registeredUser) {
      return res.status(400).json({ error: 'username already exist' });
    }
    const foundUser = await User.findOne({ _id: registeredUser._id });
    if (!foundUser) {
      return res.status(400).json({ error: 'user already exists' });
    }
    const { _id } = foundUser;
    const newProfile = {
      profileId: uuidv4(),
      firstName,
      lastName,
      telephone,
      avatar,
      bio,
      userId: _id,
      createdAt: dayjs().format('DD-MM-YYYY h:mm:ss A'),
    };
    await profiles.create(newProfile);
    return res.status(201).json({
      profile: newProfile,
      message: 'profile created',
    });
  }
  static async updateAProfile(req, res) {
    const { id } = req.params;
    const {
      bio,
      firstName,
      lastName,
      avatar,
      telephone,
      username,
      email,
      password,
    } = req.body;

    const userProfile = await profiles.findOne({ profileId: id });
    const { userId } = userProfile;

    let updatedPassword;
    if (password) {
      const salt = await bcrypt.genSalt(8);

      updatedPassword = await bcrypt.hash(password, salt);
    }

    const registeredUser = await User.findOne({ username });
    if (registeredUser) {
      return res.status(400).json({ error: 'username already exist' });
    }
    await User.findOneAndUpdate(
      { _id: userId },
      { username, email, password: updatedPassword }
    );

    await profiles.findOneAndUpdate(
      { profileId: id },
      {
        firstName,
        telephone,
        lastName,
        avatar,
        bio,
        updatedAt: dayjs().format('yyyy-mm-dd h:mm:ss A'),
      }
    );
    const updatedProfile = await profiles.findOne({ profileId: id });
    return res
      .status(201)
      .json({ updatedProfile, message: 'you changed your profile' });
  }
}
export default ProfileController;
