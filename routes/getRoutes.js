const express = require('express')
const routes = express.Router()
const sch = require('../services/sch')









// routes.post('/indeed', async (req,res) =>{
//     try{
//         const { skill } = req.body
//         let scrp = await main(skill)
//         return res.status(200).json({
//             status:'ok',
//             //list: scrp && typeof scrp === 'object' && scrp.list ? scrp.list : {}
//             list:scrp?.list ||  {}

//         })
//     }

//     catch(e){
//         return res.status(500),send(e)
//     }
// })

routes.get('/scheduler-indeed', async (req, res) => {
    try{ 
        const xyz = await sch()
        return res.status(200).send(xyz)

    
 } 
    catch(e){
        return res.status(500).send(e)
    }
})

module.exports = routes