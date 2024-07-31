import express from 'express'

const app = express()
const PORT = 3100

app.get("/",(req,res)=>{
    const {firstName,lastName,month,date,year} = req.query
    res.send(`<div><div>${firstName} ${lastName}</div><div>Login Date:${month} ${date},${year}</div></div>`)
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})