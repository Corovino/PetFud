
$("#saveF").click(function() {  
     
    $("form#formReg").validate({

        
        rules: {
            nombre: { required: true, minlength: 2, maxlength: 50},
            celular: { required: true, number: true, minlength: 10, maxlength: 10},
            cantidad: { required: true, number: true, minlength: 1, maxlength: 2},
            tipoM: { required: true},
            'email': "required email",
            frecuencia: { required: true}
            
        },
        messages: {
                   nombre:{
                      required:'<div class="errorV" style="color: #b01b1b;">Cuentanos cual es tu nombre</div>',
                      minlength: '<div class="errorV" style="color: #b01b1b;">Mínimo número de caracteres permitidos son {2} </div>',
                      maxlength: '<div class="errorV" style="color: #b01b1b;">Máximo número de caracteres permitidos son {50} </div>'
                    },

                    celular: {
                                required: '<div class="errorV" style="color: #b01b1b;">Por favor digita tu numero celular </div>',
                                number:  '<div class="errorV" style="color: #b01b1b;">Formato invalido </div>',
                                minlength: '<div class="errorV" style="color: #b01b1b;">Mínimo número de caracteres permitidos son {10} </div>',
                                maxlength: '<div class="errorV" style="color: #b01b1b;">Máximo número de caracteres permitidos son {10} </div>'
                              },

                    'email': "<div class='errorV' style='color: #b01b1b;'>Por favor, ingresa una email valido </div>",

                    cantidad : {
                                  required: '<div class="errorV" style="color: #b01b1b;">Digite su numero celular </div>', 
                                  number:  '<div class="errorV" style="color: #b01b1b;">Ingrese un valor valido </div>',                                 
                                  minlength: '<div class="errorV" style="color: #b01b1b;">Mínimo número de caracteres permitidos son {1} </div>',
                                  maxlength: '<div class="errorV" style="color: #b01b1b;">Máximo número de caracteres permitidos son {2} </div>'
                              },
                    tipoM : {
                                required: "<div class='errorV' style='color: #b01b1b;'>Cuentanos de que tipo es tu mascota</div>",
                              },

                    frecuencia : {
                                    required: "<div class='errorV' style='color: #b01b1b;'>Cuentanos la frecuencia de compra</div>",
                                  },
                               
                },
                submitHandler: function(form){
                  $.ajax({
                            url: 'php/registro.php',
                            type: 'POST',
                            data: $('#formReg').serialize(),
                            
                    }).done(function(data) {
                              swal("Gracias!!!", "Pronto recibiras mas información", "success");                              
                              $("#formReg")[0].reset();
                   });
                }
        
        
      }); 
       
       
                   
}); 
        
