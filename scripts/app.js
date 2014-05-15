reddit = require('redwrap');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var postSchema = mongoose.Schema({

	domain: String,
	url: String,
	sub: String,
	title: String,
	author: String,
	score: Number
})

var Post = mongoose.model('Post', postSchema)

	reddit.r('GetMotivated', function(err,data,res){
		var fs = require('fs');
		var stream = fs.createWriteStream("../my_file.txt");
		//console.log(data);
		//console.log(data.data.children);
		var listing = data.data.children;
		for(var i=0; i<listing.length; i++){
			var obj = listing[i].data;

			//console.log(obj);
			var domain = obj.domain;
			var url = obj.url;
			var sub = obj.subreddit;
			var title = obj.title;
			var author = obj.author_name;
			var score = obj.score;

			var motivatedPost = new Post({
				domain: this.domain,
				link: this.url,
				sub: this.sub,
				title: this.title,
				author: this.author,
				score: this.score

			})

			motivatedPost.save(function(err, motivatedPost){
				if(err) return console.error(err);
			});


			if(domain == "i.imgur.com" || "imgur.com"){
				var check = Post.find({domain: "i.imgur.com"})
				console.log(check);

			}			
		}

	});

