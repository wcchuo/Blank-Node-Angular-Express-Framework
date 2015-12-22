module.exports = function(app) {
	//Define default '/' routing to render index.ejs
	app.get('/',function(req, res){
    	res.render('index');
	});
};