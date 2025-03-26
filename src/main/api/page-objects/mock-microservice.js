const express= require('express');
const app = express();

app.use(express.json());

// Mock Data for Courses
const courses = [
    {id: 1, name: "Course1"},
    {id: 2, name: "Course2"},
    {id: 3, name: "Course3"}
];

// Mock Data for Students
const students = [
    { id: 1, name: "Student1", age: 20 },
    { id: 2, name: "Student2", age: 22 },
    { id: 3, name: "Student3", age: 21 }
];

app.get('/',(req,res)=>{
    res.send('Demo Course application');
});

app.get('/api/courses', (req,res)=>{
    res.send(courses);
});

app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c => c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send("No Course exists");
    }
    else{
        res.send(course);
    }        
});

app.post('/api/courses', (req,res)=>{
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send("Name cannot be less that 3 chars");
        return;
    }
    const course = {
        id: courses.length+1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id=== parseInt(req.params.id));
    
    if(!course){
        res.status(404).send("No Course exists");
    }
    if(!req.body.name || req.body.name.length<3){
        res.status(400).send("Name cannot be less that 3 chars");
        return;
    }
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id',(req,res)=>{
    const course = courses.find(c => c.id=== parseInt(req.params.id));
    if(!course){
        res.status(404).send("No Course exists");
    }
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});


// // Root route for the student application
// app.get('/', (req, res) => {
//     res.send('Demo Student application');
// });

// Get all students
app.get('/api/students', (req, res) => {
    res.send(students);
});

// Get a specific student by ID
app.get('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        res.status(404).send("No Student exists");
        return;
    }
    res.send(student);
});

// Add a new student
app.post('/api/students', (req, res) => {
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Name must be at least 3 characters long");
        return;
    }
    if (!req.body.age || req.body.age < 18) {
        res.status(400).send("Age must be at least 18");
        return;
    }
    const student = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };
    students.push(student);
    res.send(student);
});

// Update an existing student
app.put('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        res.status(404).send("No Student exists");
        return;
    }
    if (!req.body.name || req.body.name.length < 3) {
        res.status(400).send("Name must be at least 3 characters long");
        return;
    }
    if (!req.body.age || req.body.age < 18) {
        res.status(400).send("Age must be at least 18");
        return;
    }
    student.name = req.body.name;
    student.age = req.body.age;
    res.send(student);
});

// Delete a student
app.delete('/api/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) {
        res.status(404).send("No Student exists");
        return;
    }
    const index = students.indexOf(student);
    students.splice(index, 1);
    res.send(student);
});


app.listen(3000,()=> console.log('Listening to port 3000'));