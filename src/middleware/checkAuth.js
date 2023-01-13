import jwt from 'jsonwebtoken';

export const checkAuth = (req, res, next) => {
  const token = req.header('Authentication');

  if (!token) {
    return res.status(401).json({ msg: 'Auth Denied!' });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
