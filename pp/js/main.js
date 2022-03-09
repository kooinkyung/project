window.addEventListener('DOMContentLoaded',
    function () {


        /* scroll event section */
        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)


            if (scrollTop >= 300) {
                $('#section02').addClass('on');
            }

            if (scrollTop >= 1900) {
                $('#section03').addClass('on');
            }


        });





        /*  slide,click event section */


















        $('#text_box03').mouseenter(function () {
            $('#text_box03 .text02').css('width', '74px');
            $('#text_box03 .text04').css('width', '74px');
        });

        $('#text_box03 .contents').mouseleave(function () {
            $('#text_box03 .text02').css('width', '0px');
            $('#text_box03 .text04').css('width', '0px');
        });


        $('#text_box04').mouseenter(function () {
            $('#text_box04 .text02').css('width', '119px');
            $('#text_box04 .text04').css('width', '119px');
        });

        $('#text_box04 .contents').mouseleave(function () {
            $('#text_box04 .text02').css('width', '0px');
            $('#text_box04 .text04').css('width', '0px');
        });


        $('#text_box05').mouseenter(function () {
            $('#text_box05 .text02').css('width', '74px');
            $('#text_box05 .text04').css('width', '119px');
        });

        $('#text_box05 .contents').mouseleave(function () {
            $('#text_box05 .text02').css('width', '0px');
            $('#text_box05 .text04').css('width', '0px');
        });


        $('#text_box01').mouseenter(function () {
            $('#text_box01 .text02').css('width', '119px');
            $('#text_box01 .text04').css('width', '74px');
        });

        $('#text_box01 .contents').mouseleave(function () {
            $('#text_box01 .text02').css('width', '0px');
            $('#text_box01 .text04').css('width', '0px');
        });

        $('#text_box02').mouseenter(function () {
            $('#text_box02 .text02').css('width', '142px');
            $('#text_box02 .text04').css('width', '142px');
        });

        $('#text_box02 .contents').mouseleave(function () {
            $('#text_box02 .text02').css('width', '0px');
            $('#text_box02 .text04').css('width', '0px');
        });


    })


