$(document).ready(function(){
	var myUrl = "http://localhost:3000/savedLaptops"
	$.get( myUrl, {
		format:"json"
	})
	.done(function(data){
		$(jQuery.parseJSON(JSON.stringify(data))).each(function(){
			var monitorSize = this.screenSize;
			var ram = this.ram;
			var hdd = this.hardDrive;
			var price = this.total;
			$("#tableData").append("<tr>");
			$("#tableData").append("<td>"+monitorSize);
			$("#tableData").append("<td>"+ram);
			$("#tableData").append("<td>"+hdd);
			$("#tableData").append("<td>"+"$"+price);

		})	

	})
})