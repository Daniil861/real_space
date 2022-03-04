(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window.addEventListener("load", (function() {
        if (document.querySelector("body")) setTimeout((function() {
            document.querySelector("body").classList.add("_loaded");
        }), 200);
    }));
    if (sessionStorage.getItem("preloader")) {
        if (document.querySelector(".preloader")) document.querySelector(".preloader").classList.add("_hide");
        document.querySelector(".wrapper").classList.add("_visible");
    }
    const preloader = document.querySelector(".preloader");
    const wrapper = document.querySelector(".wrapper");
    const airplans = document.querySelectorAll(".shop__image-preview");
    const game_airplans = document.querySelectorAll(".game__image");
    if (sessionStorage.getItem("money")) {
        if (document.querySelector(".main")) document.querySelector(".header-wrapper__count_money").textContent = sessionStorage.getItem("money");
        if (document.querySelector(".bonus")) document.querySelector(".header-wrapper__count_money").textContent = sessionStorage.getItem("money");
        if (document.querySelector(".shop")) document.querySelector(".header-wrapper__count_money").textContent = sessionStorage.getItem("money");
        if (document.querySelector(".game")) document.querySelector(".header-wrapper__count_money").textContent = sessionStorage.getItem("money");
    }
    if (sessionStorage.getItem("diamonds")) {
        if (document.querySelector(".main")) document.querySelector(".header-wrapper__count_diamond").textContent = sessionStorage.getItem("diamonds");
        if (document.querySelector(".bonus")) document.querySelector(".header-wrapper__count_diamond").textContent = sessionStorage.getItem("diamonds");
        if (document.querySelector(".shop")) document.querySelector(".header-wrapper__count_diamond").textContent = sessionStorage.getItem("diamonds");
        if (document.querySelector(".game")) document.querySelector(".header-wrapper__count_diamond").textContent = sessionStorage.getItem("diamonds");
    }
    if (document.querySelector(".shop")) {
        if (0 == sessionStorage.getItem("price-1")) {
            document.querySelector(".shop__image-list_one").dataset.price = 0;
            document.querySelector(".shop__image-list_one").classList.add("_payed");
        }
        if (0 == sessionStorage.getItem("price-2")) {
            document.querySelector(".shop__image-list_two").dataset.price = 0;
            document.querySelector(".shop__image-list_two").classList.add("_payed");
        }
        if (0 == sessionStorage.getItem("price-3")) {
            document.querySelector(".shop__image-list_three").dataset.price = 0;
            document.querySelector(".shop__image-list_three").classList.add("_payed");
        }
        if (0 == sessionStorage.getItem("price-4")) {
            document.querySelector(".shop__image-list_four").dataset.price = 0;
            document.querySelector(".shop__image-list_four").classList.add("_payed");
        }
        if (0 == sessionStorage.getItem("price-5")) {
            document.querySelector(".shop__image-list_five").dataset.price = 0;
            document.querySelector(".shop__image-list_five").classList.add("_payed");
            document.querySelector(".shop__diamond").textContent = 0;
        }
        if (0 == sessionStorage.getItem("price-6")) {
            document.querySelector(".shop__image-list_six").dataset.price = 0;
            document.querySelector(".shop__image-list_six").classList.add("_payed");
        }
        if (0 == sessionStorage.getItem("price-7")) {
            document.querySelector(".shop__image-list_seven").dataset.price = 0;
            document.querySelector(".shop__image-list_seven").classList.add("_payed");
        }
    }
    if (document.querySelector(".game")) if (sessionStorage.getItem("active-airplane")) {
        let number_active_airplane = sessionStorage.getItem("active-airplane");
        game_airplans[number_active_airplane - 1].classList.add("_visible");
    } else {
        sessionStorage.setItem("active-airplane", 4);
        game_airplans[3].classList.add("_visible");
    }
    document.addEventListener("click", (e => {
        let targetElement = e.target;
        if (targetElement.closest(".acces-preloader__button")) {
            preloader.classList.add("_hide");
            sessionStorage.setItem("preloader", true);
            wrapper.classList.add("_visible");
        }
        if (targetElement.closest(".acces-preloader__option")) if (false === document.querySelector(".acces-preloader__input").checked) document.querySelector(".acces-preloader__button").classList.add("_lock"); else if (true === document.querySelector(".acces-preloader__input").checked) if (document.querySelector(".acces-preloader__button").classList.contains("_lock")) document.querySelector(".acces-preloader__button").classList.remove("_lock");
        if (targetElement.closest(".bonus__button")) {
            document.querySelector(".bonus__image").classList.add("_anim");
            document.querySelector(".bonus__button").classList.add("_lock");
            setTimeout((() => {
                document.querySelector(".bonus__image").classList.add("_hide");
                document.querySelector(".bonus__image-open").classList.add("_visible");
            }), 2300);
            setTimeout((() => {
                let a = +document.querySelector(".header-wrapper__count_diamond").innerHTML;
                document.querySelector(".header-wrapper__count_diamond").innerHTML = a + 90;
                sessionStorage.setItem("diamonds", a + 90);
                document.querySelectorAll(".header-wrapper__icon").forEach((el => {
                    el.classList.add("_anim");
                }));
                document.querySelectorAll(".header-wrapper__count").forEach((el => {
                    el.classList.add("_anim");
                }));
            }), 3300);
            setTimeout((() => {
                let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                document.querySelector(".header-wrapper__count_money").innerHTML = b + 5e4;
                sessionStorage.setItem("money", b + 5e4);
            }), 3900);
        }
        if (targetElement.closest(".shop__image-list_one")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "none";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                if (0 != sessionStorage.getItem("price-1")) document.querySelector(".shop__cost").classList.add("_visible");
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_one").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_one").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        } else if (targetElement.closest(".shop__image-list_two")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "none";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                if (0 != sessionStorage.getItem("price-2")) document.querySelector(".shop__cost").classList.add("_visible");
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_two").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_two").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        } else if (targetElement.closest(".shop__image-list_three")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "none";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                if (0 != sessionStorage.getItem("price-3")) document.querySelector(".shop__cost").classList.add("_visible");
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_three").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_three").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        } else if (targetElement.closest(".shop__image-list_four")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "none";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_four").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_four").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        } else if (targetElement.closest(".shop__image-list_five")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "flex";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                if (0 != sessionStorage.getItem("price-5")) document.querySelector(".shop__cost").classList.add("_visible");
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_five").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_five").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        } else if (targetElement.closest(".shop__image-list_six")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "none";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                if (0 != sessionStorage.getItem("price-6")) document.querySelector(".shop__cost").classList.add("_visible");
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_six").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_six").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        } else if (targetElement.closest(".shop__image-list_seven")) {
            document.querySelector(".shop__cost").classList.remove("_visible");
            document.querySelector(".shop__cost-diamond").style.display = "none";
            airplans.forEach((el => {
                if (el.classList.contains("_active")) el.classList.remove("_active");
                if (el.classList.contains("_visible")) {
                    el.classList.add("_visible-out");
                    el.classList.remove("_visible");
                }
            }));
            setTimeout((() => {
                if (0 != sessionStorage.getItem("price-7")) document.querySelector(".shop__cost").classList.add("_visible");
                airplans.forEach((el => {
                    if (el.classList.contains("_visible-out")) el.classList.remove("_visible-out");
                }));
            }), 1e3);
            document.querySelector(".shop__image-preview_seven").classList.add("_visible");
            let price = targetElement.closest(".shop__image-list_seven").dataset.price;
            document.querySelector(".shop__money").textContent = price;
        }
        if (targetElement.closest(".shop__image-preview_one") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_one._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let price = +document.querySelector(".shop__image-list_one").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_one").dataset.price) {
                document.querySelector(".shop__image-preview_one").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_one").classList.add("_payed");
                document.querySelector(".shop__image-list_one").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                sessionStorage.setItem("price-1", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        } else if (targetElement.closest(".shop__image-preview_two") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_two._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let price = +document.querySelector(".shop__image-list_two").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_two").dataset.price) {
                document.querySelector(".shop__image-preview_two").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_two").classList.add("_payed");
                document.querySelector(".shop__image-list_two").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                sessionStorage.setItem("price-2", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        } else if (targetElement.closest(".shop__image-preview_three") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_three._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let price = +document.querySelector(".shop__image-list_three").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_three").dataset.price) {
                document.querySelector(".shop__image-preview_three").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_three").classList.add("_payed");
                document.querySelector(".shop__image-list_three").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                sessionStorage.setItem("price-3", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        } else if (targetElement.closest(".shop__image-preview_four") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_four._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let price = +document.querySelector(".shop__image-list_four").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_four").dataset.price) {
                document.querySelector(".shop__image-preview_four").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_four").classList.add("_payed");
                document.querySelector(".shop__image-list_four").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                sessionStorage.setItem("price-4", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        } else if (targetElement.closest(".shop__image-preview_five") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_five._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let diamonds = +document.querySelector(".header-wrapper__count_diamond").innerHTML;
            let price = +document.querySelector(".shop__image-list_five").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_five").dataset.price && diamonds > 4e4) {
                document.querySelector(".shop__image-preview_five").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                document.querySelector(".header-wrapper__count_diamond").innerHTML = diamonds - 4e4;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                document.querySelector(".header-wrapper__count_diamond").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                    document.querySelector(".header-wrapper__count_diamond").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_five").classList.add("_payed");
                document.querySelector(".shop__image-list_five").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                document.querySelector(".shop__diamond").textContent = 0;
                sessionStorage.setItem("price-5", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        } else if (targetElement.closest(".shop__image-preview_six") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_six._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let price = +document.querySelector(".shop__image-list_six").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_six").dataset.price) {
                document.querySelector(".shop__image-preview_six").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_six").classList.add("_payed");
                document.querySelector(".shop__image-list_six").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                sessionStorage.setItem("price-6", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        } else if (targetElement.closest(".shop__image-preview_seven") || targetElement.closest(".shop__button") && document.querySelector(".shop__image-preview_seven._visible")) {
            let points = +document.querySelector(".header-wrapper__count_money").innerHTML;
            let price = +document.querySelector(".shop__image-list_seven").dataset.price;
            if (points >= price && 0 != document.querySelector(".shop__image-list_seven").dataset.price) {
                document.querySelector(".shop__image-preview_seven").classList.add("_active");
                document.querySelector(".header-wrapper__count_money").innerHTML = points - price;
                sessionStorage.setItem("money", points - price);
                document.querySelector(".header-wrapper__count_money").classList.add("_anim-buy");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_anim-buy");
                }), 1e3);
                document.querySelector(".shop__image-list_seven").classList.add("_payed");
                document.querySelector(".shop__image-list_seven").dataset.price = 0;
                document.querySelector(".shop__money").textContent = 0;
                sessionStorage.setItem("price-7", 0);
            } else if (points < price) {
                document.querySelector(".header-wrapper__count_money").classList.add("_no-money");
                setTimeout((() => {
                    document.querySelector(".header-wrapper__count_money").classList.remove("_no-money");
                }), 1e3);
            }
        }
        if (targetElement.closest(".header-wrapper__icon_arrow")) if (document.querySelector(".shop__image-preview_four").classList.contains("_visible") && document.querySelector(".shop__image-list_four").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 4); else if (document.querySelector(".shop__image-preview_one").classList.contains("_visible") && document.querySelector(".shop__image-list_one").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 1); else if (document.querySelector(".shop__image-preview_two").classList.contains("_visible") && document.querySelector(".shop__image-list_two").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 2); else if (document.querySelector(".shop__image-preview_three").classList.contains("_visible") && document.querySelector(".shop__image-list_three").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 3); else if (document.querySelector(".shop__image-preview_five").classList.contains("_visible") && document.querySelector(".shop__image-list_five").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 5); else if (document.querySelector(".shop__image-preview_six").classList.contains("_visible") && document.querySelector(".shop__image-list_six").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 6); else if (document.querySelector(".shop__image-preview_seven").classList.contains("_visible") && document.querySelector(".shop__image-list_seven").classList.contains("_payed")) sessionStorage.setItem("active-airplane", 7);
        if (targetElement.closest(".game__airplane")) create_gun();
    }));
    let count_enem_one = 0;
    let count_enem_two = 0;
    let count_enem_three = 0;
    let count_enem_four = 0;
    let count_enem_five = 0;
    let count_enem_six = 0;
    let count_enem_seven = 0;
    function create_gun() {
        let enemy = document.querySelectorAll(".game__enemy");
        let enemy_loose = document.querySelectorAll(".game__enemy._caput");
        let air = document.querySelector(".game__image._visible");
        let box_gun = document.createElement("div");
        box_gun.classList.add("game__box-gun");
        let gun_one = document.createElement("span");
        gun_one.classList.add("game__gun-one");
        let gun_two = document.createElement("span");
        gun_two.classList.add("game__gun-two");
        box_gun.prepend(gun_one);
        box_gun.append(gun_two);
        air.prepend(box_gun);
        let enemy_one = document.querySelector(".game__enemy_one");
        let enemy_two = document.querySelector(".game__enemy_two");
        let enemy_three = document.querySelector(".game__enemy_three");
        let enemy_four = document.querySelector(".game__enemy_four");
        let enemy_five = document.querySelector(".game__enemy_five");
        let enemy_six = document.querySelector(".game__enemy_six");
        let enemy_seven = document.querySelector(".game__enemy_seven");
        let enemy_one_top = enemy_one.getBoundingClientRect().top;
        let enemy_one_left = enemy_one.getBoundingClientRect().left;
        let enemy_two_top = enemy_two.getBoundingClientRect().top;
        let enemy_two_left = enemy_two.getBoundingClientRect().left;
        let enemy_three_top = enemy_three.getBoundingClientRect().top;
        let enemy_three_left = enemy_three.getBoundingClientRect().left;
        let enemy_four_top = enemy_four.getBoundingClientRect().top;
        let enemy_four_left = enemy_four.getBoundingClientRect().left;
        let enemy_five_top = enemy_five.getBoundingClientRect().top;
        let enemy_five_left = enemy_five.getBoundingClientRect().left;
        let enemy_six_top = enemy_six.getBoundingClientRect().top;
        let enemy_six_left = enemy_six.getBoundingClientRect().left;
        let enemy_seven_top = enemy_seven.getBoundingClientRect().top;
        let enemy_seven_left = enemy_seven.getBoundingClientRect().left;
        let air_top = air.getBoundingClientRect().top;
        let air_left = air.getBoundingClientRect().left;
        if (enemy_loose.length < enemy.length) if (air_left - enemy_one_left > -50 && air_left - enemy_one_left < 50) {
            let path = air_top - enemy_one_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_one.classList.add("_target");
                setTimeout((() => {
                    enemy_one.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_one++;
            if (20 == count_enem_one) {
                setTimeout((() => {
                    enemy_one.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 5e4;
                    sessionStorage.setItem("money", b + 5e4);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_one.style.display = "none";
                    enemy_five.style.display = "block";
                }), 2e3);
            }
        } else if (air_left - enemy_two_left > -70 && air_left - enemy_two_left < 70) {
            let path = air_top - enemy_two_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_two.classList.add("_target");
                setTimeout((() => {
                    enemy_two.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_two++;
            if (10 == count_enem_two) {
                setTimeout((() => {
                    enemy_two.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 3e4;
                    sessionStorage.setItem("money", b + 3e4);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_two.style.display = "none";
                    enemy_six.style.display = "block";
                }), 2e3);
            }
        } else if (air_left - enemy_three_left > -50 && air_left - enemy_three_left < 50) {
            let path = air_top - enemy_three_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_three.classList.add("_target");
                setTimeout((() => {
                    enemy_three.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_three++;
            if (5 == count_enem_three) {
                setTimeout((() => {
                    enemy_three.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 35e3;
                    sessionStorage.setItem("money", b + 35e3);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_three.style.display = "none";
                    enemy_seven.style.display = "block";
                }), 2e3);
            }
        } else if (air_left - enemy_four_left > -70 && air_left - enemy_four_left < 70) {
            let path = air_top - enemy_four_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_four.classList.add("_target");
                setTimeout((() => {
                    enemy_four.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_four++;
            if (20 == count_enem_four) {
                setTimeout((() => {
                    enemy_four.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 1e4;
                    sessionStorage.setItem("money", b + 1e4);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_four.style.display = "none";
                }), 2e3);
            }
        } else if (air_left - enemy_five_left > -70 && air_left - enemy_five_left < 70) {
            let path = air_top - enemy_five_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_five.classList.add("_target");
                setTimeout((() => {
                    enemy_five.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_five++;
            enemy_five.classList.add("_target");
            setTimeout((() => {
                enemy_five.classList.remove("_target");
            }), 500);
            if (3 == count_enem_five) {
                setTimeout((() => {
                    enemy_five.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 1e4;
                    sessionStorage.setItem("money", b + 1e4);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_five.style.display = "none";
                }), 2e3);
            }
        } else if (air_left - enemy_six_left > -50 && air_left - enemy_six_left < 50) {
            let path = air_top - enemy_six_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_six.classList.add("_target");
                setTimeout((() => {
                    enemy_six.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_six++;
            enemy_six.classList.add("_target");
            setTimeout((() => {
                enemy_six.classList.remove("_target");
            }), 500);
            if (10 == count_enem_six) {
                setTimeout((() => {
                    enemy_six.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 1e4;
                    sessionStorage.setItem("money", b + 1e4);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_six.style.display = "none";
                }), 2e3);
            }
        } else if (air_left - enemy_seven_left > -50 && air_left - enemy_seven_left < 50) {
            let path = air_top - enemy_seven_top;
            setTimeout((() => {
                gun_one.style.transform = `translateY(-${path}px)`;
                gun_two.style.transform = `translateY(-${path}px)`;
            }), 100);
            setTimeout((() => {
                enemy_seven.classList.add("_target");
                setTimeout((() => {
                    enemy_seven.classList.remove("_target");
                }), 500);
            }), 500);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
            count_enem_seven++;
            enemy_seven.classList.add("_target");
            setTimeout((() => {
                enemy_seven.classList.remove("_target");
            }), 500);
            if (10 == count_enem_seven) {
                setTimeout((() => {
                    enemy_seven.classList.add("_caput");
                    let b = +document.querySelector(".header-wrapper__count_money").innerHTML;
                    document.querySelector(".header-wrapper__count_money").innerHTML = b + 1e4;
                    sessionStorage.setItem("money", b + 1e4);
                    document.querySelector(".header-wrapper__icon_money").classList.add("_anim");
                    document.querySelector(".header-wrapper__count_money").classList.add("_anim");
                    setTimeout((() => {
                        document.querySelector(".header-wrapper__icon_money").classList.remove("_anim");
                        document.querySelector(".header-wrapper__count_money").classList.remove("_anim");
                    }), 1e3);
                }), 1300);
                setTimeout((() => {
                    enemy_seven.style.display = "none";
                }), 2e3);
            }
        } else {
            setTimeout((() => {
                gun_one.style.transform = `translateY(-1000px)`;
                gun_two.style.transform = `translateY(-1000px)`;
            }), 100);
            setTimeout((() => {
                gun_one.style.display = `none`;
                gun_two.style.display = `none`;
            }), 1e3);
        } else document.querySelector(".play").classList.add("_active");
    }
    window["FLS"] = true;
    isWebp();
})();