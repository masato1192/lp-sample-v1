$(function() {
    initializeHeaderState();
    initializeMobileMenu();
    initializeVoiceSlider();
    initializeFaqAccordion();
    initializeSmoothScroll();

    function initializeHeaderState() {
        var $header = $(".js-site-header");

        toggleHeaderState();
        $(window).on("scroll", function() {
            toggleHeaderState();
        });

        function toggleHeaderState() {
            $header.toggleClass("is-scrolled", $(window).scrollTop() > 12);
        }
    }

    function initializeMobileMenu() {
        $(".js-toggle-menu").on("click", function() {
            var $button = $(this);
            var $header = $button.closest(".js-site-header");
            var isOpen = $header.hasClass("is-menu-open");

            $header.toggleClass("is-menu-open", !isOpen);
            $button.attr("aria-expanded", String(!isOpen));
        });
    }

    function initializeVoiceSlider() {
        if (!$(".js-voice-swiper").length) {
            return;
        }

        new Swiper(".js-voice-swiper", {
            loop: false,
            slidesPerView: 1,
            spaceBetween: 12,
            pagination: {
                el: ".js-voice-pagination",
                clickable: true
            },
            breakpoints: {
                641: {
                    slidesPerView: 3
                },
                961: {
                    slidesPerView: 3,
                    allowTouchMove: false
                }
            }
        });
    }

    function initializeFaqAccordion() {
        $(".js-faq-question").on("click", function() {
            var $button = $(this);
            var $item = $button.closest(".js-faq-item");
            var $answer = $item.find(".js-faq-answer");
            var isOpen = $item.hasClass("is-open");

            if (isOpen) {
                $item.removeClass("is-open");
                $button.attr("aria-expanded", "false");
                $answer.stop(true, true).slideUp(180);
                return;
            }

            $item.addClass("is-open");
            $button.attr("aria-expanded", "true");
            $answer.stop(true, true).slideDown(180);
        });
    }

    function initializeSmoothScroll() {
        $(".js-smooth-link").on("click", function(event) {
            var targetId = $(this).attr("href");
            var targetElement = document.getElementById(targetId.slice(1));

            if (!targetElement) {
                return;
            }

            event.preventDefault();
            $("html, body").animate({
                scrollTop: $(targetElement).offset().top - 12
            }, 400);
        });
    }
});
