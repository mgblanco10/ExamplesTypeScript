'use strict'

const {Router} = requiere ('express')
const router = Router ();

const {getProject, getOneProject, createProject, updateProject, deleteProject} = requiere('../controllers/project.controller')

router.router('/')
    .get(getProject)
    .post(createProject)
    
router.router('/:id')
    .get(getOneProject)
    .delete(deleteProject)
    .put(updateProject)

module.exports = router;


// const express = require('express');
// const ProjectController = require('../controllers/project');
// const router = express.Router();

// // const multipart = require('connect-multiparty');
// // const multipartMiddleware = multipart({ uploadDir: './uploads' });

// router.get('/home', ProjectController.home);
// router.post('/test', ProjectController.test);
// router.post('/save-project', ProjectController.saveProject);
// router.get('/project/:id?', ProjectController.getProject);
// // router.get('/projects', ProjectController.getProjects);
// // router.put('/project/:id', ProjectController.updateProject);
// // router.delete('/project/:id', ProjectController.deleteProject);
// // router.post('/upload-image/:id', multipartMiddleware, ProjectController.uploadImage);
// // router.get('/get-image/:image', ProjectController.getImageFile);

// module.exports = router;