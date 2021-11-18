const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  passwordForUpdate: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  // FOR CLIENT
  dateOfBirth: {
    type: Date
  },
  usBusinessTaxID: {
    type: String
  },
  usBusineesAddress: {
    type: String
  },
  emailForStore: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  w9: {
    type: String
  },
  w9Status: {
    type: String,
    default: 'Pending'
  },
  einVerificationLetter: {
    type: String
  },
  einVerificationLetterStatus: {
    type: String,
    default: 'Pending'
  },
  articlesOfOrganization: {
    type: String
  },
  articlesOfOrganizationStatus: {
    type: String,
    default: 'Pending'
  },
  bankCard: {
    type: String
  },
  bankCardStatus: {
    type: String,
    default: 'Pending'
  },
  usDriversLicense: {
    type: String
  },
  usDriversLicenseStatus: {
    type: String,
    default: 'Pending'
  },
  bankAccount: {
    type: String
  },
  routing: {
    type: String
  },
  creditDebitCardFront: {
    type: String
  },
  creditDebitCardFrontStatus: {
    type: String,
    default: 'Pending'
  },
  creditDebitCardBack: {
    type: String
  },
  creditDebitCardBackStatus: {
    type: String,
    default: 'Pending'
  },
  dunsNumber: {
    type: String
  },
  website: {
    type: String
  },
  amazonSellerName: {
    type: String
  },
  amazonStoreUrl: {
    type: String
  },
  // FOR MESSAGE
  toAdminMessages: {
    type: Number,
    default: 0
  },
  toClientMessages: {
    type: Number,
    default: 0
  },
  toAdminUnread: {
    type: Number,
    default: 0
  },
  toClientUnread: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('user', UserSchema)
