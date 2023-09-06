const express = require('express')

const app = express()
const port = 3000

// app.get('/post', (req,res) => {
//     res.json({ message:'Bonjour je suis node'});
// });

app.use("/post", require("./routes/post.routes"));
 


//lancer le serveur
app.listen(port, () => console.log(`Notre application Node est demarrer sur : http://localhost:${port}`))