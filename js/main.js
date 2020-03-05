$(document).ready(function() {

    $('.fa-microphone').click(function() {
        var messaggioInput = $('#text').val();
        $('#text').val('');

        var messaggio = $('.template-message-user .message-user').clone();
        messaggio.find('.testo-messaggio').text(messaggioInput);
        var dt = new Date();
        var time = dt.getHours() + ":" + dt.getMinutes();
        messaggio.find('.orario-messaggio').text(time);
        $('.chat-message').append(messaggio);
        $('.chat-message').animate({scrollTop: $('.chat-message').prop("scrollHeight")}, 500);

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
        console.log('prova');
        var carattereFiltro = $(this).val().toLowerCase();

        console.log(carattereFiltro);
            $('.rubrica-user .contact').each(function() {
                var nome = $(this).find('.info-rubrica-user h3').text().toLowerCase();
                if (nome.includes(carattereFiltro)) {
                    $(this).show();
                } else {
                $(this).hide();
                }
        });
    });
});
