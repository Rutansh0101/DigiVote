const express = require('express');
const dbConnect = require('./config/Database');
require('dotenv').config();


const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());


// importing routes:
const questionsRoutes = require('./routes/Questions');

// Mounting routes:
app.use('/api', questionsRoutes);




app.get('/', (req, res) => {
    res.send('<h1>This is DigiVote Backend</h1>');
    }
);


app.listen(PORT, () => {
    console.log('Server is running on port http://localhost:3001');
    }
);

dbConnect();