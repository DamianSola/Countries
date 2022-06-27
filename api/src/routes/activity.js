const {Tourims,Country} = require('../db')



const saveActivity = async (req,res) =>{
    let {name,dificult,season,durations,id,country} =req.body;
   try {
    
    let newActivity =  await Tourims.create({
        name:name,
        dificult: dificult,
        season: season,
        durations: durations,
    })
    await newActivity.addCountry(country)
    res.send(newActivity)
   } catch (error) {
       console.log(error)
       res.json({error:'no se pudo agregar actividad'})
    }
}

const DbActivity = async (req,res) => {
    try{
        const allActivity = await Tourims.findAll() 
        res.json(allActivity)
    }catch(error){
        res.send(console.log(error))
    }
}

module.exports = {saveActivity,DbActivity}