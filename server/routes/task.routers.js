const express = require('express');
const { update } = require('../models/form.js');
const router = express.Router();

const Form = require('../models/form.js')

router.get('/', async (request, response) =>
{
    const task= await Form.find()
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
   console.log("Posted")
   response.send(task);
})

router.put('/:id', async(request, response)=>{
    const newForm = request.body;
    const updated = await Form.findByIdAndUpdate(request.params.id, newForm);
    response.send(updated);
} )

router.delete('/:id', async (request, response)=> {
await     Form.findByIdAndDelete(request.params.id)
response.send('Elimintato')
})


module.exports = router;