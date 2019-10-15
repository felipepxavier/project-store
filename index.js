const express = require('express');

const server = express();

server.use(express.json());

//{ id: "1", title: 'Novo projeto', tasks: [] }
const projects = [];

server.post('/projects', (req, res) => {
    const { id, title } = req.body;

    const project = {
            id,
            title,
            tasks: [],
        }
    
    projects.push(project);
    
    return res.json(project);
});

server.get('/projects', (req, res) =>{
    return res.json(projects)
})

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id == id);

    project.title = title;
    return res.json(project);
})

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(p => p.id == id);

    projects.splice( project, 1);

    return res.send();
})

server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id == id);

    project.tasks.push(title);

    return res.json(project);
})


server.listen(3000);