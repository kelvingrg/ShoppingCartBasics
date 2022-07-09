//this file is for connecting with database , this file is called in app.js file as db. 
const mongoClient=require('mongodb').MongoClient
const state ={
    db:null
}
module.exports.connect=function(done){
    const url='mongodb://localhost:27017'
    const dbname='shopping'
    mongoClient.connect(url,(err,data)=>{
        if(err) 
        return done(err)
        state.db=data.db(dbname) //if there is no erroe then it will connect with data base and send 
        done()
    })

}
module.exports.get=function(){
    return state.db
}