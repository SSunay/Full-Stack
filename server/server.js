const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = 8000;

let idCounter = 6;


let products = [
      {
        "name": "iphone",
        "product": "14 pro max",
        "description": "dsdsd",
        "price": "3000",
        "id": 3
      },
      {
        "name": "iphone",
        "product": "14 pro max",
        "description": "just for fun",
        "price": "3000",
        "id": 4
      },
      {
        "name": "iphone",
        "product": "14 pro max",
        "description": "just for fun",
        "price": "3000",
        "id": 5
      },
      {
        "name": "samsung",
        "product": "s23",
        "description": "bahadi alma",
        "price": "4000",
        "id": 6
      },
      {
        "name": "samsung",
        "product": "s23",
        "description": "bahadi alma",
        "price": "4000",
        "id": 7
      },
      {
        "name": "iphone",
        "product": "s23",
        "description": "bahadi alma",
        "price": "4000",
        "id": 8
      },
      {
        "name": "iphone",
        "product": "s23",
        "description": "bahadi alma",
        "price": "4000",
        "id": 9
      },
      {
        "name": "huawei",
        "product": "mate 50 pro",
        "description": "sssss",
        "price": "5000",
        "id": 10
      },
      {
        "name": "huawei",
        "product": "mate 50 pro",
        "description": "sssss",
        "price": "5000",
        "id": 11
      },
      {
        "name": "huawei",
        "product": "mate 50 pro",
        "description": "sssss",
        "price": "5000",
        "id": 12
      },
      {
        "name": "xiaomi",
        "product": "mi12t pro",
        "description": "kasibin mali",
        "price": "1200",
        "id": 13
      },
      {
        "name": "asus",
        "product": "zenbook",
        "description": "sssss",
        "price": "6000",
        "id": 14
      },
      {
        "name": "fghgh",
        "product": "gfsgfsgfd",
        "description": "ddf",
        "price": "1222",
        "id": 15
      },
      {
        "name": "fghgh",
        "product": "gfsgfsgfd",
        "description": "ddf",
        "price": "1222",
        "id": 16
      },
      {
        "name": "fghgh",
        "product": "gfsgfsgfd",
        "description": "ddf",
        "price": "1222",
        "id": 17
      }
    ]
  
app.use(cors());
app.use(bodyParser.json());
// get aall products
app.get('/products', (req ,res)=>{
    res.send(products)
})

//get products with ID

app.get('/products/:id',(req,res)=>{
    const id = req.params.id;

    const selectedProduct = products.find((products)=>products.id == id);
    if(selectedProduct){
        res.send(selectedProduct)
        res.status(200)
    }else{
        console.log("There is no such product")
        res.status(404).json({message:"There is no such product"})
    }
})

//delete product with ID

app.delete('/products/:id',(req,res)=>{
    const id = +req.params.id;
    products = products.filter((q)=>q.id !== id);
    res.status(200).json({message:"Successfull!!!"})
})

////post new products

app.post('/products',(req,res)=>{
    console.log(req.body);
    const productObj ={
        id: idCounter++,
        name: req.body.name,
        product: req.body.product,
        description: req.body.description,
        price: req.body.price,
    }
    products.push(productObj)
})






    app.listen(port,()=>{
        console.log(`this app is listining on port ${port}`)
    })