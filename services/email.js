const nodemailer = require('nodemailer');
const main = require('../scrapeFn/scrape')



const credentials = { email_id : 'anupam8732@gmail.com', password : 'xsmtpsib-bc6e24b885603718c28245e90d882e465b5e72f1ff7a7ab26ff14c7c8c4b32b2-SRhw6v8QPAOLGm5H' }


const SMTP = 587
const HOST = 'smtp-relay.sendinblue.com'
const SENDER_EMAIL = credentials.email_id
const RECEIVER_EMAIL = 'anupam8732@gmail.com'

const CC = []
const BCC = []

const EMAIL_SUBJECT = 'HAPPY BIRTHDAY'
// const EMAIL_BODY_HTML = '<h1>HAPPY BIRTHDAY</h1>'
const EMAIL_BODY_HTML = main('SDE')

const option = {
  from: SENDER_EMAIL,
  to: RECEIVER_EMAIL,
  cc:CC,
  bcc:BCC,
  subject: EMAIL_SUBJECT,
  html: EMAIL_BODY_HTML
}

const transporter = nodemailer.createTransport({
  host: HOST,
  port: SMTP,
  secure: false,
  auth:{
    user:credentials.email_id,
    pass:credentials.password
  }
})


module.exports = {transporter, option}