function alerta(){
    alert("Se guardaron los datos");
}

$(document).ready(function () {
    var departamentoOptions;
    $.ajax({
        type: 'GET',
        url: 'colombia.json',
        dataType: 'json'
    }).done((data) => {

        $.each(data, function (dkey, depto){

            departamentoOptions += "<option value'" + depto.id + "'>" + depto.departamento + "</option>";
        });
        $('#departamento').html(departamentoOptions);

        $('#departamento').change(function () {

            var ciudadOptions = "";

            var value = $(this).val();

            $.each(data, function (key, depto) {

                if (value == depto.departamento) {
                    $.each(depto.ciudades, function (dkey, val) {

                        ciudadOptions += "<option value'" + val + "'>" + val + "</option>";

                    });
                }
            });

            $('#ciudad').html(ciudadOptions);

        });

    });
});

document.querySelector('#btt').addEventListener('click', validar);

function validar() {
    var p1 = document.getElementById("floatingPassword").value;
    var p2 = document.getElementById("floatingPassword2").value;
    var espacios = false;
    var cont = 0;

    while (!espacios && (cont < p1.length)) {
        if (p1.charAt(cont) == " ")
            espacios = true;
        cont++;
    }

    if (espacios) {
        alert("La contraseña no puede contener espacios en blanco");
        return false;
    }

    if (p1.length == 0 || p2.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
    }


    if (p1 != p2) {
        alert("Las passwords deben de coincidir");
        return false;
    } else {
        alert("enviado con exito");
        return true;
    }
}