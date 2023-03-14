'use strict'

const {Router} = require ('express')
const router = Router ();

const {getProject, getOneProject, createProject, updateProject, deleteProject} = require('../controllers/project.controller')

router.route('/')
    .get(getProject)
    .post(createProject)
    
router.route('/:id')
    .get(getOneProject)
    .delete(deleteProject)
    .put(updateProject)

module.exports = router;


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