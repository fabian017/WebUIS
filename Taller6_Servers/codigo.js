function validacion()
{
    var nombre,apellido,edad,usuario,contrasena,email,conf_contrasena;
    nombre=document.getElementById("nombre").value;
    apellido=document.getElementById("apellido").value;
    usuario=document.getElementById("usuario").value;
    contrasena=document.getElementById("contrasena").value;
    conf_contrasena=document.getElementById("conf_contrasena").value;
    email=document.getElementById("email").value;
    edad = document.getElementById("fecha_nac").value;
    expresion1 = /\W/;
    expresion2=/\w[&#%]/;
    if(nombre ==="" ||edad=="" || apellido ==="" ||usuario ==="" ||contrasena ==="" ||email ==="" )
    {
        alert("Todos los campos son obligatorios")
        return false;
    }
    else if (usuario.match(expresion1))
    { 
        alert("El usuario no debe contener sin caracteres extraños");
        return false; 
    } 
    else if (contrasena.length < 8 || contrasena.length>15 || !contrasena.match(expresion2))
    { 
        alert("Su contraseña debe estar entre 8 y 15 caracteres, contener una mayuscula, numeros y/o los siguientes caracteres [#,/,%,&]");
        return false; 
    }
    else if(contrasena != conf_contrasena)
    {
        alert('Las constraseñas no coinciden');
        return false;
    }
    var edadActual = calcular_edad(edad);
    alert('Su edad es de: ' + edadActual + ' años')
}
function calcular_edad(edad) {
    var hoy = new Date();
    var fechaNac = new Date(edad);
    var nuevaEdad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();
    if(mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate()))
    {
        edad--
    }
    return nuevaEdad;
}

$(document).ready(function(){
    $('#mostrar').click(function(){
        // var nuevoHtml = $('<div id="texto_enf"><label></label><textarea value="" maxlength="200"></textarea>Cuales?</label></div></br>');
        // $(this).text(nuevoHtml);
        // $("#texto_enf").show();
        $("#areadetexto").html('<label></label><textarea value="" maxlength="200"></textarea>Cuales?</label></br>');
    });
    $('#ocultar').click(function(){
        $("#areadetexto").hide();
    });
});