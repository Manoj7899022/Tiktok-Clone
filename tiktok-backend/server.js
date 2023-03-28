import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT || 5000

const url = "mongodb+srv://admin:admin@cluster0.22i5mt8.mongodb.net/?retryWrites=true&w=majority"
mongoose.set("strictQuery",true)
mongoose.connect(url)

//schema
const tiktokSchema = new mongoose.Schema(
    {
    url:String,
    channel:String,
    description:String,
    song:String,
    likes:String,
    shares:String,
    messages:String
})

const productModel = mongoose.model("posts",tiktokSchema)

app.post("/insert",async(req,res)=>{
    const newProduct = productModel(req.body)
    const result =await newProduct.save()
    res.send(result)
})

app.get("/get",async(req,res)=>{
    let result = await productModel.find()
    res.send(result)
})

app.listen(port, () => console.log(`Listenig on localhost: ${port}`))
