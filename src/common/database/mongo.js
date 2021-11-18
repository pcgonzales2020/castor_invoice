const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error);

module.exports = client.db('invoice_users');