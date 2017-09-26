
var seats = document.querySelectorAll("#seat_content>p span");
var count = 0;
var seat_lis = document.querySelectorAll("#sel_seat li");
var totalPrice = document.querySelector("#totalPrice b");
var price = parseInt(document.querySelector("#price").innerHTML);

alert($("#scrRow").val())
//用了二位数组存储座位号
var array = [];
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
		this.className = "";--count;
	}else if(this.className == "red"){}
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
				temp++;
			}
		}
	}
	totalPrice.innerHTML = price * temp;
}
document.querySelector("#form input").onclick = function(){
	this.location = "pay_select.html";
}