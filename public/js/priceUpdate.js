$(document).ready(function(){
	var currPrice = 1000;
	valList = [];
	$("#price").val(currPrice);

	$("input:radio[name=screenSize]").click(function(){
		var screenVal = $(this).val();
		if(screenVal == 15){
			currPrice+= 200;
		}
		$("#price").val(currPrice);
		valList.push(screenVal)
	})

	$("input:radio[name=hardDrive]").click(function(){
		var hddVal = $(this).val();
		if(hddVal == '256GB'){
			currPrice += 200;
		}
		$("#price").val(currPrice);
		valList.push(hddVal);
	})

	$("input:radio[name=ram]").click(function(){
		var ramVal = $(this).val();
		if(ramVal == '16GB'){
			currPrice += 200;
		}
		$("#price").val(currPrice);
		valList.push(ramVal);
	})
	$("#clear").click(function(){
		currPrice = 1000;
		$("#price").val(currPrice);
	})
	$("#save").click(function(){
		$("form").submit();
	})
});