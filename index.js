const express = require('express')
const app = express()
const getRoutes = require('./routes/getRoutes')
// const scheduler = require('node-cron')
// const {transporter, option} = require('./services/email')


const PORT = 3001

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))

app.use('/api/v1',getRoutes)


// scheduler.schedule('30 6 1 * *', () =>{
//     console.log('inside scheduler')
//     transporter.sendMail(option, (err, info) => {
//       if(err){
//         console.error(err)
        
//       }
//       console.log('Eamil send with info-', info)
//     })
//   })

app.listen(PORT, () =>{
    console.log('server is running')
})


