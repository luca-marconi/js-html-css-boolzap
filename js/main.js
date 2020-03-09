$(document).ready(function() {

    $('.fa-microphone').click(function() {
        invioMessaggio();
    });

    $('#cerca-contatti').keyup(function(event) {
        var carattereFiltro = $(this).val().toLowerCase();

            $('.rubrica-user .contact').each(function() {
                var nome = $(this).find('.info-rubrica-user h3').text().toLowerCase();
                if (nome.includes(carattereFiltro)) {
                    $(this).show();
                } else {
                $(this).hide();
                }
        });
    });

    $('#text').click(function () {
        $('i').removeClass('fa-microphone');
        $('.input-message i:last').addClass('fa-paper-plane');
    });

    $('.input-message').keypress(function(event) {
        if (event.keyCode == 13) {
            invioMessaggio()
        }
    });

    $('.contact').click(function() {
        $('.contact').removeClass('active');
        $(this).addClass('active');
        var nomeContatto = $(this).find('h3').text();
        var immagineContatto = $(this).find('img').attr('src');
        console.log(nomeContatto);
        console.log(immagineContatto);
        $('.info-contact').find('p:first').text(nomeContatto);
        $('.image-contact').find('img').attr('src', immagineContatto);
    });

    function invioMessaggio() { // funzione per invio messaggio
        var messaggioInput = $('#text').val();
        if (messaggioInput.trim().length > 0) {
            $('#text').val('');
            var messaggio = $('.template-message-user .message-user').clone();
            messaggio.find('.testo-messaggio').text(messaggioInput);
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes();
            messaggio.find('.orario-messaggio').text(time);
            $('.chat-message').append(messaggio);
            $('.chat-message').animate({scrollTop: $('.chat-message').prop("scrollHeight")}, 500);
            $('.input-message i:last').addClass('fa-microphone');
            $('.input-message i:last').removeClass('fa-paper-plane');
            setTimeout(function() {
                invioRisposta();
            }, 1000);

        }
    }
    function invioRisposta() {// funzione per invio automatico della risposta

        var messaggioOutput = $('#text').val();
        $('#text').val('');
        var messaggio = $('.template-message-contact .message-contact').clone();
        messaggio.find('.testo-messaggio').text('ok');
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        messaggio.find('.orario-messaggio').text(time);
        $('.chat-message').append(messaggio);
        $('.chat-message').animate({scrollTop: $('.chat-message').prop("scrollHeight")}, 500);
    }

});
