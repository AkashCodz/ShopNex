const express = require("express") 
const mongoose = require('mongoose') 
const cors = require("cors")
const EmployeeModel = require('./models/Employee')
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const dotenv = require("dotenv")
dotenv.config()

const app = express() 
app.use(express.json()) 
app.use(cors())

mongoose.connect(process.env.MONGODB_URI);

const { computers_data, fashion, homeKitchen, mobiles, Watches, EarBuds, PowerBank } = require('./data');
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

app.get("/products/all", (req, res) => {
    const combined_data = [...computers_data, ...fashion, ...homeKitchen, ...mobiles, ...Watches, ...EarBuds, ...PowerBank];
    const shuffled_data = shuffle(combined_data);
    res.json(shuffled_data);
});

app.get("/products/computers", (req, res) => {
    res.json(computers_data);
});
app.get("/products/fashion", (req, res) => {
    res.json(fashion);
});
app.get("/products/homeKitchen", (req, res) => {
    res.json(homeKitchen);
});
app.get("/products/mobiles", (req, res) => {
    res.json(mobiles);
});
app.get("/products/Watches", (req, res) => {
    res.json(Watches);
});
app.get("/products/EarBuds", (req, res) => {
    res.json(EarBuds);
});
app.get("/products/PowerBank", (req, res) => {
    res.json(PowerBank);
});

// Parse JSON bodies
app.use(bodyParser.json());

app.post('/api/cart', (req, res) => {
    const cartData = req.body;
  
    // Ensure each item has a unique ID
    const processedCartData = cartData.map(item => ({
      ...item,
      id: item.id || uuidv4(),
    }));
  
    // Here you can process the received cart data, such as saving it to a database
    console.log('Received cart data:', processedCartData);
  
    res.json({ message: 'Cart data received successfully!' });
  });


app.post("/login", (req, res) => {
    const {email, password} = req.body; 
    EmployeeModel.findOne({email: email})
    .then(user => { 
        if(user) {
            if(user.password === password){
                res.json({data:'Success', body: [user.email, user.name, req.body]})
            }else{
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record existed") }
    })
    })

app.post('/register', (req, res) => {
    const {name, email, password} = req.body; 
    EmployeeModel.findOne({email: email})
    .then(user => { 
        if(user) {
            res.json("Already have an Account")
        } else {
            EmployeeModel.create({name: name, email:email, password:password})
            .then(result => res.json('Account Created'))
            .catch(err => res.json(err))
            }
        })
        .catch(err => res.json(err))
    })
    
app.post("/logout", (req, res) => {
    // Here, you'll invalidate the user's session or token
    res.json({ message: "Logged out successfully" });
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});