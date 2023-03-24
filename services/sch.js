const scheduler = require('node-cron')
const {transporter, option} = require('./email')



async function sch(){
    scheduler.schedule('30 6 1 * *', () =>{
        console.log('inside scheduler')
        transporter.sendMail(option, (err, info) => {
        if(err){
            console.error(err)
            return err
            
        }
        console.log('Eamil send with info-', info)
        return 'scheduler has started'
        })
    })
}



module.exports = sch;