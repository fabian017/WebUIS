function traerdatos() {

    const valorurl = window.location.search;
    const urlparametros = new URLSearchParams(valorurl);
    var gusto_data = urlparametros.get("gusto_data");
    var porcentaje_data = urlparametros.get("porcentaje_data");
    var nombre_data = urlparametros.get("nombrecompleto");
    var email_data =urlparametros.get("emailinput");
    var telefono_data = urlparametros.get("telefonoinput");
    document.body.getElementsByClassName("nombreregistro")[0].textContent = nombre_data;
    document.body.getElementsByClassName("emaildato")[0].textContent = email_data;
    document.body.getElementsByClassName("telefonodato")[0].textContent = telefono_data;
    document.body.getElementsByClassName("gusto")[0].textContent = gusto_data;
    document.body.getElementsByClassName("porcentaje")[0].textContent = porcentaje_data;
}