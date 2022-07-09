var express = require("express");
const productHelpers = require("../helpers/product-helpers");
var router = express.Router();


/* GET users listing. */
router.get("/", function (req, res, next) {

  productHelpers.getAllProducts().then((products)=>{
    console.log(products);
    res.render('admin/view-products',{admin:true,products})
  })
  
  
  
});
router.get('/add-product', function (req, res, next) {
res.render('admin/add-product');
console.log();
});

router.post('/add-product',(req,res)=>{
  console.log(req.body)
  console.log(req.files.image)
  productHelpers.addProduct(req.body,(id)=>{
let image=req.files.image
console.log(id)
image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
  if(err){
    res.send('error')
    console.log('error is :::::::'+err)}
    else
    res.render('admin/add-product')
 
  
})
  }) // here data is transferred to database
 
 
})


module.exports = router;
