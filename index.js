const express= require('express');
const app= express();

app.get('/',(req,res)=>{
    res.send('I love you Venus ')
});


const PORT= process.env.PORT || 3000
app.listen(PORT);
console.log('App started')