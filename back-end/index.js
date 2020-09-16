const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const pool = require('./config');
const app = express();


const { addUser, removeUser, getUser, getUsersInRoom } = require('./users.js');

const PORT = process.env.PORT || 5000;

const mRouter = require('./routes/message');

const server = http.createServer(app);
const io = socketio(server);

app.use(mRouter);
app.use(cors());
app.use(express.json());

// users
app.post("/add_users", async (req, res) => {
    try {
        const { name, username, location, email, phone, short_bio, picture } = req.body;
        const newUser = await pool.query("INSERT INTO users (name, username, location, email, phone, short_bio, picture) VALUES ($1,$2,$3,$4, $5,$6, $7) returning *", [name, username, location, email, phone, short_bio, picture]);
        res.json(newUser.rows[0]);
    } catch (err) {
        res.json({error:'User already exists.'})
        console.error(err.message);
    }
});

// get ALL profile data
app.get("/user_profile", async (req, res) => {
    try {
        const userInfo = await pool.query("SELECT * FROM users");
        res.json(userInfo.rows);
    } catch (err) {
        console.error(err.message);
    }
});

// get SPECIFIC profile data
app.get("/user_profile/:email", async (req, res) => {
    try {
        const {email} = req.params
        const userProfile = await pool.query("SELECT * FROM users WHERE email = $1 ", [email]);
        res.json(userProfile.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});

// profile
app.put("/update_user", async (req, res) => {
    try {
        // const {id} = req.params;
        console.log(req.body, "************");
        const {name, userName, location, phone, shortBio, email} = req.body;
        const editUser = await pool.query(
            "UPDATE users SET (name, username, location, phone, short_bio, email) = ($1, $2, $3, $4, $5, $6) WHERE email = $6", 
            [name, userName, location, phone, shortBio, email]);
            res.json("Profile updated.");
    } catch (err){
        console.error(err.message);
    }
});




// deeds


// chat
io.on('connect', (socket) => {
    socket.on('join', ({ name, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, name, room });

        if (error) return callback(error);

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to ${user.room} room. ` });
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined! ` });

        socket.join(user.room);

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        const user = removeUser(socket.id);

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        };
    });
});


server.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));