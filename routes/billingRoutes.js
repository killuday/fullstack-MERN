const keys=require('../config/keys')
const stripe=require('stripe')(keys.stripeSecretKey);
const requireLogin= require("../middlewares/requireLogin");



module.exports = app =>{
   app.post('/api/stripe', async (req,res)=>{
    if(!req.user){
        return res.status(401).send({error: "You must login"});       
    }
    const charge = await stripe.paymentIntents.create({
        amount:100,
        currency: 'inr',
        description: '₹100 for 10 credits',
        payment_method_types: ['card']
       // source: req.body.id
        });
    

        req.user.credits += 5;
        const user=await req.user.save();


    res.send(user);
   })
}