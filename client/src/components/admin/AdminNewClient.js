import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { addNewClient } from '../../actions/admin'
import Spinner from '../layout/Spinner'

const AddNewClient = ({ addNewClient }) => {
  const history = useHistory()

  const [isUploading, setIsUploading] = React.useState(false)

  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    usBusinessTaxID: '',
    usBusineesAddress: '',
    emailForStore: '',
    password: '',
    phoneNumber: '',
    // w9: null,
    // einVerificationLetter: null,
    // articlesOfOrganization: null,
    // bankCard: null,
    // usDriversLicense: null,
    // creditDebitCardFront: null,
    // creditDebitCardBack: null,
    w9: '',
    einVerificationLetter: '',
    articlesOfOrganization: '',
    bankCard: '',
    usDriversLicense: '',
    creditDebitCardFront: '',
    creditDebitCardBack: '',
    bankAccount: '',
    routing: '',
    dunsNumber: '',
    website: '',
    amazonSellerName: '',
    amazonStoreUrl: ''
  })

  const { firstName, lastName, email, dateOfBirth, usBusinessTaxID, usBusineesAddress, emailForStore, password, phoneNumber, w9, einVerificationLetter, articlesOfOrganization, bankCard, usDriversLicense, bankAccount, routing, creditDebitCardFront, creditDebitCardBack, dunsNumber, website, amazonSellerName, amazonStoreUrl } = formData

  // const fileInputW9Ref = React.useRef()
  // const fileInputeinVerificationLetterRef = React.useRef()
  // const fileInputarticlesOfOrganizationRef = React.useRef()
  // const fileInputBankCardRef = React.useRef()
  // const fileInputusDriversLicenseRef = React.useRef()
  // const fileInputcreditDebitCardFrontRef = React.useRef()
  // const fileInputcreditDebitCardBackRef = React.useRef()

  // const onFileChange = e => {
  //   setFormData({ ...formData, [e.target.name]: e.target.files[0] })
  // }

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    setIsUploading(true)
    // let sendData = new FormData()
    // Object.keys(formData).forEach(key => {
    //   sendData.append(key, formData[key])
    // })
    addNewClient(formData, history)
  }

  return (
    <div className='admin-new-clients'>
      <div className='h4 py-2'>
        New Client
      </div>
      <div className='bg-white rounded-lg p-3'>
        {isUploading
          ?
          <Spinner />
          :
          <form className='form' onSubmit={onSubmit}>
            <div className='row'>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>First Name *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='firstName'
                    value={firstName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Last Name *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='lastName'
                    value={lastName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Business Email *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='email'
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Date of Birth *</label>
                  <input
                    type='date'
                    className='form-control'
                    name='dateOfBirth'
                    value={dateOfBirth}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>U.S Business Tax ID / EIN / TIN *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='usBusinessTaxID'
                    value={usBusinessTaxID}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>U.S Business Address *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='usBusineesAddress'
                    value={usBusineesAddress}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Email Address For Store (Preferably Business Email) *</label>
                  <input
                    type='email'
                    className='form-control'
                    name='emailForStore'
                    value={emailForStore}
                    minLength='6'
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Password For Store (Preferably Business Email) *</label>
                  <input
                    type='password'
                    className='form-control'
                    name='password'
                    value={password}
                    minLength='6'
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Phone Number *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>W8 or W9 (Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='w9'
                    value={w9}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (w9 ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputW9Ref.current.click()}
                    value={w9 ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='w9'
                    onChange={onFileChange}
                    ref={fileInputW9Ref}
                    required
                  /> */}
                </div>
                <div className='form-group'>
                  <label>EIN Verification letter from the Department of Treasury(Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='einVerificationLetter'
                    value={einVerificationLetter}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (einVerificationLetter ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputeinVerificationLetterRef.current.click()}
                    value={einVerificationLetter ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='einVerificationLetter'
                    onChange={onFileChange}
                    ref={fileInputeinVerificationLetterRef}
                    required
                  /> */}
                </div>

              </div>
              <div className='col-md-6'>
                <div className='form-group'>
                  <label>Articles Of Organization(Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='articlesOfOrganization'
                    value={articlesOfOrganization}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (articlesOfOrganization ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputarticlesOfOrganizationRef.current.click()}
                    value={articlesOfOrganization ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='articlesOfOrganization'
                    onChange={onFileChange}
                    ref={fileInputarticlesOfOrganizationRef}
                    required
                  /> */}
                </div>
                <div className='form-group'>
                  <label>Bank/Credit Card Statement(Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='bankCard'
                    value={bankCard}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (bankCard ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputBankCardRef.current.click()}
                    value={bankCard ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='bankCard'
                    onChange={onFileChange}
                    ref={fileInputBankCardRef}
                    required
                  /> */}
                </div>
                <div className='form-group'>
                  <label>U.S Drivers License Front & Back(Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='usDriversLicense'
                    value={usDriversLicense}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (usDriversLicense ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputusDriversLicenseRef.current.click()}
                    value={usDriversLicense ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='usDriversLicense'
                    onChange={onFileChange}
                    ref={fileInputusDriversLicenseRef}
                    required
                  /> */}
                </div>
                <div className='form-group'>
                  <label>Bank Account # *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='bankAccount'
                    value={bankAccount}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Routing # *</label>
                  <input
                    type='text'
                    className='form-control'
                    name='routing'
                    value={routing}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Credit/Debit Card (Front) (Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='creditDebitCardFront'
                    value={creditDebitCardFront}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (creditDebitCardFront ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputcreditDebitCardFrontRef.current.click()}
                    value={creditDebitCardFront ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='creditDebitCardFront'
                    onChange={onFileChange}
                    ref={fileInputcreditDebitCardFrontRef}
                    required
                  /> */}
                </div>
                <div className='form-group'>
                  <label>Credit/Debit Card (Back) (Google Drive Link)</label>
                  <input
                    type='text'
                    className='form-control'
                    name='creditDebitCardBack'
                    value={creditDebitCardBack}
                    onChange={onChange}
                    required
                  />
                  {/* <input
                    type='button'
                    className={'form-control ' + (creditDebitCardBack ? 'text-success' : 'text-danger')}
                    onClick={() => fileInputcreditDebitCardBackRef.current.click()}
                    value={creditDebitCardBack ? 'Document Selected' : 'Upload Document'}
                  />
                  <input
                    type='file'
                    className='file'
                    name='creditDebitCardBack'
                    onChange={onFileChange}
                    ref={fileInputcreditDebitCardBackRef}
                    required
                  /> */}
                </div>
                <div className='form-group'>
                  <label>DUNS Number</label>
                  <input
                    type='text'
                    className='form-control'
                    name='dunsNumber'
                    value={dunsNumber}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Website</label>
                  <input
                    type='text'
                    className='form-control'
                    name='website'
                    value={website}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Amazon Seller Name</label>
                  <input
                    type='text'
                    className='form-control'
                    name='amazonSellerName'
                    value={amazonSellerName}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Amazon Store URL</label>
                  <input
                    type='text'
                    className='form-control'
                    name='amazonStoreUrl'
                    value={amazonStoreUrl}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className='form-group pt-2'>
              <input
                type='submit'
                className='form-control'
                style={{ backgroundColor: '#A78BE2' }}
                value='Submit'
              />
            </div>
          </form>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { addNewClient })(AddNewClient)