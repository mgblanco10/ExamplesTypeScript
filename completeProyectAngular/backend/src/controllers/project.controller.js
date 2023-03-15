'use strict'
const projectCtrl = {};
const multer = require('multer');

const Project = require('../models/Project');

projectCtrl.getProject =  async(req, res)=>{
	const projects = await Project.find();
	res.json(projects);
}

const storage = multer.diskStorage({
	destination: function(req, file, cb) {
	  cb(null, 'uploads/'); // El directorio donde se guardará el archivo
	},
	filename: function(req, file, cb) {
	  cb(null, Date.now() + '-' + file.originalname); // El nombre del archivo
	}
  });
  
  const upload = multer({ storage: storage });
  
  projectCtrl.saveProject = async (req, res) => {
	const { name, description, category, year, langs } = req.body;
	const newProject = new Project({
	  name: name,
	  description: description,
	  category: category,
	  year: year,
	  langs: langs,
	});
  
	upload.single('image')(req, res, async function(err) {
	  if (err instanceof multer.MulterError) {
		return res.status(500).json(err);
	  } else if (err) {
		return res.status(500).json(err);
	  }
  
	  if(req.file) {
		newProject.image = req.file.path;
	  }
  
	  try {
		const savedProject = await newProject.save();
		return res.status(200).json({ project: savedProject });
	  } catch (error) {
		return res.status(500).json({ error: error });
	  }
	});
  };  
  
  projectCtrl.getOneProject = async (req, res) =>{
	  const oneProject = await Project.findById(req.params.id);
	  res.json(oneProject)
	}
	projectCtrl.deleteProject = async (req, res)=>{
		await Project.findByIdAndDelete(req.params.id);
		res.send('project successfully removed')
	}
	projectCtrl.updateProject = async (req, res)=>{
		const { name, description, category, year, langs} = req.body;
		await Project.findByIdAndUpdate(req.params.id,{
			name:name,
			description: description,
			category: category,
			year:year,
			langs: langs
		})
		res.send('has been updated successfully')
	}
		
	module.exports = projectCtrl;
	
	
	// projectCtrl.saveProject = async (req, res) => {
	// 	const { name, description, category, year, langs } = req.body;
	// 	const newProject = new Project({
	// 	  name: name,
	// 	  description: description,
	// 	  category: category,
	// 	  year: year,
	// 	  langs: langs,
	// 	});
	// 	if(req.file) {
	//         newProject.image = req.file.path; // Asignar la ruta de la imagen al modelo
	//     }
	// 	await newProject.save();
	// 	res.send({project: newProject});
	//   };