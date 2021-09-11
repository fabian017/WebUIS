function validar() {

    var id, nombre,apellido,direccion,usuario,contraseña,correo,telefono,exprecion,iChars;
    
    nombre= document.getElementById("nombre").value;
    apellido= document.getElementById("apellido").value;
    direccion= document.getElementById("direccion").value;
    usuario= document.getElementById("usuario").value;
    contraseña= document.getElementById("contraseña").value;
    correo= document.getElementById("correo").value;
    telefono= document.getElementById("telefono").value;
    exprecion= /^(cll)|(cra)|(av)|(anv)|(trans)/
    

    
    if(nombre == "" || apellido == "" || direccion == "" || usuario == "" || contraseña == "" || correo == "" || telefono == ""  ){
        if(nombre == ""){
            alert("El campo nombre esta vacio");
        }
        else if(apellido==""){
            alert("El campo apellido esta vacio");
            }
        else if(direccion==""){
            alert("El campo direccion esta vacio");
            }
            else if(usuario==""){
                alert("El campo usuario esta vacio");
                }
                else if(contraseña==""){
                    alert("El campo contraseña esta vacio");
                    }
                    else if(correo==""){
                        alert("El campo correo esta vacio");
                        }
                        else{
                            alert("El campo telefono esta vacio");
                            }
                                                                
            
            
    
        return false;
     }
    
     else if(nombre.length >25 || apellido.length>25 || (usuario.length>20 || usuario.length<10) || (contraseña.length<15 || contraseña.length>20 ) || correo.length> 120 ){
    
        if( nombre.length >25){
            alert("El campo nombre tiene mas de 25 carateres");
        }
        else if(apellido.length > 25){
            alert("El campo apellido tiene mas de 25 carateres");
        }
    
        else if(usuario.length <10 || usuario.length > 20){
            if(usuario.length<10){
                alert("El campo usuario tiene menos de 10 caracteres");}
                else if(usuario.length>20){
                    alert("El campo usuario tiene mas de 20 caracteres");}
              }
         
              else if(contraseña.length <15 || contraseña.length > 20){
                if(contraseña.length<15){
                    alert("El campo contraseña tiene menos de 15 caracteres");}
                    else if(contraseña.length>20){
                        alert("El campo contraseña tiene mas de 20 caracteres");}
                  }
            else{
                alert("El campo correo tiene mas de 120 caracteres");
    
                }          
              
              
    return false;
    }
    
    else if(isNaN(telefono)){
        alert("el telefono debe ser un numero");
        return false;
    }
    
    else if(exprecion.test(direccion)==false){
        alert("El campo direccion debe comenzar por cll, cra, av, anv, trans")
        return false;
    }

    


    }//funcion

     
    