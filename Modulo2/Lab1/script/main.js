$(document).ready(function(){
	$(".contenido_ciclismo").css("display","block")
})

function mostrarDivCiclismo(){

	$(".contenido_ciclismo").css("display","block")
	$(".contenido_autos").css("display","none")
	$(".contenido_acuaticos").css("display","none")
	$(".contenido_aereos").css("display","none")

}


function mostrarDivAutos(){
	
	$(".contenido_ciclismo").css("display","none")
	$(".contenido_autos").css("display","block")
	$(".contenido_acuaticos").css("display","none")
	$(".contenido_aereos").css("display","none")


}

function mostrarDivAcuaticos(){
	
	$(".contenido_ciclismo").css("display","none")
	$(".contenido_autos").css("display","none")
	$(".contenido_acuaticos").css("display","block")
	$(".contenido_aereos").css("display","none")


}


function mostrarDivAereos(){
	
	$(".contenido_ciclismo").css("display","none")
	$(".contenido_autos").css("display","none")
	$(".contenido_acuaticos").css("display","none")
	$(".contenido_aereos").css("display","block")


}
