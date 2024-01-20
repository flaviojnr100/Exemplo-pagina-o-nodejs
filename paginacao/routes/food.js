const express = require('express')
const router = express.Router()

const service = require('../services/ServiceFood')

router.get('/',(req,res,next)=>{
    service.getAll().then(response=>{
        res.status(200)
        res.json(response)
    })
        .catch(err=>{
        res.status(500)
        res.send(err)
    })
    
})
router.get('/search',(req,res,next)=>{
    var page = parseInt(req.query.page)
    var limit = parseInt(req.query.limit)
    service.getFoodPage(page,limit).then(response=>{
        res.status(200)
        res.json(response)
    }).catch(err=>{
        res.status(500)
        res.send(err)
    })
})

module.exports = router;