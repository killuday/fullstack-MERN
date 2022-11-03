//* keys.js figure out what set of credentials set to return

if(process.env.NODE_ENV==='production'){
    //! We are in production - return the set  of production keys
    module.exports= require('./prod')
}else{
    //?We are in development - return the set of development keys
    module.exports=require('./dev')
}