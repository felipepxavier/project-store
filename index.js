const express = require('express');

const server = express();

server.use(express.json());

const projects = [{ id: "1", title: 'Novo projeto', tasks: [] }];


server.post('/projects', (req, res) => {
    const { id, title, tasks } = req.body;
    projects.push( {id, title, tasks} );
    
    return res.json(projects);
})

server.get('/projects', (req, res) =>{
    return res.json(projects)
})

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const project = projects.find(p => p.id == id);

    project.title = title;
    return res.json(projects);
})








server.listen(3000);