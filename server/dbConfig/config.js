const {MongoClient} = require('mongodb');
const uri =
    'mongodb+srv://vvyshyvan:Valyan0_BooK1ng@valyano.xug1b.mongodb.net/valyano_booking?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = client;
