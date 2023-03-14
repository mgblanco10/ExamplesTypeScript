'use strict'
const projectController = {};

const Project = require('../models/project');

projectController.getProject =  async(req, res)=>{
	const project = await Project.find();
	res.json(project);
}

projectController.createProject =  async(req, res)=>{
	const { name, description, category, year, langs, image} = req.body;
	const newProject = new Project({
		name: name,
		description: description,
		category: category,
		year: year,
		langs: langs,
		image: image
	})
	await newProject.save();
	res.send('project saved successfully')
}

projectController.deleteProject = async (req, res)=>{
	await Project.findByIdAndDelete(req.params.id);
	res.send('project successfully removed')
}

projectController.getOneProject = async (req, res) =>{
	const oneProject = await Project.findById(req.params.id);
	res.json(oneProject)
}


module.exports = projectController;

// const controller = {
	
// 	home: function(req, res){
// 		return res.status(200).send({
// 			message: 'Welcome to home'
// 		});
// 	},

// 	test: function(req, res){
// 		return res.status(200).send({
// 			message: "I am the test method or action of the project controller"
// 		});
// 	},

// 	saveProject: function(req, res){
// 		const project = new Project();

// 		const params = req.body;
// 		project.name = params.name;
// 		project.description = params.description;
// 		project.category = params.category;
// 		project.year = params.year;
// 		project.langs = params.langs;
// 		project.image = null;

// 		// return res.status(200).send({project:project, message:"metodo save"})

// 		project.save((err, projectStored) => {
// 			if(err) return res.status(500).send({message: 'Failed to save document.'});

// 			if(!projectStored) return res.status(404).send({message: 'Failed to save document.'});

// 			return res.status(200).send({project: projectStored});
// 		});
// 	},

// 	getProject: function(req, res){
// 		const projectId = req.params.id;

// 		if(projectId == null) return res.status(404).send({message: 'The project does not exist.'});

// 		Project.findById(projectId, (err, project) => {

// 			if(err) return res.status(500).send({message: 'Failed to save document.'});

// 			if(!project) return res.status(404).send({message: 'Failed to save document.'});

// 			return res.status(200).send({
// 				project
// 			});

// 		});
// 	}

// 	// getProjects: function(req, res){

// 	// 	Project.find({}).sort('-year').exec((err, projects) => {

// 	// 		if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

// 	// 		if(!projects) return res.status(404).send({message: 'No hay projectos que mostrar.'});

// 	// 		return res.status(200).send({projects});
// 	// 	});

// 	// },

// 	// updateProject: function(req, res){
// 	// 	const projectId = req.params.id;
// 	// 	const update = req.body;

// 	// 	Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdated) => {
// 	// 		if(err) return res.status(500).send({message: 'Error al actualizar'});

// 	// 		if(!projectUpdated) return res.status(404).send({message: 'No existe el proyecto para actualizar'});

// 	// 		return res.status(200).send({
// 	// 			project: projectUpdated
// 	// 		});
// 	// 	});

// 	// },

// 	// deleteProject: function(req, res){
// 	// 	var projectId = req.params.id;

// 	// 	Project.findByIdAndRemove(projectId, (err, projectRemoved) => {
// 	// 		if(err) return res.status(500).send({message: 'No se ha podido borrar el proyecto'});

// 	// 		if(!projectRemoved) return res.status(404).send({message: "No se puede eliminar ese proyecto."});

// 	// 		return res.status(200).send({
// 	// 			project: projectRemoved
// 	// 		});
// 	// 	});
// 	// },

// 	// uploadImage: function(req, res){
// 	// 	const projectId = req.params.id;
// 	// 	const fileName = 'Imagen no subida...';

// 	// 	if(req.files){
// 	// 		const filePath = req.files.image.path;
// 	// 		const fileSplit = filePath.split('\\');
// 	// 		const fileName = fileSplit[1];
// 	// 		const extSplit = fileName.split('\.');
// 	// 		const fileExt = extSplit[1];

// 	// 		if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

// 	// 			Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdated) => {
// 	// 				if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

// 	// 				if(!projectUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

// 	// 				return res.status(200).send({
// 	// 					project: projectUpdated
// 	// 				});
// 	// 			});

// 	// 		}else{
// 	// 			fs.unlink(filePath, (err) => {
// 	// 				return res.status(200).send({message: 'La extensión no es válida'});
// 	// 			});
// 	// 		}

// 	// 	}else{
// 	// 		return res.status(200).send({
// 	// 			message: fileName
// 	// 		});
// 	// 	}

// 	// },

// 	// getImageFile: function(req, res){
// 	// 	const file = req.params.image;
// 	// 	var path_file = './uploads/'+file;

// 	// 	fs.exists(path_file, (exists) => {
// 	// 		if(exists){
// 	// 			return res.sendFile(path.resolve(path_file));
// 	// 		}else{
// 	// 			return res.status(200).send({
// 	// 				message: "No existe la imagen..."
// 	// 			});
// 	// 		}
// 	// 	});
// 	// }

// };

// module.exports = controller;
