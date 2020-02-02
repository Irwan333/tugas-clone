const express		= require('express');
const bodyParser	= require('body-parser');
const mongoose		= require('mongoose');
const app			= express();
const path			= require ("path");
const uploadData	= require ('express-fileupload');
const cors			= require('cors');

// connection mongodb
mongoose.connect('mongodb://localhost/db_dtcjavascript')
	.then(db => console.log('db connected'))
	.catch(err => console.log(err))

app.use(uploadData());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended : true
}))

app.use(express.static(path.join(__dirname, "public")))

let corsOptions = {
	origin			: '*',
	methods			: ['*'],
	allowedHeaders	: ['Content-type', 'tokenshop']
 };
app.use(cors(corsOptions))

	require('./router/router')(app)
	app.listen(4000,() => {
	console.log('Berhasil menjalankan server pada port 4000')
})