import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { formatDate } from '../../utils/formatDate1'
import { getDocumentList } from '../../utils/clientDocuments'
import { documenetsPendingCheck } from '../../utils/clientDocuments'
import Spinner from '../layout/Spinner'
import logoImage from '../../img/common/logo.png'

import { update } from '../../actions/auth'

const ClientAccount = ({ client, update }) => {
  const history = useHistory()

  const [formData, setFormData] = React.useState({
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
    update(formData, client._id)
    window.location.href = '/dashboard/account';
  }

  React.useEffect(() => {
    if(client) {
      let date = client.dateOfBirth.split('T')[0];
      setFormData({
        ...client,
        dateOfBirth: date
      });
    }
  }, [])

  return (
    <div className='admin-client client-account'>
      <div className='h4 pt-2'>
        My Account
      </div>
      <div className='d-flex d-flex-row justify-content-between align-items-center'>
        <span className={'text-white badge ' + (documenetsPendingCheck(client) === 'All Documents Approved' ? 'badge-info' : 'badge-pending')}><i className='fa fa-exclamation-triangle'></i> {documenetsPendingCheck(client)}</span>
        <button type="button" className="btn btn-success" id='button' data-toggle="modal" data-target="#myModal">Update User</button>
      </div>
      <div className='bg-white rounded-lg p-3 mt-3'>
        <div className='row'>
          <div className='col-md-6'>First Name:</div>
          <div className='col-md-6 pl-4'>{client.firstName}</div>
          <div className='col-md-6'>Last Name:</div>
          <div className='col-md-6 pl-4'>{client.lastName}</div>
          <div className='col-md-6'>Email Address:</div>
          <div className='col-md-6 pl-4'>{client.email}</div>
          <div className='col-md-6'>Password:</div>
          <div className='col-md-6 pl-4'>{client.passwordForUpdate}</div>
          <div className='col-md-6'>Phone Number:</div>
          <div className='col-md-6 pl-4'>{client.phoneNumber}</div>
          <div className='col-md-6'>D.O.B:</div>
          <div className='col-md-6 pl-4'>{formatDate(client.dateOfBirth)}</div>
          <div className='col-md-6'>Name of Facebook Shop LLC:</div>
          <div className='col-md-6 pl-4'>{client.nameOfLLC}</div>
          <div className='col-md-6'>EIN of LLC:</div>
          <div className='col-md-6 pl-4'>{client.einOfLLC}</div>
          <div className='col-md-6'>Address on file of LLC:</div>
          <div className='col-md-6 pl-4'>{client.addressOfLLC}</div>
          <div className='col-md-6'>Name Of Store:</div>
          <div className='col-md-6 pl-4'>{client.nameOfStore}</div>
          <div className='col-md-6'>Bank Account Number for Sales Revenue:</div>
          <div className='col-md-6 pl-4'>{client.bankAccount}</div>
          <div className='col-md-6'>Bank Routing Number for Sales Revenue:</div>
          <div className='col-md-6 pl-4'>{client.bankRouting}</div>
          <div className='col-md-6'>Facebook Login Email:</div>
          <div className='col-md-6 pl-4'>{client.emailOfFacebook}</div>
          <div className='col-md-6'>Facebook Login Password:</div>
          <div className='col-md-6 pl-4'>{client.passwordOfFacebook}</div>
        </div>

        <div className='table-responsive pt-4'>
          <table className='table'>
            <thead>
              <tr>
                <th>Date</th>
                <th>Document</th>
                <th>Content</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {getDocumentList(client).map((item, index) =>
                <tr key={index}>
                  <td>{formatDate(client.date)}</td>
                  <td>{item.name}</td>
                  <td style={{
                    maxWidth: '200px',
                    wordBreak: 'break-all'
                  }}><a href={item.path} target='_blank' rel='noreferrer'>{item.path}</a></td>
                  <td><span className={item.status === 'Pending' ? 'text-danger' : 'text-secondary'}>{item.status}</span></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

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
  client: state.auth.user,
})

export default connect(mapStateToProps, { update })(ClientAccount)