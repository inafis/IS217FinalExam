
/*
 * GET home page.
 */


var brand = '8Bit inc.';

exports.index = function(req, res){
  res.redirect('/home');
}

exports.home = function(req, res){
  res.render('home', { title: 'Home', id: 'home', brand: brand })

};
exports.about = function(req, res){
  res.render('about', { title: 'About', id: 'about', brand: brand })
};
exports.list = function(req, res){
	res.render('laptops', {title: 'Saved', id: 'saved', brand: brand})
}