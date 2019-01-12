$(function(){
	$(".show").click(function(){
		$("#y-login").css({"display":"block"})
		$("#s-login").css({
			"display":"none"
		});
		$(".hide").css({"border-bottom":"#CECECE 2px solid"});
		$(".show").css({
			"border-bottom":"red 2px solid"
		})
	});
	$(".hide").click(function(){
		$("#s-login").css({
			"display":"block"
		});
		$(".hide").css({"border-bottom":"red 2px solid"});
		$(".show").css({
			"border-bottom":"2px solid #CECECE"
		})
		$("#y-login").css({
			"display":"none"
		})
	})
}) 