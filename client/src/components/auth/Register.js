import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { register } from '../../actions/auth'
import { Link } from 'react-router-dom'

const Register = ({ register }) => {
  const history = useHistory()

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

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const onSubmit = e => {
    e.preventDefault()
    register(formData, history)
  }

  return (
    <div className='container-fluid bg-Client bg-admin'>
      <div className='row'>
        <div className='col-lg-2 p-2 sidebar'>
          <div className='container-fluid'>
            <div className='row m-1 p-2 h5 bg-white rounded-lg'>
              <div className='d-flex justify-content-between align-items-center w-100'>
                <div>
                  <i className='fa fa-heart-o pt-2 mr-2 h6' style={{ color: '#A78BE2' }}></i>
                  <span>ProtoType</span>
                </div>
                <i className='fa fa-align-justify pt-2 mr-2 h6' style={{ color: '#A78BE2' }}></i>
              </div>
            </div>
            <div className='row mx-1 pt-4 h5'>
              Menu
            </div>
            <div className='row mx-1 h5 menuItem'>
              <div className='d-flex align-items-center'>
                <i className='fa fa-database pt-2 mr-2 h6'></i>
                <span>
                  <Link to='/register'>Registration</Link>
                </span>
              </div>
            </div>
            <div className='row mx-1 h5 menuItem signoutLink'>
              <div className='d-flex align-items-center'>
                <i className='fa fa-sign-out pt-2 mr-2 h6'></i>
                <span>
                  <Link to='/'>Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-10 col-md-8 p-3'>
          <div className='admin-header d-flex flex-row-reverse align-items-center pr-3'>
            <i className='fa fa-github-alt ml-2'></i>
            <i className='fa fa-bell ml-2'></i>
            <i className='fa fa-question-circle ml-2'></i>
            <div className='mr-1'>
              Feedback?
            </div>
          </div>
          <div className='admin-new-clients'>
            <div className='h4 py-2'>
              Registration
            </div>
            <div className='bg-white rounded-lg p-3'>
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
                        type='email'
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { register })(Register)