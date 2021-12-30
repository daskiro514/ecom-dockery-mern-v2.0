const express = require('express')
const router = express.Router()

// For User Generate
const bcrypt = require('bcryptjs')
const normalize = require('normalize-url')
const gravatar = require('gravatar')

// MODEL
const User = require('../../models/User')
const Order = require('../../models/Order')
const Notification = require('../../models/Notification')
const Course = require('../../models/Course')

// FILE UPLOAD
const fileUpload = require('../../utils/fileUpload')

router.get('/getAdminClients', async (req, res) => {
  const clientsFromDB = await User.find({ type: 'client' })
  var clients = []

  for (var index = 0; index < clientsFromDB.length; index++) {
    var client = clientsFromDB[index]._doc
    var ordersByClient = await Order.find({ client: client._id })
    client['orders'] = ordersByClient
    clients.push(client)
  }

  res.json({
    success: true,
    clients
  })
})

router.post('/addNewClient', async (req, res) => {
  let newClient = new User({
    ...req.body
  })

  newClient.passwordForUpdate = req.body.password
  newClient.password = bcrypt.hashSync(req.body.password, 10)
  const avatar = normalize(
    gravatar.url(req.body.email, { s: '200', r: 'pg', d: 'mm' }),
    { forceHttps: true }
  )
  newClient.avatar = avatar
  newClient.type = 'client'

  await newClient.save()

  res.json({
    success: true
  })
})

router.get('/getClient/:id', async (req, res) => {
  const client = await User.findById(req.params.id)

  res.json({
    success: true,
    client
  })
})

router.post('/updateClientDocumentStatus', async (req, res) => {
  await User.findByIdAndUpdate(req.body.clientID, {
    [req.body.keyInDB + 'Status']: req.body.updateType === 'Approve' ? 'Approved' : req.body.updateType === 'Deny' ? 'Denied' : 'Pending'
  })

  res.json({
    success: true
  })
})

router.get('/getClientOrders/:id', async (req, res) => {
  const clientID = req.params.id
  const orders = await Order.find({ client: clientID })

  res.json({
    success: true,
    orders
  })
})

router.post('/storeClientOrders', async (req, res) => {
  const clientID = req.body.clientID
  const orders = req.body.orders

  for (var index = 0; index < orders.length; index++) {
    var order = orders[index]
    var newOrder = new Order({
      ...order
    })
    newOrder.client = clientID

    await newOrder.save()
  }

  res.json({
    success: true
  })
})

router.post('/storeClientNotification', async (req, res) => {
  var newNotification = new Notification({
    client: req.body.clientID,
    content: req.body.notification
  })
  await newNotification.save()

  res.json({
    success: true
  })
})

router.post('/addNewCourse', async (req, res) => {
  const newCourse = new Course({
    ...req.body
  })

  await newCourse.save()

  res.json({
    success: true
  })
})

router.get('/getCourses', async (req, res) => {
  const courses = await Course.find()

  res.json({
    success: true,
    courses
  })
})

router.get('/getCourse/:id', async (req, res) => {
  const course = await Course.findById(req.params.id)

  res.json({
    success: true,
    course
  })
})

router.post('/updateCourse/:id', async (req, res) => {
  const update = { ...req.body }
  await Course.findByIdAndUpdate(req.params.id, update)

  res.json({
    success: true
  })
})

router.delete('/deleteCourse/:id', async (req, res) => {
  await Course.findByIdAndDelete(req.params.id)

  res.json({
    success: true
  })
})

module.exports = router