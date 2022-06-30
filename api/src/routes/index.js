const { Router } = require('express');
const express = require('express');
const {Country,Tourims} = require('../db.js');
const {saveActivity,DbActivity,} = require('./activity.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getCountryApi,getCountryDb} = require('./country.js')

const logger = require('morgan')

const router = Router();
router.use(express.json())
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(logger('tiny'))

getCountryApi()

// router.get('/countries', async (req,res) => {
//     try{
//         const countt = await Country.count();
//         if(countt === 0 ) await getCountryApi();
//         const countries = await getCountryDb();
//         res.json(countries)
//     }catch(error){
//         console.log(error)
//     }
// })

router.get('/countries', async (req,res,next) => {
    let nombre = req.query.name;
    const countt = await Country.count();
    if(countt === 0 ) await getCountryApi();
    const countries = await getCountryDb();
    if(nombre){
        try{
            let realName = await countries.filter(e => e.name.toLowerCase().includes(nombre.toLowerCase()))
            realName = realName.find(el => el)
            console.log(realName)
            if(realName !== null){
                res.send(realName)
            }else{
                res.status(400).json({sorry:"country not found"})
            }
        }
        catch(err){
            console.log(err)
            // next(err)
        }
    }else{
        res.send(countries);
    }   
})

router.get("/countries/:id",async (req,res)=>{
    let {id} = req.params;
    id = id.toUpperCase()
    try{
        if(id){
            const countrydb = await Country.findOne({ where: { id: id }, include: Tourims })
            if(countrydb){
                // let {name, flag, continent,capital,subregion,population,area,id} = countrydb;
                // let {Tourims} = countrydb;
                // let activity = {Tourims}
                // let data = {name,flag,continent,capital,subregion,population,area,id}
                res.json(countrydb);
            }else res.status(400).json({error:'country not found'})
        }
    }catch(error){
        console.log(error)
    }
})

router.post('/activity', saveActivity)
router.get('/activity', DbActivity)
router.delete('/activity/:id', async (req,res) => {
    let {id} = req.params;
    try{
        await Tourims.destroy({where: {id}})
        res.send({msg:`la actictividad numero ${id} fue eliminada`})
    }catch(err){
        console.log(err)
    }
})

   
module.exports = router;
