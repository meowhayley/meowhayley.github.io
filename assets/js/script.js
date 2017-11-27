$(document).ready(function(){

/*VIEW 2*/
/* jQuery Function Number 1 */
	$(".open-hours-title").hover(function(){
/*jQuery Function Number 2 */
		$(".open-hours-title").css("cursor","pointer");	
		$(".open-hours-info").css("opacity","0.8");
		$(".open-hours-title").css("color","#71B340");

	}, function() {
		$(".open-hours-title").css("cursor","auto");
		$(".open-hours-info").css("opacity","0");
		$(".open-hours-title").css("color","#0E4700");
	});

	$(".workshops-title").hover(function(){
		$(".workshops-title").css("cursor","pointer");	
		$(".workshops-info").css("opacity","0.8");
		$(".workshops-title").css("color","#71B340");

	}, function() {
		$(".workshops-title").css("cursor","auto");
		$(".workshops-info").css("opacity","0");
		$(".workshops-title").css("color","#0E4700");
	});
	$(".meetings-title").hover(function(){
		$(".meetings-title").css("cursor","pointer");	
		$(".meetings-info").css("opacity","0.8");
		$(".meetings-title").css("color","#71B340");

	}, function() {
		$(".meetings-title").css("cursor","auto");
		$(".meetings-info").css("opacity","0");
		$(".meetings-title").css("color","#0E4700");
	});
	$(".decals-title").hover(function(){
		$(".decals-title").css("cursor","pointer");	
		$(".decals-info").css("opacity","0.8");
		$(".decals-title").css("color","#71B340");

	}, function() {
		$(".decals-title").css("cursor","auto");
		$(".decals-info").css("opacity","0");
		$(".decals-title").css("color","#0E4700");
	});

/*VIEW 1*/
	$("#apple-1").hover(function(){
		$("#apple-1").css("cursor","pointer");	
		$(".haydav").css("opacity","0.8");
	}, function() {
		$("#apple-1").css("cursor","auto");
		$(".haydav").css("opacity","0");
	});

	$("#apple-2").hover(function(){
		$("#apple-2").css("cursor","pointer");	
		$(".haycov").css("opacity","0.8");
	}, function() {
		$("#apple-2").css("cursor","auto");
		$(".haycov").css("opacity","0");
	});

	$("#apple-3").hover(function(){
		$("#apple-3").css("cursor","pointer");	
		$(".tess").css("opacity","0.8");
	}, function() {
		$("#apple-3").css("cursor","auto");
		$(".tess").css("opacity","0");
	});

	$("#apple-4").hover(function(){
		$("#apple-4").css("cursor","pointer");	
		$(".grace").css("opacity","0.8");
	}, function() {
		$("#apple-4").css("cursor","auto");
		$(".grace").css("opacity","0");
	});

	$("#apple-5").hover(function(){
		$("#apple-5").css("cursor","pointer");	
		$(".tina").css("opacity","0.8");
	}, function() {
		$("#apple-5").css("cursor","auto");
		$(".tina").css("opacity","0");
	});

	$("#bee").hover(function(){
/*JQuery Function Number 3*/
		$(".bee-caption").fadeIn();
		$("#bee").css("cursor", "pointer");
	}, function() {
/*JQuery Function Number 4*/
		$(".bee-caption").fadeOut();
		$("#bee").css("cursor","pointer");
	});
/*VIEW 3*/
	$(".take-decal-title").hover(function(){
		$(".take-decal-title").css("cursor","pointer");	
		$(".take-decal-title").css("color","#0E4700");

	}, function() {
		$(".take-decal-title").css("cursor","auto");
		$(".take-decal-title").css("color","#71B340");
	});

	$(".teach-decal-title").hover(function(){
		$(".teach-decal-title").css("cursor","pointer");	
		$(".teach-decal-title").css("color","#0E4700");

	}, function() {
		$(".teach-decal-title").css("cursor","auto");
		$(".teach-decal-title").css("color","#71B340");
	});

	$(".volunteer-title").hover(function(){
		$(".volunteer-title").css("cursor","pointer");	
		$(".volunteer-title").css("color","#0E4700");

	}, function() {
		$(".volunteer-title").css("cursor","auto");
		$(".volunteer-title").css("color","#71B340");
	});

	$(".workshop-title").hover(function(){
		$(".workshop-title").css("cursor","pointer");	
		$(".workshop-title").css("color","#0E4700");

	}, function() {
		$(".workshop-title").css("cursor","auto");
		$(".workshop-title").css("color","#71B340");
	});

	$(".meeting-title").hover(function(){
		$(".meeting-title").css("cursor","pointer");	
		$(".meeting-title").css("color","#0E4700");

	}, function() {
		$(".meeting-title").css("cursor","auto");
		$(".meeting-title").css("color","#71B340");
	});
/*JQuery Function Number 5*/
	$(".take-decal-title").click(function(){
		$(".take-decal-info").css("opacity","0.8");
	});
	$(".teach-decal-title").click(function(){
		$(".teach-decal-info").css("opacity","0.8");
	});
	$(".volunteer-title").click(function(){
		$(".volunteer-info").css("opacity","0.8");
	});
	$(".workshop-title").click(function(){
		$(".workshop-info").css("opacity","0.8");
	});
	$(".meeting-title").click(function(){
		$(".meeting-info").css("opacity","0.8");
	});



});