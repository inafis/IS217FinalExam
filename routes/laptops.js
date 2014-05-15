
/*
 * GET home page.
 */
  var mongoose = require('mongoose')
  , Laptop = mongoose.model('Laptop');

var brand = '8Bit inc.';


exports.formSend = function(req, res){
  res.redirect('/home');

  var monSize = req.body.screenSize;
  var hddSize = req.body.hardDrive;
  var ramSize = req.body.ram;
  var quote = req.body.price;

  console.log(monSize);

  var newLaptop = new Laptop({
  	screenSize: monSize,
  	hardDrive: hddSize,
  	ram: ramSize,
    total: quote
  })
  newLaptop.save(function(err,newLaptop){
    console.log(err)
  })
};

exports.saved = function(req,res){
  Laptop.find({}, function(err,doc){
    res.send(doc);
    title: 'Saved Laptops'
  })
}
