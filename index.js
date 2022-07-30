const express = require('express');
const app = express();
app.use(express.json())

app.get('/',(req, res) => {
    res.json({
        username : "harold",
        lastname : "Peña",
        age : "23"
    });
})

app.post('/user/:id', (req,res) => {
    console.log(req.body)
    console.log(req.params)
    res.send('post me');
})
app.put('/put', (req,res) => {
    res.send('index put');
})
app.delete('/delete', (req,res) => {
    res.send('<h1>Titulo de prueba Delete</h1>');
})


app.listen(3000,() => {
    console.log('Listen in port 3000...');
})