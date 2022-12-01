export default function (err, req, res) {
  return res.status(500).json({ message: err });
}
