const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    // console.log(__dirname)
    // console.log(req.query)
    res.sendFile('index.html', {root: __dirname })
})

// app.get('/contact-us', (req, res) => {
//     res.send('Thank you for contacting!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

