import fetch from 'node-fetch';
// import { MongoClient } from 'mongodb';
import { connectToMongoDB } from './lib/mongodb.js'


async function fetchData() {
  try {
    const loginResponse = await fetch('http://reso-product-api.reso.vn/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'homiestaff',
        password: '123456',
      }),
    });
    const { accessToken } = await loginResponse.json();
    const response = await fetch('http://reso-product-api.reso.vn/api/v1/stores/menus', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    //insert to mongodb
    const data = await response.json();
    console.log(data); // here see the log in terminal

    const db = await connectToMongoDB();
    const collection = db.collection('menus'); // name to collections
    await collection.insertMany(Array.isArray(data) ? data : [data]); // check case array === null
    console.log('Data inserted into MongoDB Atlas');
    console.log('Connection closed');
  } catch (error) {
    console.error('Error:', "Can not insert to Mongodb Atlats");
  }
}

fetchData();
