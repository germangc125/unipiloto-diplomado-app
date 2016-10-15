var persona = new Object();
persona.nombre = "German";
persona.apellido = "Gracia";
persona.edad = 25;

personas.push(persona);
persona = null;


var carro = {
 color:null,
 marca:null,
 referencia:null,
}
carro.color = "red";
carro.marca = "renault";

function operacion (person,carro){
	return person.nombre + " " + person.apellido + " " + person.edad + " auto" : carro.referencia;
}


console.log(operacion(persona,carro));

function empleado(nombre, apellido, edad) {
    this.primerNombre = nombre;
    this.segundoNombre = apellido;
    this.edad = edad;
    this.calcularEdad = function(){
		alert("hola");
    }
}
empleado.prototype.nacionalidad = "Colombia";
var empleado_ = new empleado("German","Gracia",15);
var empleado_2 = new empleado("German","Gracia",15);

empleados.push(empleado_);
empleados.push(empleado_2);


var alertaEmpleado = empleado_.calcularEdad();
var nacionalidad = empleado_.nacionalidad;


console.log(empleado_.primerNombre)
