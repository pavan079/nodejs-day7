const express = require("express");

const router = express.Router();

const products = require("../models/products");

// POST end point
router.post("/addProduct", (req, res) => {
  req.body.dateTime = new Date();
  products.create(req.body, (err, product) => {
    if (err) {
      res.send(err.message);
    } else {
      res.redirect('/products');
    }
  });
});

//products endpoint with render response
// router.get("/", (req, res) => {
//   res.render("products.ejs",{productsData});
// });

// GET endpoint
router.get("/", (req, res) => {
  products.find((err, result) => {
    if (err) {
      console.log(err);
    } else {
        res.render('products.ejs',{productsData:result,form1:'Add Form',form2:'Show Product Details', form3:'Update Form',form4:'Delete Form'})
    }
  });
});

//update end point
router.post('/updateProduct',(req,res)=>{
    products.findOneAndUpdate(
        {productName:req.body.productName},{$set:{productPrice:req.body.productPrice}},
        (err, dbresponse) => {
            if (err) {
                console.log(err)
            } else {
                // res.send("product price details updated succesfully")
                res.redirect('/products');
            }
        })
})


router.post('/deleteProduct',(req,res)=>{
    products.findOneAndDelete(
        {productName:req.body.productName},
        (err, dbresponse) => {
            if (err) {
                console.log(err)
            } else {
                // res.send("product details deleted succesfully")
                res.redirect('/products');
            }
        })
})

module.exports = router;
