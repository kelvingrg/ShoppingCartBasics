var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
module.exports={
    doSignUp:(userData)=>{
        return new Promise(async(resolve,reject)=>{
           console.log(userData)
           userData.Password=await bcrypt.hash(userData.Password,10)// this 10 refers salt value 
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
                resolve(data.insertId) 
            } )
                
                 }) 
        }  ,
        doLogin:(userData)=>{
            return new Promise(async(resolve,rejecet)=>{
                let loginStatus=false
                let response={}
                let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userData.Email})
                
                if(user){
                    bcrypt.compare(userData.Password,user.Password).then((status)=>{
                        if(status){
                            console.log("succcess")
                            response.user=user
                            response.status=true
                            resolve(response)
                        }
                            else{
                                console.log('failed 1');
                                resolve({status:false})
                            }
                            })

                        }
                        else {
                        console.log('failed 2');
                        resolve({status:false})}
                    })

                }
            
            }
    
        


    
