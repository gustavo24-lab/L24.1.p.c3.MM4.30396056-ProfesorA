/*
En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su cédula, nombre y
sexo (F - M).
Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
retorne otro arreglo de objetos con solamente los profesores de una categoría dada.
Función: profesoresCategoria.
Parámetros: profesores (array de objetos profesor), categoria (un número).
Retorno: array de objetos profesor que pertenecen a la categoría indicada.

*/
let profesoresCategoria = (array, categoria) =>{
    let nombres = [];
    for (let i = 0; i <array.length;i++){
        if(array[i].categorias==categoria){
            nombres.push(array[i].nombre)
        }
    }
    return nombres
}
let array =[
{categorias: 1, nombre:"Ana", sexo: "F"},
{categorias: 2, nombre:"Maria", sexo: "F"},
{categorias: 3, nombre:"Pedro", sexo: "M"},
{categorias: 4, nombre:"Diego", sexo: "M"},
{categorias: 5, nombre:"Fabiana", sexo: "F"},
]
let salida = document.getElementById("salida");

salida.innerHTML = JSON.stringify(profesoresCategoria(array,1))
salida.innerHTML +="<br>" + JSON.stringify(profesoresCategoria(array,3))
salida.innerHTML +="<br>" + JSON.stringify(profesoresCategoria(array,5))