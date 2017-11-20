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
    $(document).on('click', '.art_update', function() {
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
    if (c == 1) {
        $('nav').animate({
            marginLeft: '1vw'
        }, 500, function() {
            $('.open_anim').html('<i class="material-icons">keyboard_arrow_left</i>')
        });
    } else {}

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

    /*$('#tb1').css({
            backgroundColor: "#7953d2",
            borderBottom:  1px solid #d9d9d9
            borderTop: 1px solid #d9d9d9;
        }); */

    //ajax table change
    change(0);
    set = 0;
    $('#tb1').click(function() {
        set = 1;
        change(set);
    });
    $('#tb2').click(function() {
        set = 2;
        change(set);
    });
    $('#tb3').click(function() {
        set = 3;
        change(set);
    });
    $('#tb4').click(function() {
        set = 4;
        change(set);
    });

    function change(set) {
        switch (set) {
        case 1:
            {
                $.ajax({
                    type: "post",
                    url: "tables/table1.php",
                    data: {},
                    success: function(page) {
                        $('#container').html(page)
                    }
                });
                $('#tb1').css({
                    backgroundColor: "#7953d2",
                    borderBottom: "1px solid #d9d9d9",
                    borderTop: "1px solid #d9d9d9",
                });
                $('#tb2,#tb3,#tb4').css({
                    backgroundColor: "#4527a0",
                    borderTop: "0px",
                    borderBottom: "0px"
                });
                break;
            }
        case 2:
            {
                $.ajax({
                    type: "post",
                    url: "tables/table2.php",
                    data: {},
                    success: function(page) {
                        $('#container').html(page)
                    }
                });
                $('#tb2').css({
                    backgroundColor: "#7953d2",
                    borderBottom: "1px solid #d9d9d9",
                    borderTop: "1px solid #d9d9d9",
                });
                $('#tb1,#tb3,#tb4').css({
                    backgroundColor: "#4527a0",
                    borderTop: "0px",
                    borderBottom: "0px"
                });
                break;
            }
        case 3:
            {
                $.ajax({
                    type: "post",
                    url: "tables/table3.php",
                    data: {},
                    success: function(page) {
                        $('#container').html(page)
                    }
                });
                $('#tb3').css({
                    backgroundColor: "#7953d2",
                    borderBottom: "1px solid #d9d9d9",
                    borderTop: "1px solid #d9d9d9",
                });
                $('#tb2,#tb1,#tb4').css({
                    backgroundColor: "#4527a0",
                    borderTop: "0px",
                    borderBottom: "0px"
                });
                break;
            }
        case 4:
            {
                $.ajax({
                    type: "post",
                    url: "tables/table4.php",
                    data: {},
                    success: function(page) {
                        $('#container').html(page)
                    }
                });
                $('#tb4').css({
                    backgroundColor: "#7953d2",
                    borderBottom: "1px solid #d9d9d9",
                    borderTop: "1px solid #d9d9d9",
                });
                $('#tb2,#tb3,#tb1').css({
                    backgroundColor: "#4527a0",
                    borderTop: "0px",
                    borderBottom: "0px"
                });
                break;
            }
        default:
            {
                $.ajax({
                    type: "post",
                    url: "tables/table1.php",
                    data: {},
                    success: function(page) {
                        $('#container').html(page)
                    }
                });
                $('#tb1').css({
                    backgroundColor: "#7953d2",
                    borderBottom: "1px solid #d9d9d9",
                    borderTop: "1px solid #d9d9d9",
                });
                $('#tb2,#tb3,#tb4').css({
                    backgroundColor: "#4527a0",
                    borderTop: "0px",
                    borderBottom: "0px"
                });
            }
        }

    }
    //      insert 
    $('#send_button').click(function() {
        var tytul = $('#art_tytul').val();
        var tresc = $('#art_tresc').val();

        switch (set) {
        case 1:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/table1.php",
                    data: {
                        art_tytul: tytul,
                        art_tresc: tresc
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 2:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/table2.php",
                    data: {
                        art_tytul: tytul,
                        art_tresc: tresc
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 3:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/table3.php",
                    data: {
                        art_tytul: tytul,
                        art_tresc: tresc
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 4:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/table4.php",
                    data: {
                        art_tytul: tytul,
                        art_tresc: tresc
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        default:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/table1.php",
                    data: {
                        art_tytul: tytul,
                        art_tresc: tresc
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
            }

        }
    });
    // DELETE
    $(document).on('click', '.art_delete', function() {
        var id = $(this).parent().find('#artid').val();
        switch (set) {
        case 1:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete1.php",
                    data: {
                        id: id,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 2:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete2.php",
                    data: {
                        id: id,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;

            }
        case 3:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete3.php",
                    data: {
                        id: id,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 4:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete4.php",
                    data: {
                        id: id,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        default:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete1.php",
                    data: {
                        id: id,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });

            }
        }
    });

    //UPDATE
 $(document).on('click', '.art_send', function() {
    var id2 = $(this).parent().find('#artid').val();
    var tytul_e = $(this).parent().find('.art_display_tytul').val();
    var tresc_e = $(this).parent().find('.art_display_tresc').val();
    switch(set){
        case 1:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete1.php",
                    data: {
                        id2: id2,
                        tytul_e:tytul_e,
                        tresc_e:tresc_e,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 2:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete2.php",
                    data: {
                        id2: id2,
                        tytul_e:tytul_e,
                        tresc_e:tresc_e,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;

            }
        case 3:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete3.php",
                    data: {
                        id2: id2,
                        tytul_e:tytul_e,
                        tresc_e:tresc_e,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        case 4:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete4.php",
                    data: {
                        id2: id2,
                        tytul_e:tytul_e,
                        tresc_e:tresc_e,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });
                break;
            }
        default:
            {
                $.ajax({
                    type: "POST",
                    url: "tables/delete1.php",
                    data: {
                        id2: id2,
                        tytul_e:tytul_e,
                        tresc_e:tresc_e,
                    },
                    success: function(page) {
                        $('#container').html(page);
                    }
                });

            }
        }
    
});

});
