const express= require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send({hey : 'the fuck you want here'})
    res.send('Currently in production.........')
});


const PORT= process.env.PORT || 3000
app.listen(PORT);
console.log('App started')