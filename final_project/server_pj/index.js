const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


//middware;
app.use(cors());
app.use(express.json()); //allows to access request.body

//Routes

//all todos
app.get("/deeds", async (req, res) => {
  try {
    const allDeeds = await pool.query("SELECT * FROM deeds");
    res.send(allDeeds.rows);
  } catch (err) {
    console.log(err.message);
  }
});


//a todo
app.get("/deed/:id", async(req, res)=>{
  try {
    const {id} = req.params;
    const deed = await pool.query("SELECT * FROM deeds WHERE deeds_id =$1", [id])
    console.log(deed)
  } catch (err) {
    console.error(err.message)
  }
});

//create 

app.post("/deed", async (req,res)=>{
    try{
      
      const {title, description, category, location } = req.body;
      const newDeed = await pool.query("INSERT INTO deeds (title, description, category, location) VALUES ($1,$2,$3,$4) returning *", [title,description,category,location]);
      res.json(newDeed.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
  })

//edit
app.put("/deed/:id", async (req, res)=>{
  try {
    const {id}= req.params;
    const {title, description } = req.body;
    const editDeed = await pool.query("UPDATE deeds SET (title, description) = ($1,$2) WHERE deeds_id = $3", [title,description, id]);
    res.json("Deed was updated.");
  } catch (err){
      console.error(err.message);
    }
  })

//delete
app.delete("/deed/:id", async (req,res)=>{
  try{
    const {id} = req.params;
    const deleteDeed = await pool.query("DELETE FROM deeds WHERE deeds_id = $1", [id]);
    res.json("Deed was deleted.")
  } catch (err) {
    console.error(err.messsage);
  }
})

app.listen(3440, () => {
    console.log("Server is listening on port 3440")
})