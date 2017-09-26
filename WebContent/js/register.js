var phone = document.getElementsByClassName("phone_number")[0];
var psw = document.getElementsByClassName("psw")[0];
var psw1 = document.getElementsByClassName("psw1")[0];
var reg_phone = document.getElementsByClassName("reg_phone")[0];
var reg_psw = document.getElementsByClassName("reg_psw")[0];
var protocol = document.getElementsByClassName("protocol")[0];
var pro = document.getElementsByClassName("pro")[0];
phone.onblur = fun_phone;
function fun_phone(){
	if(!(/^1[34578]\d{9}$/.test(phone.value))){
		reg_phone.style.display = "inline-block";
		return false;
	}else{reg_phone.style.display = "none";return true;}
}
psw.onblur = fun_psw;
function fun_psw(){
	if(psw.value != psw1.value){
		reg_psw.style.display = "inline-block";reg_psw.innerHTML = "两次密码不一样";return false;
	}else if(psw.value == ""){reg_psw.style.display = "inline-block";reg_psw.innerHTML = "密码不能为空";return false;}
	else{reg_psw.style.display = "none";return true;}
}
var form = document.forms[0];
form.onsubmit = function(e){
	var regPsw = fun_psw();
	var regPhone = fun_phone();
	if(!protocol.checked) pro.innerHTML = "请同意用户协议";
	if(!(regPsw && regPhone && protocol.checked)) e.preventDefault();
}