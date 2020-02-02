const Kursus = require('../models/kursus');
const fs = require("fs-extra");
const path = require('path');

exports.listKursus = async(req,res) => {
	const data = await Kursus.find();
	res.send(JSON.stringify({"status": 200, "error" : null, "response" : data}));
}

exports.detailKursus = async(req,res) => {
	const data = await Kursus.findById(req.params.id);
	res.send(JSON.stringify({"status": 200, "error" : null, "response" : data}));
}

exports.tambahKursus = async(req,res) => {
	if (req.files) {
		let img = req.files.image;
		let path = "./public/img/" + img.name;

		img.mv(path, (err) => {
			if (err) {
				console.log(err);
			}
		})
	}
	const kursus = new Kursus(req.body);
	const status = await kursus.save();
	res.send(JSON.stringify({"status": 200, "error" : null, "response" : status}));
}

exports.ubahKursus = async(req,res) => {
	console.log('ayam');
	const { id } = req.params;
	Kursus.findById(req.params.id, function(err, kursus) {
		if (err) {
			return console.log(err);
		}
		console.log(kursus);

		var old_image = kursus.image;
		console.log(req.files);

		if (req.files) {
			console.log('kambing');
			let img = req.files.image;
			let path = "./public/img/" + img.name;
			let old_path = "./public/img/" + old_image;

			if (path != old_path) {
				fs.remove(old_path);
			}

			img.mv(path, (err) => {
				if (err) {
					console.log(err);
				}
			})
		}
	});
	const status = await Kursus.update({_id: id}, req.body);
	res.send(JSON.stringify({"status": 200, "error": null, "response": status}));
}

exports.hapusKursus = async(req,res) => {
	const {id} = req.params;
	var image = req.query.action;
	var path = "public/img/" + image;
	fs.remove(path);
	const status = await Kursus.remove({_id: id});
	res.send(JSON.stringify({"status": 200, "error": null, "response": status}));
}