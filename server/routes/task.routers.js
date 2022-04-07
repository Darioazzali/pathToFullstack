const express = require('express');
const router = express.Router();

const Form = require('../models/form.js')

router.get('/', async (request, response) =>
{
    const task= await Form.find()
    console.log(task)
    response.json(task)
})

router.get('/:id', async (request, response) => {
  const task = await Form.findById(request.params.id)
  response.json(task)
});

router.post('/', async (request, response) =>{
   console.log(request.body) ;
   const task = new Form(request.body);
   await task.save();
})

router.put('/:id', async(request, response)=>{
    const newForm = request.body;
    await Form.findByIdAndUpdate(request.params.id, newForm);
} )

router.delete('/:id', async (request, response)=> {
await     Form.findByIdAndDelete(request.params.id)
response.send('Elimintato')
})


module.exports = router;