window.addEventListener('DOMContentLoaded',
    function () {


        /* scroll event section */
        container.addListener((e) => {

            let scrollTop = container.scrollTop;
            $('.posNum').html(scrollTop)


            if(scrollTop >= 3750){
                $('#section06').addClass('on');
            }

        });


        /*  slide,click event section */


        // $('.search').click(function(){
        //     $(this).toggleClass('on');
        // });

        const search = document.querySelector('.search');

        let isClicked = true;
        search.addEventListener('click',function(e){

            console.log(e.target.dataset.name);
            e.stopPropagation();
            // this.classList.toggle('on');

            if(e.target.dataset.name === 'search' ){
                this.classList.toggle('on');
            }

            
        });
        



        

        $('#header .product').mouseenter(function(e){
            
            $('#mega').css('height','320px');
        });
        $('#mega').mouseleave(function(){
            $('#mega').css('height','0px');
        });


        $("#sc02_slider").slick({
            dots: true, //navigation
            arrows: true, //arrow
            prevArrow: $('#section02 .prev'), //prev
            nextArrow: $('#section02.next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,

        }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {


        }).on('afterChange', function (event, slick, currentSlide, nextSlide) {

            console.log(currentSlide);

            $('#section02 .bar .line').css('transform', `translateX(${451 * currentSlide}px)`);


        });


        // callback


        $("#sc03_slider").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('#section03 .prev'), //prev
            nextArrow: $('.next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 1500, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 3, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: true,

        });


        $("#sc04_slider").slick({
            dots: true, //navigation
            arrows: true, //arrow
            prevArrow: $('#section04 .prev'), //prev
            nextArrow: $('#section04 .next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,


        });




        $("#sc05_slider").slick({
            dots: false, //navigation
            arrows: true, //arrow
            prevArrow: $('#section05 .prev'), //prev
            nextArrow: $('#section05 .next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 3000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,

        });




        $("#main_slider").slick({
            dots: true, //navigation
            arrows: true, //arrow
            prevArrow: $('#main_slider .prev'), //prev
            nextArrow: $('#main_slider .next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,

        });

        $("#visual_slide").slick({
            dots: true, //navigation
            arrows: true, //arrow
            prevArrow: $('#visual_slider .prev'), //prev
            nextArrow: $('#visual_slider .next'), //next
            autoplay: false, // autoplay mode
            autoplaySpeed: 2000, // auto speed
            pauseOnHover: false, // pause on mouse hover
            fade: false, //fade mode only one slider
            speed: 900, // speed
            infinite: true, // infinite mode
            // asNavFor: '.slider2', // another slider
            centerMode: false, // center move
            centerPadding: '0%', // center move padding
            slidesToShow: 1, // show slider number
            slidesToScroll: 1, // next slider number
            swipe: true, // swiper
            focusOnSelect: true, // click to slider
            draggable: true,
            vertical: false, // vertical slider
            verticalSwiping: false, // vertical swiper
            initialSlide: 0,// slider number
            cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)', //css transition∑
            variableWidth: false,

        });










        // #section06 .contents > div





















    })


