const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.json({"data": 1234});
})

mongoose
  .connect(
    "mongodb+srv://psharma:psharma@cluster0.xvu7n8e.mongodb.net/FlashCards"
  )
  .then(() => {
    console.log("Connected to MongoDB now");
  })
  .catch((err) => {
    console.log(err);
  });

const appsSchema = new mongoose.Schema({
    question: String,
    answer: String,
});

const appsModel = mongoose.model("card", appsSchema);

app.get('/getFlashCards', (req, res) =>{
    appsModel
    .find()
    .then((data) => {
        console.log(data);
        res.send(data);
    })
    .catch((err) => console.log(err));
})

app.put('/updateCard/:id', async (req, res) => {
    const cardId = req.params.id;
    console.log(cardId);
    try {
        const updatedCard = await appsModel.findByIdAndUpdate(
            cardId, 
            {
                question: req.body.question,
                answer: req.body.answer,
                hint: req.body.hint
            }, 
            { new: true }
        );

        if (!updatedCard) {
            return res.status(404).json({ message: 'Card not found' });
        }

        res.status(200).json({ message: 'Card updated successfully', updatedCard });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/addFlashCard', async (req, res) => {
    const newCard = new appsModel({
        question: req.body.question,
        answer: req.body.answer
    });

    newCard.save((err, data) =>
    {
        if(err) return console.log(err);
        res.status(200).json({message: "Card added successfully", data});
    })
})

app.delete('/deleteCard/:id', async (req, res)=>
{
    const cardId = req.params.id;

    try{
        const card = await appsModel.findByIdAndDelete(
            cardId, (err, deletedCard) =>
            {
                if(err) return console.log(err);
                if (!deletedCard) return res.status(404).json({ message: 'Card not found' });
                res.status(200).json({message: "Card deleted successfully", deletedCard});
            })
    }catch(err)
    {

    }
})



app.listen(5000, ()=>{
    console.log("Server started at 5000");
})