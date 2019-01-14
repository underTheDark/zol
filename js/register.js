//cookie的增改删查询
function setCookie(name,value,n){
var oDate=new Date();
	oDate.setDate(oDate.getDate()+n);
document.cookie=name+"="+value+";expires="+oDate;
}
function getCookie(name){
var str=document.cookie;
var arr=str.split("; ");
for(var i=0;i<arr.length;i++){
	var ar=arr[i].split("=");
	if(ar[0]==name){
		return ar[1];
	}
}
}
function removeCookie(name){
setCookie(name,1,-1);
}

/* $(function(){
	let phone=$("#phone");
	let psw=$("#psw");
	//注册
	
	$(".sign").click(function(){
		
	})
}) */
$(function(){
	var reg,psw;
	reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/;
	psw=/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/;
	
	$(".getVerify").click(function() {
		if(reg.test($(".phone").val())){
				var str = "";
				for (var i = 0; i < 4; i++) {
					str += parseInt(Math.random() * 10)
				}
				$(".random").val(str)
		}else{
			$(".phone").next().html("请填写有效的手机格式")
		}
			
		
		})
	$(".sign").on("click", function() {
		console.log(1)
if($(".phone").val()==""){
		console.log(2)
		$(".phone").next().html("请填写手机号")
		.show();
	}else if(!reg.test($(".phone").val())){
		
			$(".phone").next().html("请填写有效的手机格式")
		
	}else if($(".getRandom").val()==""){
		
			$(".getRandom").next().next().html("请填写验证码").show()
		
	}else 
		if($(".psw").val()==""){
			$(".psw").next().html("请填写注册密码").show()
		
	}else 
		if(!psw.test($(".psw").val())){
			$(".psw").next().html("数字，字母，下划线至少包含其中两种").show()
		console.log("buz")
	}else
		if($(".affirm-psw").val()==""){
			$(".affirm-psw").next().html("请再次填写注册密码").show()

		console.log("buzhixing")
	}else 
		if($(".affirm-psw").val()!=$(".psw").val()){
			$(".affirm-psw").next().html("两次密码不一致").show();
console.log("ing")
		
	}else {
		setCookie($(".phone").val(),$(".psw").val(),17);
	}
	
		/* var reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/
				if (!$(".phone").val()) {
					
					
					$(".tip").html("手机号不能为空")
				} else if($(".getRandom").is("input:visible")){
						if ($(".getRandom").val() == "") {
								$(".tip").html("验证码不能为空")
							}
					}
					
					else if (getCookie($(".phone").val()) == $(".psw").val() ||
					$(".random").val() == $(".getRandom").val()) {
						alert("登录成功")
					} else {
						alert("登陆失败，请重新输入1")
					} */
			
		});
})