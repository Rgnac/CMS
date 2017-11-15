$(document).ready(function() {
    //open new post menu
    var a = 0;
    $('#add_newpost').click(function() {

        if (a == 0) {
            $('#new').animate({
                height: "200px",
            }, 500, function() {
                $('#form').css("visibility", "visible")
            });
            a = 1;
            $('#add_newpost').html("-");
        } else {
            $('#new').animate({
                height: "0px",
            }, 500, function() {
                $('#form').css("visibility", "hidden")
            });
            a = 0;
            $('#add_newpost').html("+");
        }
    });
    //clean form
    $('#clear_button').click(function() {
        $('#form1')[0].reset();
    });
    //update animations
    var b = 0;
    $('.art_update').click(function() {
        if (b == 0) {
            $(this).parent().find('.art_display').css({
                borderBottom: '0px solid #4527a0'
            }).animate({
                borderWidth: 1
            }, 100, function() {
                $(this).parent().find('.art_update').html('wstecz');
                $(this).parent().find('.art_send').css('visibility', 'visible');
               // $(this).parent().find('.art').css('min-height','15vh');
            }).prop('readonly', false);
            b = 1;

            
        } else {
            $(this).parent().find('.art_display').animate({
                borderWidth: 0
            }, 100, function() {
                $(this).html('edytuj');
                $(this).parent().find('.art_send').css('visibility', 'hidden');
            }).prop('readonly', true);
            b = 0;
        }

    });

    //open navbar
    if(c==1){
        $('nav').animate({
                marginLeft: '1vw'
            }, 500, function() {
                $('.open_anim').html('<i class="material-icons">keyboard_arrow_left</i>')
            });
    }
    else{

    }




    //var c =0;
    $('.open_anim').click(function() {
        if (c == 0) {
            $('nav').animate({
                marginLeft: '1vw'
            }, 500, function() {
                $('.open_anim').html('<i class="material-icons">keyboard_arrow_left</i>')
            });
            c = 1;
        } else {
            $('nav').animate({
                marginLeft: '-14vw'
            }, 500, function() {
                $('.open_anim').html('<i class="material-icons">keyboard_arrow_right</i>')
            });
            c = 0;
        }

    });

 
});
