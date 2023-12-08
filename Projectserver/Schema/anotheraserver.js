const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
// const port = 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const otpSchema = new mongoose.Schema({
  phoneNumber: String,
  otp: String,
});

const Otp = mongoose.model('Otp', otpSchema);

app.post('/send-otp', async (req, res) => {
  const { phoneNumber } = req.body;

  // Generate a random 6-digit OTP
  const otp = Math.floor(100000 + Math.random() * 900000);

  try {
    // Save OTP to MongoDB
    await Otp.create({ phoneNumber, otp });

    // Implement SMS sending logic here if needed

    res.json({ success: true, message: 'OTP sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send OTP' });
  }
});

app.post('/verify-otp', async (req, res) => {
  const { phoneNumber, otp } = req.body;

  try {
    const storedOtp = await Otp.findOne({ phoneNumber, otp });

    if (storedOtp) {
      // Implement additional logic if OTP is valid (e.g., mark it as used)
      res.json({ success: true, message: 'OTP verified successfully!' });
    } else {
      res.json({ success: false, message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to verify OTP' });
  }
});

app.listen(3001, () => {
  console.log('this port is running' );
});