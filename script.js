const express = require('express')
const app = express()
const port = 8080
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/calculate", (req, res) => {
    const [a, b] = [req.query.a, req.query.b];
    console.log(a,b);
    if (a == null || b == null) return res.json({"answer": null});
    let hypotenuse = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    res.json({"answer": hypotenuse})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})