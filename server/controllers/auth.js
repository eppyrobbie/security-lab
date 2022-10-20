const bcrypt = require('bcrypt')

const users = []

module.exports = {



    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          res.status(200).send(users[i])
        }
      }
      res.status(400).send("User not found.")
    },
    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body

      const saltRounds = 10
      bcrypt.hash(password, saltRounds, (error, hashPass) => {
        //console.log(hashPass)
        let newDatabaseEntry = {}
        newDatabaseEntry.username = username
        newDatabaseEntry.email = email
        newDatabaseEntry.firstName = firstName
        newDatabaseEntry.lastName = lastName
        newDatabaseEntry.password = hashPass
        console.log(newDatabaseEntry)


      })
      
        console.log(req.body)
        users.push(req.body)
        res.status(200).send(req.body)
    }
}