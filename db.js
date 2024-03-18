const mongoose = require('mongoose');
const mongoURI='mongodb+srv://ash:ashdevs@cluster0.hke3syz.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB=async()=>
{
    // await mongoose.connect(mongoURI,{useNewUrlParser: true},(err,result)=>{
    // if(err) 
    //     {
    //         console.log("-there is a problem in connection-",err)  
    //     }     
    // else
    //     {
    //         console.log("connected");
    //         //now trying to fetch data
    //         const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray;
    //         fetched_data( function( err,data){
    //             if(err) console.log("there is some problem",err);
    //             else
    //         {
    //             console.log(data)
    //         }
    //     })
    // }
        
    // }
    // );
    //below code read the data
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true });
        console.log('Connected');

        const data = await mongoose.connection.db.collection('food_items').find({}).toArray();
        const catData = await mongoose.connection.db.collection('foodCategory').find({}).toArray();
        const od = await mongoose.connection.db.collection('orders').find({}).toArray();
        global.food_items = data;//making this a global variable so that we can acces it from anywhere
        global.foodCategory=catData;
        global.od=od;
    } catch (err) {
        console.error('Error fetching data:', err);
    }
};

module.exports=mongoDB;
