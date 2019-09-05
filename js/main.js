$(document).ready(function () {
    
    var swiper = new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    $("#mensajeQR").hide();
    //Invitados
    var lstInvitados =
        [
            {
                nombre: "Admin",
                password: "123",
                noInvitados: 2,
                mesa: 12
            },
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

    lstInvitados.length;

    //Download Invitacion
    $("#btnDownloadInvitacion").click(function () {

        var user = $("#txtUser").val();
        var pass = $("#txtPassword").val();
        var qrcode;
        var encontrado;

        for (var element = 0; element < lstInvitados.length; element++) {
            encontrado = false;
            if (user === lstInvitados[element].nombre && pass === lstInvitados[element].password) {
                encontrado = true;
                break;
            }
        }
        if (encontrado) {
            $("#qrDiv").html("<div id='qrcode'></div>");
            qrcode = new QRCode("qrcode", {
                text: "Boda O & L\n" +
                    "Nombre: " + lstInvitados[element].nombre + "\n" +
                    "No. Invitados: " + lstInvitados[element].noInvitados + "\n" +
                    "Mesa: " + lstInvitados[element].mesa + "\n",
                width: 210,
                height: 210,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            $("#nombreInvitado").html(lstInvitados[element].nombre);
            $("#mensajeQR").show();
        }
        else {
            Swal.fire(
                'Intenta Nuevamente!',
                'Probablemente no estes invitado',
                'error'
            );
            $("#mensajeQR").hide();
            $("#txtUser").val("");
            $("#txtPassword").val("");
            $("#qrDiv").html("");
        }
    });
});

