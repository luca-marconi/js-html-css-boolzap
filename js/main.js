$(document).ready(function() {

    $('.fa-microphone').click(function() { // al click della classe microfono parte la funzione
        var messaggioInput = $('#text').val(); // assegno alla variabile il valore inserito nell id text (tramite val)
        $('#text').val(''); // resetto l id text

        var messaggio = $('.template-message-user .message-user').clone(); // assegno alla variabile messaggio la copia template a fine codice html
        messaggio.find('.testo-messaggio').text(messaggioInput); //cerco la classe testo-messaggio e ci scrivo il messaggioInput
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        messaggio.find('.orario-messaggio').text(time); // cerco la classe orario-messaggio e ci scrivo l orario
        $('.chat-message').append(messaggio); // prendo la variabile messaggio e la incollo a fine chat (con append)
        $('.chat-message').animate({scrollTop: $('.chat-message').prop("scrollHeight")}, 500); //scrollo automaticamente alla fine alla ricezione di un nuovo messaggio
        $('i').addClass('fa-microphone');
        $('i').removeClass('fa-paper-plane');

        setTimeout(risposta, 1000);
        function risposta() {
            var messaggioOutput = $('#text').val();
            $('#text').val('');

            var messaggio = $('.template-message-contact .message-contact').clone();
            messaggio.find('.testo-messaggio').text('ok');
            messaggio.find('.orario-messaggio').text(time);
            $('.chat-message').append(messaggio);
            $('.chat-message').animate({scrollTop: $('.chat-message').prop("scrollHeight")}, 500);
        }
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
        $('i').addClass('fa-paper-plane');
    });
});
