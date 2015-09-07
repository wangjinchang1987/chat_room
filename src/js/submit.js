// JavaScript Document
window.onload = onLoad;
function onLoad(){
	var fm = document.getElementById('form_user'); 
	fm.tijiao.onclick = function () {
		// body...
		var _username = fm.username.value;
		var _age = fm.age.value;
		var _position = fm.position.value;
		var _phonecall = fm.phonecall.value;
		var _email = fm.email.value;
		var _qq = fm.qq.value;
		var _chat_id = fm.chat_id.value;

		if (_username.length == 0){
			alert("姓名不能为空");
			fm.username.value = '';
  			fm.username.focus();
  			return false;
		}

		if (_age.length > 5 || _age.length == 0){
			alert("年龄不能为空");
			fm.age.value = '';
  			fm.age.focus();
  			return false;
		}

		if (_position.length > 20 || _position.length == 0){
			alert("申请职位不能为空");
			fm.position.value = '';
  			fm.position.focus();
  			return false;
		}

		if (_chat_id.length > 20 || _chat_id.length == 0){
			alert("姓名长度不正确");
			fm.chat_id.value = '';
  			fm.chat_id.focus();
  			return false;
		}

		if (/[<>\.\ ]/.test(_username)){
  			alert("用户名含有非法字符");
  			fm.username.value = '';
  			fm.username.focus();
  			return false;
  		}

  		if (/[<>\.\ ]/.test(_age)){
  			alert("年龄含有非法字符");
  			fm.age.value = '';
  			fm.age.focus();
  			return false;
  		}
  		if (/[<>\.\ ]/.test(_position)){
  			alert("职位含有非法字符");
  			fm.position.value = '';
  			fm.position.focus();
  			return false;
  		}
	}
}