"use strict";function setCookie(o,e,l){var s=new Date;s.setDate(s.getDate()+l),document.cookie=o+"="+e+";expires="+s}function getCookie(o){for(var e=document.cookie.split("; "),l=0;l<e.length;l++){var s=e[l].split("=");if(s[0]==o)return s[1]}}function removeCookie(o){setCookie(o,1,-1)}$(function(){$(".show").click(function(){$(".tip").html(""),$(".phone").val(""),$(".psw").val(""),$(".psw").css({display:"block"}),$(".phone").attr({placeholder:"手机号/邮箱/用户名"}),$("#y-login").css({display:"block"}),$("#s-login").css({display:"none"}),$("#verify").css({display:"none"}),$(".hide").css({"border-bottom":"#CECECE 2px solid"}),$(".show").css({"border-bottom":"red 2px solid"})}),$(".hide").click(function(){$(".tip").html(""),$(".phone").val(""),$(".psw").val(""),$(".phone").attr({placeholder:"手机号/邮箱/用户名"}),$(".psw").css({display:"block"}),$("#s-login").css({display:"block"}),$("#verify").css({display:"none"}),$(".hide").css({"border-bottom":"red 2px solid"}),$(".show").css({"border-bottom":"2px solid #CECECE"}),$("#y-login").css({display:"none"})}),$(".verify").on("click",function(){$(".phone").val(""),$(".psw").val(""),$(".psw").css({display:"none"}),$(".tip").html(""),$(".phone").attr({placeholder:"手机号"}),$("#y-login").css({display:"none"}),$("#s-login").css({display:"none"}),$("#verify").css({display:"block"})}),$(".getVerify").click(function(){if(getCookie($(".phone").val())){var o="";console.log(1);for(var e=0;e<4;e++)o+=parseInt(10*Math.random());$(".random").val(o)}else alert("请先完成验证")}),$(".signin").on("click",function(){console.log(22);$(".phone").val()?$(".getRandom").is(":visible")?""==$(".getRandom").val()?$(".tip").html("验证码不能为空"):getCookie($(".phone").val())==$(".psw").val()||$(".random").val()==$(".getRandom").val()?alert("登录成功"):alert("登陆失败，请重新输入1"):getCookie($(".phone").val())==$(".psw").val()||$(".random").val()==$(".getRandom").val()?(console.log(2),alert("登录成功")):alert("登陆失败，请重新输入1"):$(".tip").html("手机号不能为空")}),$("#m-right input").change(function(){$(".tip").html("")})});