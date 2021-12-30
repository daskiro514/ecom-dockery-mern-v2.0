import React from 'react'
import { connect } from 'react-redux'
import { getClient, setClientCurrentPage } from '../../../actions/admin'
import { documenetsPendingCheck } from '../../../utils/clientDocuments'
import Spinner from '../../layout/Spinner'
import AdminClientDocuments from './AdminClientDocuments'
import AdminClientStore from './AdminClientStore'

import { update } from '../../../actions/auth'

const AdminClient = ({ match, getClient, client, setClientCurrentPage, currentPage, update }) => {
  const [formData, setFormData] = React.useState({
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    nameOfLLC: '',
    einOfLLC: '',
    addressOfLLC: '',
    nameOfStore: '',
    bankAccount: '',
    bankRouting: '',
    emailOfFacebook: '',
    passwordOfFacebook: '',
    frontCardLink: '',
    backCardLink: ''
  })

  const { firstName, lastName, email, password, phoneNumber, dateOfBirth, nameOfLLC, einOfLLC, addressOfLLC, nameOfStore, bankAccount, bankRouting, emailOfFacebook, passwordOfFacebook, frontCardLink, backCardLink } = formData

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = e => {
    e.preventDefault()
    update(formData, formData._id)
    getClient(match.params.id)
    document.getElementById('closeButton').click();
  }

  React.useEffect(() => {
    getClient(match.params.id)
  }, [match, getClient])

  React.useEffect(() => {
    if(client.dateOfBirth) {
      let date = client.dateOfBirth.split('T')[0];
      setFormData({
        ...client,
        dateOfBirth: date
      });
    }
  }, [client])

  return (
    <div className='container admin-client'>
      {client ?
        <>
          <div className='h4 pt-2'>
            <span className='mr-1'>{client.firstName} {client.lastName}</span>
            <span>
              <i onClick={() => setClientCurrentPage('store')} className={'fa fa-shopping-cart p-2 mr-1 ' + (currentPage === 'store' ? 'client-current-page' : '')}></i>
              <i onClick={() => setClientCurrentPage('document')} className={'fa fa-address-book-o p-2 mr-1 ' + (currentPage === 'document' ? 'client-current-page' : '')}></i>
              <i onClick={() => setClientCurrentPage('setting')} className={'fa fa-gear p-2 ' + (currentPage === 'setting' ? 'client-current-page' : '')}></i>
            </span>
          </div>
          <div className='d-flex d-flex-row justify-content-between align-items-center'>
            <span className={'text-white badge ' + (documenetsPendingCheck(client) === 'All Documents Approved' ? 'badge-info' : 'badge-pending')}><i className='fa fa-exclamation-triangle'></i> {documenetsPendingCheck(client)}</span>
            <button type="button" className="btn btn-success" id='button' data-toggle="modal" data-target="#myModal">Update Client</button>
          </div>
          {currentPage === 'store' ? <AdminClientStore clientID={match.params.id} /> : null}
          {currentPage === 'document' ? <AdminClientDocuments /> : null}
          {currentPage === 'setting' ? <div>Setting</div> : null}
        </>
        : <Spinner />
      }
      <div className="modal" id='myModal'>
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Update User Info</h4>
              <button type="button" id='closeButton' className="close" data-dismiss="modal">&times;</button>
            </div>

            <form className='form' onSubmit={onSubmit}>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>First Name</label>
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
                    <label>Last Name</label>
                    <input
                      type='text'
                      className='form-control'
                      name='lastName'
                      value={lastName}
                      onChange={onChange}
                      required
                    />
                  </div>
                  {/*<div className='form-group'>
                    <label>Email Address</label>
                    <input
                      type='text'
                      className='form-control'
                      name='email'
                      value={email}
                      onChange={onChange}
                      required
                    />
                  </div>*/}
                  <div className='form-group'>
                    <label>Phone Number</label>
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
                    <label>Date of Birth</label>
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
                    <label>Name of Your LLC to be used for the Facebook Shop</label>
                    <input
                      type='text'
                      className='form-control'
                      name='nameOfLLC'
                      value={nameOfLLC}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>What is the EIN of this LLC?</label>
                    <input
                      type='text'
                      className='form-control'
                      name='einOfLLC'
                      value={einOfLLC}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>What is the addresss on file of this LLC?</label>
                    <input
                      type='text'
                      className='form-control'
                      name='addressOfLLC'
                      value={addressOfLLC}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>What would you like the name of your store to be? (If you'd like us to choose, write "You Choose")</label>
                    <input
                      type='text'
                      className='form-control'
                      name='nameOfStore'
                      value={nameOfStore}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Bank Account Number for Sales Revenue</label>
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
                    <label>Bank Routing Number for Sales Revenue</label>
                    <input
                      type='text'
                      className='form-control'
                      name='bankRouting'
                      value={bankRouting}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label>Facebook Login EMAIL. (If you created your Facebook with a phone number, please go into settings and find the email associated, please associate one with your Facebook and provide that email to us below)</label>
                    <input
                      type='text'
                      className='form-control'
                      name='emailOfFacebook'
                      value={emailOfFacebook}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Facebook login PASSWORD</label>
                    <input
                      type='text'
                      className='form-control'
                      name='passwordOfFacebook'
                      value={passwordOfFacebook}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group mt-3'>
                    <b>Credit Card for Cost of Goods</b>
                  </div>
                  <div className='form-group'>
                    <label>Picture of Front of the Card</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Upload DropBox / Google Drive Link'
                      name='frontCardLink'
                      value={frontCardLink}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className='form-group'>
                    <label>Picture of Back of the Card</label>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Upload DropBox / Google Drive Link'
                      name='backCardLink'
                      value={backCardLink}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className='form-group pt-3'>
                <input
                  type='submit'
                  className='form-control'
                  style={{ backgroundColor: '#A78BE2' }}
                  value='Submit'
                />
              </div>
            </form>

            <div className="modal-footer">
              <button type="button" className="btn bg-keto-primary">Don't show it again.</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  client: state.admin.adminClient,
  currentPage: state.admin.adminClientCurrentPage
})

export default connect(mapStateToProps, { getClient, setClientCurrentPage, update })(AdminClient)