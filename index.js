const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log('Started running on port', PORT));