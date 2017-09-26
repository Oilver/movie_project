var seats = document.querySelectorAll("#seat_content>p span");
var count = 0;
var seat_lis = document.querySelectorAll("#sel_seat li");
var totalPrice = document.querySelector("#totalPrice b");
var price = $("#price").val();

var value=document.getElementById("array").value;
var jsArr=value.split(',');

for(var i = 0; i < seats.length;i++){
	if(jsArr[i] == " 1" || jsArr[i] == "[1" || jsArr[i] == "1]")
		seats[i].className = "red";
}

var rows = [];
var cols = [];
var index = 0;

//用了二位数组存储座位号
var array = [];
for(var i = 0; i < 4; i++){
	rows[i] = 0;
	cols[i] = 0
}
for(var i = 0; i < 9;i++){
	array[i] = new Array(11);
}
for(var i = 0;i < 9;i++){
	for(var j = 0;j < 11; j++){
		array[i][j] = 0;
	}
}
for(var i = 0; i < seats.length; i++){
	seats[i].onclick = function(){
		if(this.className == "" && count < 4){
			this.className = "green";
			++count;
		}else if(this.className == "green"){
			this.className = "";
			--count;
		}else if(this.className == "red"){
			
		}
		loop();	
	}
}

function loop(){
for(var i = 0; i < seats.length; i++){
	var r = parseInt(i / 11);
	var c = parseInt(i % 11);
	if(seats[i].className == "green"){
		array[r][c] = 1;
	}else{
		array[r][c] = 0;
		}
	}
	loop2();
}

function loop2(){
	var temp = 0;
	for(var i = 0;i < 4;i++){
		seat_lis[i].innerHTML = i+1;
		seat_lis[i].className = "";
	}
	for(var r = 0; r < 9; r++){
		for(var c = 0; c < 11; c++){
			if(array[r][c] == 1){
				seat_lis[temp].innerHTML = (r+1) + "排" + (c+1) + "座";
				seat_lis[temp].className = "sel";
				rows[temp] = (r+1);
				cols[temp] = (c+1);
				temp++;
			}
		} 
	}
	totalPrice.innerHTML = price * temp;
}
document.querySelector("#form input").onclick = function(){
	window.location.href = "ticket/submitOrder.action?rowId_1="+rows[0]+"&columnId_1="+cols[0]+"&rowId_2="+rows[1]+"&columnId_2="+cols[1]+"&rowId_3="+rows[2]+"&columnId_3="+cols[2]+"&rowId_4="+rows[3]+"&columnId_4="+cols[3];
}