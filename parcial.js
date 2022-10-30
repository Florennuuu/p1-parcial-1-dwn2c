'use strict';

// array vacios por que no se que van a tener

let discos = [];
let canciones = [];
let codigos = [];


// Función Cargar:
function Cargar() {
    let nombre, autor, codigo, tema, duracion;
    let i=0;
    let codigoDisco = [];


    do {
        nombre = prompt('Ingrese nombre del disco');
        if(nombre == ""){
            alert("Debe ingresar un nombre");
        }
    } while ((nombre == ""));
    do {
        autor = prompt('Ingrese autor o banda del disco');
        if(autor == ""){
            alert("Debe ingresar el autor o banda");
        }
    } while ((autor == ""));
    do {
        codigo = parseInt(prompt('Ingrese codigo del disco entre 1 y 999'));
        if(isNaN(codigo)){
            alert("El código ingresado debe ser un numero");
        } else if(codigo < 1){
            alert("El código ingresado es menor a 1");
        } else if(codigo > 999){
            alert("El código ingresado es mayor a 999")
        }
    } while (isNaN(codigo) || (codigo < 1) || (codigo > 999) || (validarCodigo(codigo) == true));

// le cargo al objeto disco nombre, autor, codigo, codigoDisco
    let disco = [];
    disco['nombre'] = nombre;
    disco['autor'] = autor;
    disco['codigo'] = codigo;
    discos.push(disco);
    codigoDisco['codigo'] = codigo;
    codigos.push(codigoDisco);

    do {
        do {
            tema = prompt('Ingrese Nombre de la canción');
            if (tema == ""){
                alert("Debe ingresar el nombre de la canción");
            }
        } while ((tema == ""));
        do {
           duracion = parseInt(prompt('Ingrese duración de la canción en segundos y comprendida entre 0 y 7200 segundos'));
            i=1;
            if(isNaN(duracion )){
                alert("El valor ingresado contiene letras");
            }else if(duracion < 0){
                alert("El valor ingresado es menor a 0");                
            } else if(duracion>7200){
                alert("El valor ingresado es mayor a 7200");
            }

        } while (isNaN(duracion) || duracion < 0 || duracion > 7200);

        let cancion = [];
        cancion['tema'] = tema;
        cancion['duracion'] = duracion;
        cancion['codigo'] = codigo;
        canciones.push(cancion);


    } while (confirm('¿Ingresar otro tema?'));
}

// Función validarCodigo ingresado
function validarCodigo(codigo) {
    let validacionCodigo = false;
    for(var i = 0; i < codigos.length; i++){  
    return validacionCodigo = codigos[i].codigo == codigo;
    }
  }

// funcion para ver los datos
const MostrarDatos = () => {
    let html = '';
    for (var i = 0; i < discos.length; i++) {
        html += `<p  STYLE="font-weight:bold"> Código del disco: ${discos[i].codigo} </p> 
                <p STYLE="font-weight:bold">Nombre del disco: ${discos[i].nombre} </p> 
                <p STYLE="font-weight:bold"> Autor del disco: ${discos[i].autor} </p>`;
        for (var j = 0; j < canciones.length; j++) {
            if (canciones[j].codigo == discos[i].codigo) {
                if (canciones[j].duracion > 180) {
                    html += `<p STYLE="font-weight:bold">Canción: ${canciones[j].tema} </p> 
                    <p style="color:red;font-weight:bold;"> Duración: ${canciones[j].duracion} </p>`;
                } else {
                    html += `<p STYLE="font-weight:bold"> Canción: ${canciones[j].tema} </p> 
                    <p STYLE="font-weight:bold">  Duración: ${canciones[j].duracion} </p>`;
                }
            }
        }
        html += '<p>*********************</p>';

    }



    const MostrarInfo = (html) => {
        document.getElementById('info').innerHTML = html;
    }



    MostrarInfo(html);
}
