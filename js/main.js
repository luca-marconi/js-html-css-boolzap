$(document).ready(function() {

    $('.fa-microphone').click(function() {
        var messaggioInput = $('#text').val();
        $('#text').val('');

        var messaggio = $('.template-message-user .message-user').clone();
        messaggio.find('.testo-messaggio').text(messaggioInput);
        messaggio.find('.orario-messaggio').text('12:00');
        $('.chat-message').append(messaggio);

        setTimeout(risposta, 1000);
        function risposta() {
            var messaggioOutput = $('#text').val();
            $('#text').val('');

            var messaggio = $('.template-message-contact .message-contact').clone();
            messaggio.find('.testo-messaggio').text('ok');
            messaggio.find('.orario-messaggio').text('15:00');
            $('.chat-message').append(messaggio);
            $('.chat-message').animate({scrollTop: $('.chat-message').prop("scrollHeight")}, 500);
        }

    })



});
