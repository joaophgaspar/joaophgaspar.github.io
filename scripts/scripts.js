$(document).ready(function() {

    // mobile
    var mobile = false
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        mobile = true
    }

    // word hover animation
    var my_interval;
    $(document).on("mouseenter", "#random_text", function() {

        if (!mobile)
            text_skills();

    }).mouseout(function() {
        $("#random_text").html("¯&#92;_(ツ)_/¯")
        clearInterval(my_interval)
    });


    // word animation
    function text_skills() {
        var random_words = ["Digital", "Graphic", "UI/UX"]

        var i = 0;

        my_interval = setInterval(function() {
            $("#random_text").html(random_words[i])

            if (i == random_words.length - 1)
                i = 0
            else
                i++

        }, 400)
    }



    // data content
    $(projects).each(function(i, item) {

        var row_element = '<div class="row">' +
            '<div class="col-sm-12">' +
            '<h2><a href="' + item.link + '" target="_blank" class="textinfo white_type">' + item.name + '</a></h2>' +
            '<p class="hideinfo blue_type">' + item.info + '</p>' +
            '<div class="mouseFollow"> <img src = "images/' + item.image + '" >' +
            '</div></div></div>';
        $("#info_container").append(row_element)

    })


    if (!mobile) {

        $("#random_text").css("width", "380px");

    }

    if (mobile) {
        $("h2").css("font-size", "50px");
        text_skills();
        $(".hideinfo").css("opacity", 1);
        $("p").css("font-size", "20px");
    }

    // data hover image
    $(document).on('mousemove', '.textinfo', function(e) {
        if (!mobile) {

            $(this).closest('.col-sm-12').find('.mouseFollow').show()
            $(this).closest('.col-sm-12').find(".hideinfo").css("opacity", 1)
            $(this).closest('.col-sm-12').find('.mouseFollow').css("top", e.clientY).css("left", e.clientX);
        }
    })


    .mouseout(function() {
        $(".mouseFollow").hide()
        $(".hideinfo").css("opacity", 0)

    });




    document.cookie = "open_me=https://youtu.be/GaoLU6zKaws"

});

// text TAB
msg = "Hi there, my name is João Gaspar. I’m a Designer based in Lisbon, PT. ";
position = 0;

function scrolltitle() {
    document.title = msg.substring(position, msg.length) + msg.substring(0, position);
    position++;
    if (position > msg.length) position = 0
    window.setTimeout("scrolltitle()", 100);
}
scrolltitle();