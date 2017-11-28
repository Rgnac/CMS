$(document).ready(function() {
    //ht
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
        $('#art_tytul').val("");
        $('#art_tresc').val("");
    });
    //UPDATE_ANIMATION
    var b = 0;
    $(document).on('click', '.art_update', function() {
        if (b == 0) {
            $(this).parent().find('.art_display').css({
                borderBottom: '0px solid #4527a0'
            }).animate({
                borderWidth: 1
            }, 100, function() {
                $(this).parent().find('.art_update').html('wstecz');
                $(this).parent().find('.art_send').css('visibility', 'visible');
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

    //OPEN NAVIGATION
    if (c == 1) {
        $('nav').animate({
            marginLeft: '1vw'
        }, 500, function() {
            $('.open_anim').html('<i class="material-icons">keyboard_arrow_left</i>')
        });
    } else {}

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

    //TABLE CHANGE
    tb_change(1,2,3,4);
    set = 1;
    $('#tb1').click(function() {
        set = 1;
        tb_change(set,2,3,4);
    });
    $('#tb2').click(function() {
        set = 2;
        tb_change(set,1,3,4);
    });
    $('#tb3').click(function() {
        set = 3;
        tb_change(set,1,2,4);
    });
    $('#tb4').click(function() {
        set = 4;
        tb_change(set,1,2,3);
    });
    function tb_change(set,r1,r2,r3){
    $.ajax({
                    type: "post",
                    url: "tables/table"+set+".php",
                    data: {},
                    success: function(page) {
                        $('#container').html(page)
                    }
                });
                $('#tb'+set).css({
                    backgroundColor: "#7953d2",
                    borderBottom: "1px solid #d9d9d9",
                    borderTop: "1px solid #d9d9d9",
                });
                $('#tb'+r1+',#tb'+r2+',#tb'+r3).css({
                    backgroundColor: "#4527a0",
                    borderTop: "0px",
                    borderBottom: "0px"
                });
            }

   
    //INSERT
    $('#send_button').click(function() {
        var tytul = $('#art_tytul').val();
        var tresc = $('#art_tresc').val();

        $.ajax({
            type: "POST",
            url: "tables/table" + set + ".php",
            data: {
                art_tytul: tytul,
                art_tresc: tresc
            },
            success: function(page) {
                $('#container').html(page);
            }
        });
    });
    //DELETE
    $(document).on('click', '.art_delete', function() {
        var id = $(this).parent().find('#artid').val();
        $.ajax({
            type: "POST",
            url: "tables/table" + set + ".php",
            data: {
                id: id,
            },
            success: function(page) {
                $('#container').html(page);
            }
        });

    });
    //UPDATE
    $(document).on('click', '.art_send', function() {
        var id2 = $(this).parent().find('#artid').val();
        var tytul_e = $(this).parent().find('.art_display_tytul').val();
        var tresc_e = $(this).parent().find('.art_display_tresc').val();

        $.ajax({
            type: "POST",
            url: "tables/table" + set + ".php",
            data: {
                id2: id2,
                tytul_e: tytul_e,
                tresc_e: tresc_e,
            },
            success: function(page) {
                $('#container').html(page);

            }

        });
    });
});
