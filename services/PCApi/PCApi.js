const express = require('express');
const app = express();

app.use('/', require('./routes/index.js'));

// Either uses the environment variable PORT or 9000
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});