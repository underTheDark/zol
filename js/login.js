$(function() {
 	$(".show").click(function() {
		$(".tip").html("");
		$(".phone").val("");

	    $(".psw").val("");
		$(".psw").css({"display": "block"});
     $(".phone").attr({placeholder:"手机号/邮箱/用户名"});

	  // $("#change-c").attr({class:"signin"})
 		$("#y-login").css({
 			"display": "block"
 		})
 		$("#s-login").css({
 			"display": "none"
 		});
 		$("#verify").css({
 			"display": "none"
 		})

 		$(".hide").css({
 			"border-bottom": "#CECECE 2px solid"
 		});
 		$(".show").css({
 			"border-bottom": "red 2px solid"
 		})
 	});
 	$(".hide").click(function() {
		$(".tip").html("");
	$(".phone").val("");
	
		    $(".psw").val("");
		$(".phone").attr({placeholder:"手机号/邮箱/用户名"});

		$(".psw").css({"display": "block"});

 //	$("#change-c").attr({class:"signin"})
		
 		$("#s-login").css({
 			"display": "block"
 		});
 		$("#verify").css({
 			"display": "none"
 		});

 		$(".hide").css({
 			"border-bottom": "red 2px solid"
 		});
 		$(".show").css({
 			"border-bottom": "2px solid #CECECE"
 		});
 		$("#y-login").css({
 			"display": "none"
 		})
 	});

 	//登录点击事件
 	// 进入手机动态登入
 	$(".verify").on("click", function() {
		$(".phone").val("");
		
			    $(".psw").val("");
		$(".psw").css({"display": "none"})
		$(".tip").html("");
		$(".phone").attr({placeholder:"手机号"});
		//$("#change-c").attr({class:"signin-t"})

	
 		$("#y-login").css({
 			"display": "none"
 		})
 		$("#s-login").css({
 			"display": "none"
 		})
 		$("#verify").css({
 			"display": "block"
 		})
	});	
		
		
			//短信验证
		 /* 	$(".signin-t").on("click", function() {
				var reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/
		 		console.log("yo");
		 			if ($(".phone").val() == "" ) {
		 				$(".tip").html("手机号不能为空")
		 			} else if($(".getRandom").is("input:visible")){
						if ($(".getRandom").val() == "") {
								$(".tip").html("验证码不能为空")
							}
					}
		
		 			else if (reg.test($(".phone").val())) {
						
							console.log($(".random").val(),$(".getRandom").val())
		 					if ($(".random").val() == $(".getRandom").val()) {
		 						alert("登录成功")
		 					} else {
		 						alert("登陆失败，请重新输入")
		 					}
		
		 				}else{
							$(".tip").html("手机格式错误")
					     }
		 	});
			
		
		 */
		
		
		
		
		
		
		
		

 		//获取手机验证码
 		$(".getVerify").click(function() {
 			if (getCookie($(".phone").val())) {
 				var str = "";
 				console.log(1)
 				for (var i = 0; i < 4; i++) {
 					str += parseInt(Math.random() * 10)
 				}
 				$(".random").val(str)
 			} else {
 				alert("请先完成验证")
 			}

 		

 	});
 
	//点击登录
	$(".signin").on("click", function() {
		console.log(22);
		var reg = /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/
	 		  if (!$(".phone").val()) {
				  
	 				
					$(".tip").html("手机号不能为空")
	 			} else if($(".getRandom").is(":visible")){
						if ($(".getRandom").val() == "") {
								$(".tip").html("验证码不能为空")
							}else if(
							getCookie($(".phone").val()) == $(".psw").val() ||
												$(".random").val() == $(".getRandom").val()
							){
								alert("登录成功")
							}else{
								alert("登陆失败，请重新输入1")
							}
							
					}
					
else if (getCookie($(".phone").val()) == $(".psw").val() ||
					$(".random").val() == $(".getRandom").val()) {
						console.log(2)
						alert("登录成功")
					} else {
						alert("登陆失败，请重新输入1")
					}
			
		});
	
         $("#m-right input").change(function(){
           	$(".tip").html("")
           })
		});

 	/* $("#y-login input").change(function(){
 		
 		
 		var text1=$("#y-login input:nth-of-type(1)").val();
 		var  text2=$("#y-login input:nth-of-type(2)").val();
 		if(text1){
 		
 			var reg= /^(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[89])[0-9]{8}$/
 			var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
 			var flag1=reg.test(text1);
 			console.log(flag1)
 			var flag2=myreg.test(text1);
 			console.log(flag2)
 			if(!flag1 && !flag2){
 				$(".tip").html("账号错误，请重新输入")
 			}
 		}else{
 			$(".tip").html("")
 		}
 		if(text2){
 		
 			var reg= /^$/
 			
 			var flag1=reg.test(text1);
 			console.log(flag1)
 			var flag2=myreg.test(text1);
 			console.log(flag2)
 			if(!flag1 && !flag2){
 				$(".tip").html("账号错误，请重新输入")
 			}
 		}else{
 			$(".tip").html("")
 		} */






 //cookie的增改删查询
 function setCookie(name, value, n) {
 	var oDate = new Date();
 	oDate.setDate(oDate.getDate() + n);
 	document.cookie = name + "=" + value + ";expires=" + oDate;
 }

 function getCookie(name) {
 	var str = document.cookie;
 	var arr = str.split("; ");
 	for (var i = 0; i < arr.length; i++) {
 		var ar = arr[i].split("=");
 		if (ar[0] == name) {
 			return ar[1];
 		}
 	}
 }

 function removeCookie(name) {
 	setCookie(name, 1, -1);
 }
