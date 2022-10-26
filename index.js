const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const courses = require('./data/course.json')

app.get('/', (req, res) => {
    res.send('news api running');
});

app.get('/categories', (req, res) => {
    res.send(categories);
})

app.get('/courses', (req, res) => {
    res.send(courses)
})


app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const course_categories = courses.filter(course => course.category_id === id);
    res.send(course_categories);
})

app.listen(port, () => console.log('server side is running on port', port));