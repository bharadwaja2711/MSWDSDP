const express = require('express')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://bharadwaja2711:1717@cluster0.thxwy99.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

// Connect to the MongoDB server
client.connect((err) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err)
    return
  }

  const db = client.db("s17")
  const col = db.collection("c211")

  app.get('/',(request,response) => {
    response.send('This is a Server Machine')
  })

  app.post('/insert', (request,response) => {
    col.insertOne(request.body)
    console.log(request.body)
    response.send(request.body)
  })

  app.post('/insertBid', async (req, res) => {
    try {
      const result = await col.insertOne(req.body);
      console.log(result);
      res.send(result);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  app.get('/check',(req,res)=>{
    console.log(req.query)
    async function find(){
      try{
        const result=await col.findOne({un:req.query.un})
        console.log(result)
        if(result == null)
        {
          res.send("FAIL")
        }
        else{
          if(req.query.pw === result.pw)
          {
            res.send("PASS")
          }
          else
          {
            res.send("FAIL")
          }

        }

      }
      finally{}
    }
    find().catch(console.dir)
  })

  app.get("/getAllUser", async (req, res) => {
    try {
      const allUsers = await col.find({}).toArray();
      console.log(allUsers);
      res.send(allUsers);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });
  

  app.listen(8081, () => {
    console.log("Server started on port 8081")
  })
})
