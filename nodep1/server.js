import express, {json} from 'express'
import cors from 'cors';
// Enable CORS for all origins
const app= express()
const PORT=5005
app.use(cors());

app.use(express.json())

app.get('/firstapi',(req,res)=>{
    const s= {
        name: 'Reacttt',
        age: 30,
        city: 'New York'
    }
   return  res.send(s)
})

app.get('/secondapi',(req,res)=>{
    const s= {
        name: 'Second',
        age: 30,
        city: 'New York'
    }
    res.send(s)
})

app.get('/jons2',(req,res)=>{
    const s= ["Apple", "Banana", "Orange", "Mango"]

    return res.send(s)

})




app.listen(PORT,()=>{
    console.log(`Server is running on porttt ${PORT}`)
})



