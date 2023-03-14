'use strict'
const projectCtrl = {};

const Project = require('../models/Project');

projectCtrl.getProject =  async(req, res)=>{
	const projects = await Project.find();
	res.json(projects);
}

projectCtrl.createProject =  async(req, res)=>{
	const { name, description, category, year, langs} = req.body;
	const newProject = new Project({
		name: name,
		description: description,
		category: category,
		year: year,
		langs: langs
	})
	await newProject.save();
	res.send('project saved successfully')
}

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

