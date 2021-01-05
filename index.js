const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const UserModel = require("./models/User")

app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://ritwik:zatura990@cluster0.g0mgx.mongodb.net/user?retryWrites=true&w=majority',
 {
    useNewUrlParser: true,
})
app.post('/insert', async (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const number = req.body.number
    const values = req.body.values
    const criteria = req.body.criteria
    const days = req.body.days

    const user = new UserModel({ name: name, email: email, number: number, values: values, days: days, criteria: criteria })
     try{
      await user.save()
     }catch(err) {
         console.log(err)
     }
})

app.get('/read', async (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result)
    })
})

app.delete('/delete/:id', async (req, res) => {
    const id = req.params.id
    
    await UserModel.findByIdAndRemove(id).exec()
    res.send('delete')
})


var port = 5000;
app.listen(port, ()=>{
	console.log("you make it till here");
});
app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The playgrounds Server Has Started!");
});