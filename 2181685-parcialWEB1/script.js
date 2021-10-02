var n =0;
function agregar_info(){

    var cuerpo = document.getElementById("body_tabla");
    var fila_tabla = document.createElement("tr");
    fila_tabla.setAttribute("id", "registro" + n.toString());
    var etiqueta1 = document.createElement("td");
    var etiqueta2 = document.createElement("td");
    var etiqueta3 = document.createElement("td");
    var enlace = document.createElement("a");
    var gusto = document.getElementById("gusto").value;
    var contenido_gusto = document.createTextNode(gusto);
    var contenido_porcentaje = document.createTextNode("0");
    var contenido_editar = document.createTextNode("editar");
    etiqueta1.setAttribute("id", "gusto"+n);
    etiqueta1.appendChild(contenido_gusto);
    etiqueta2.setAttribute("id", "porcentaje" + n);
    etiqueta2.appendChild(contenido_porcentaje);
    enlace.appendChild(contenido_editar);
    enlace.setAttribute("onclick", "editar(" + n +")");
    enlace.setAttribute("id", "editar" + n);
    enlace.setAttribute("class", "link");
    enlace.setAttribute("style", "color: blue; font-weight: 800;")
    etiqueta3.appendChild(enlace);
    fila_tabla.appendChild(etiqueta1);
    fila_tabla.appendChild(etiqueta2);
    fila_tabla.appendChild(etiqueta3);
    cuerpo.appendChild(fila_tabla);
    n = n+1;
}


numfila = 0;
function editar(numero){
    numfila += 1;
    if (numfila <= 1) {
        var editar_fila = document.getElementById("editar"+numero);
        var editar_gusto = document.getElementById("gusto"+numero);
        var editar_porcentaje = document.getElementById("porcentaje"+numero);
        var nombrecompleto = document.getElementById("nombrecompleto").value;
        var emailinput = document.getElementById("emailinput").value;
        var telefonoinput = document.getElementsByClassName("telefonoinput").value;

        var gusto_data= editar_gusto.innerHTML;
        var porcentaje_data = editar_porcentaje.innerHTML;


        editar_gusto.innerHTML = "<input class='form - control' type='text' aria-label='default input example' size='15' name='gusto_data' id='gusto" + numero + "value='" + gusto_data + "'>";
        editar_porcentaje.innerHTML = "<input class='form - control' type='text' aria-label='default input example' size='3' name='porcentaje_data' id='porcentaje" + numero + "value='" + porcentaje_data + "'>";

        editar_fila.innerHTML ="<span style='color:#a29ea0; font-weight: 400;'>En edicion</span>";
        document.body.getElementsByClassName('div1')[0].textContent = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos';
        document.body.getElementsByClassName('div2')[0].innerHTML = '<button type="submit" class="btn btn-outline-secondary" id="aceptar" >Aceptar</button>';
        document.body.getElementsByClassName('div3')[0].innerHTML = '<button type="reset" class="btn btn-outline-danger" id="cancelar" onclick="location.reload()">Cancelar</button>';

    }
    else {
        alert("Solo se puede editar una línea. Recargue la página para poder editar otra. SALUDOS PROFE");
    }
}