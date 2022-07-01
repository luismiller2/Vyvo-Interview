const mongoose = require("mongoose");
const User = require("../../models/User.models")
require('dotenv/config')

let user = [
    {
        firstName: 'Luis',
        lastName: 'Miller',
        email: 'luismiller@mail.com',
        phoneNumber: '(786)-329-9972',
    },
    {
        firstName: 'Dustin',
        lastName: 'Hurtt',
        email: 'dustinhurtt@mail.com',
        phoneNumber: '(305)-123-4567',
    },
    {
        firstName: 'Diego',
        lastName: 'Miller',
        email: 'diegomiller@mail.com',
        phoneNumber: '(305)-233-0136',
    },
    {
        firstName: 'Fabio',
        lastName: 'Galdi',
        email: 'fabiogaldi@mail.com',
        phoneNumber: '(305)-409-8338',
    },
    {
        firstName: 'Alessandro',
        lastName: 'Galdi',
        email: 'alessandrogaldi@mail.com',
        phoneNumber: '(305)-398-1226',
    },
    {
        firstName: 'Bo',
        lastName: 'Short',
        email: 'boshort@mail.com',
        phoneNumber: '(305)-114-3926',
    },
    {
        firstName: 'Alessandro',
        lastName: 'Senatore',
        email: 'alessandrosenatore@mail.com',
        phoneNumber: '(305)-287-3355',
    },
    {
        firstName: 'Dwyane',
        lastName: 'Wade',
        email: 'dwyanewade@mail.com',
        phoneNumber: '(305)-305-3050',
    },
    {
        firstName: 'Pharrell',
        lastName: 'Williams',
        email: 'pharrellwilliams@mail.com',
        phoneNumber: '(305)-718-1289',
    },
    {
        firstName: 'Will',
        lastName: 'Smith',
        email: 'willsmith@mail.com',
        phoneNumber: '(305)-439-9940',
    },
]





mongoose
  .connect( process.env.MONGODB_URI || "mongodb://localhost/vyvo-interviewDB")
  .then((x) =>
    console.log(`SEED "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));

User.create(user)
  .then(function (results) {
    console.log("User Data", results);
  })
  .catch(function (error) {
    console.log("Something went wrong", error.message);
    mongoose.connection.close();
  });