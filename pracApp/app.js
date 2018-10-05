/*
Modules build for Node
- Operating system.
- file system (fs)
- events
- http
*/
/*steps in creating this project

*/
const express = require('express');
const app = express();

app.get('/', (req, res) => { 
    res.send('My new App~~!!')
}); 

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]);
});

//Environmental variable

const port = process.env.PORT || 3000;


app.listen(port, () => console.log(`Listening on port ${port}...`));
