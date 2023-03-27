  $(document).ready(function () {
            $("#a").click(function () {
                $(".b").slideToggle();
            });

            $(window).resize(function () {
                if (window.innerWidth >= 768) {
                    $(".b").show();
                }
            });

            $(window).resize(function () {
                if (window.innerWidth <= 767) {
                    $(".b").hide();
                }
            });
        });
