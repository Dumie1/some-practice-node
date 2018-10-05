/*
Modules build for Node
- Operating system.
- file system (fs)
- events
- http
*/
/*steps in creating this project

*/


const Joi = require('joi');
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

    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    };

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// updating a course
app.put('/api/courses/:id', (req, res) => {
   //look up the new course else 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`Course not found`) // return 404

    const {error} = validateCourse(req.body);
    if (error) {
        res.status(400).send(result.error.details[0].message);
        return;
    };
    //update a course
    course.name = req.body.name;
    res.send(course);

});

//to delete
app.delete('/api/courses/:id', (req, res) => {
    //checking course n returning 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`Course not found`) // return 404

    //to delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //return course
    res.send(course);

});








function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);

};





// app.get('/api/courses/:id', (req, res) => {
//     const course = courses.find(c => c.id === parseInt(req.params.id));

//     if(!course) res.status(404).send(`not found`) // return 404

//     res.send(course);
// });


// app.get('/api/courses/:id', (req, res) => {
//     res.send(req.query);
// });











//Environmental variable

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}...`));


/* USEFUL RESOURCES BELOW...
https://www.youtube.com/watch?v=pKd0Rpw7O48
*/