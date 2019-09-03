$(document).ready(function(){

    //Invitados
    var lstInvitados = 
    [
       {
        nombre: "Oscar Govea",
        password: "123",
        noInvitados: 2,
        mesa: 12
       },
       {
        nombre: "Lucia Vargas",
        password: "123",
        noInvitados: 3,
        mesa: 13
       }  
    ];
    
    //Download Invitacion
    $("#btnDownloadInvitacion").click(function(){

        var user = $("#txtUser").val();
        var pass = $("#txtPassword").val();
        var qrcode;

        for(var element=0; element<lstInvitados.length; element++){
            if(user === lstInvitados[element].nombre && pass === lstInvitados[element].password){
                $("#qrDiv").html("<div id='qrcode'></div>");
                qrcode = new QRCode("qrcode", {
                    text: "Boda O & L\n" + 
                          "Nombre: "+ lstInvitados[element].nombre + "\n" +
                          "No. Invitados: " + lstInvitados[element].noInvitados + "\n"+
                          "Mesa: "+ lstInvitados[element].mesa + "\n",
                    width: 210,
                    height: 210,
                    colorDark : "#000000",
                    colorLight : "#ffffff",
                    correctLevel : QRCode.CorrectLevel.H
                });
                return true;
            }
            else{
                Swal.fire(
                    'Intenta Nuevamente!',
                    'Probablemente no estes invitado',
                    'error'
                  )
                $("#txtUser").val("");
                $("#txtPassword").val("");
                $("#qrDiv").html("");
                return true;
            }
        }
    });




});

