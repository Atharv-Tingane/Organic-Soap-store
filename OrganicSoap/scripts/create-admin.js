require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/userM');

async function run() {
  const { MONGO_URI, ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_PHONE } = process.env;
  if (![MONGO_URI, ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_PHONE].every(Boolean)) {
    throw new Error('Set MONGO_URI, ADMIN_NAME, ADMIN_EMAIL, ADMIN_PASSWORD, and ADMIN_PHONE before creating an admin.');
  }
  if (ADMIN_PASSWORD.length < 8) throw new Error('ADMIN_PASSWORD must be at least 8 characters.');
  await mongoose.connect(MONGO_URI);
  const email = ADMIN_EMAIL.trim().toLowerCase();
  const existing = await User.findOne({ email }).select('+password');
  if (existing) {
    existing.role = 'admin';
    await existing.save();
    console.log(`Promoted ${email} to admin.`);
  } else {
    await User.create({ name: ADMIN_NAME.trim(), email, password: await bcrypt.hash(ADMIN_PASSWORD, 12), phone: ADMIN_PHONE.trim(), role: 'admin' });
    console.log(`Created admin ${email}.`);
  }
  await mongoose.connection.close();
}
run().catch(async (error) => { console.error(error.message); await mongoose.connection.close(); process.exit(1); });
