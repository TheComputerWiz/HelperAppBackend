const accountSid = process.env.ACCOUNTSID
const authToken = process.env.AUTHTOKEN
const serviceId = process.env.SERVICEID
const twilio = require('twilio')
const client = new twilio(accountSid, authToken)

exports.send_verification = async (req, res) => {
    const to = req.params.to

    client.verify
      .services(serviceId)
      .verifications.create({ to, channel: 'sms' })
      .then((verification) => {
        res.json(verification)
      })
      .catch((err) => {
        res.json(err)
      })
}

exports.verify = async (req, res) => {
    const to = req.params.to
  const code = req.params.code
  client.verify
    .services(serviceId)
    .verificationChecks.create({ to, code })
    .then((verification) => {
      res.json(verification)
    })
    .catch((err) => {
      res.json(err)
    })
}