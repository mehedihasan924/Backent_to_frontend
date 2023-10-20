const express= require('express');
const cors=require('cors');
const phones =require('./phone.json')
const app= express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  app.get('/data', (req, res)=>{
    res.send("I am Success set The Server is Working , this is My Work 2022 Hasan in new Text");
  })
app.get('/text', (req,res)=>{
    res.send("Hasan Hussain Will be success Insa Allah,, I am Try to agine to agine")
})
// Json data lode
app.get('/phones',(req, res)=>{
    res.send(phones)
})

app.get('/phones/:id' ,(req, res)=>{
    const id=parseInt(req.params.id);
    console.log("I need Id ", id)
    const phone=phones.find(phone=>phone.id===id)||{};
    res.send(phone);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
   