const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Jameson is calling you!',
    });
});

const PORT = 8080 || process.env.PORT;
app.listen(PORT, () => console.log('Started running on port', PORT));