//product related fuction are writtenn  in this file 

var db=require('../config/connection')
var collection=require('../config/collections')
module.exports={ // if we write this all the functions will  be exported , ie, no need to write seapte codes for exporting

    addProduct:(product,callback)=>{
    
        db.get().collection('product').insertOne(product).then((data)=>{
            
            callback(data.insertedId)
        })
    },// since the all functions are written in a so next funcy=tion should be separated by commas 
getAllProducts:()=>{
return new Promise(async (resolve,reject)=>{
    let products=await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
    resolve(products)

})
}

}