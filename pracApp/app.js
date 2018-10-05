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

app.use(express.json());


const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' }
];

app.get('/', (req, res) => { 
    res.send('My new App~~!!')
}); 

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

// creating a new course object and adding it to the array...
app.post('/api/courses', (req, res) => {
    if (!req.body.name || req.body.name < 3){
        res.status(400).send(`name required`);
    return;
};
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});








app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    if(!course) res.status(404).send(`not found`) // return 404

    res.send(course);
});


// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.query);
// });











//Environmental variable

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));


/* USEFUL RESOURCES BELOW...
https://www.youtube.com/watch?v=pKd0Rpw7O48
*/