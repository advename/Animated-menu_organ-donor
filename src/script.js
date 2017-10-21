    let square0 = document.querySelector(".zero");
    let square1 = document.querySelector(".one");
    let square2 = document.querySelector(".two");
    let square3 = document.querySelector(".three");
    let inner = document.querySelector(".inner");
    let heart = document.querySelector(".heart");
    let activateScale = 0;
    let fa = document.querySelectorAll(".circle");
    let headerH1 = document.querySelector(".h1A");
    let innerC = document.querySelector(".innerC");

    let zeroC = document.querySelector(".zeroC");
    let oneC = document.querySelector(".oneC");
    let twoC = document.querySelector(".twoC");
    let threeC = document.querySelector(".threeC");

    inner.addEventListener('mouseenter', beat);
    inner.addEventListener('mouseleave', beatStop);
    inner.addEventListener('click', firstEvent);



    let cursorPointer = document.querySelectorAll(".pointer");
    cursorPointer.forEach(function (changeme, index) {
        changeme.style.cursor = "pointer";
    });

    function beat() {
        if (activateScale == 0) {
            inner.classList.add("scale-inner");
            heart.play();
        }
    }

    function beatStop() {
        inner.classList.remove("scale-inner");
        heart.pause();
    }

    function firstEvent() {
        heart.pause();
        inner.classList.remove("scale-inner");
        activateScale = 1;
        inner.removeEventListener('click', firstEvent);
        square0.classList.add("square0appear")
        square0.classList.add("square0")
        inner.style.cursor = "default";
        setTimeout(secondEvent, 1100);
        innerC.classList.remove("interactInner");
    }

    function secondEvent() {
        square0.classList.remove("square0appear")
        square0.classList.remove("square0")
        square0.classList.add("square0new")
        square0.classList.add("square0newAni1")
        setTimeout(square1ani, 490)

        function square1ani() {
            square1.classList.add("square1appear");
        }
        setTimeout(square2ani, 1100)

        function square2ani() {
            square2.classList.add("square1appear");
        }
        setTimeout(square3ani, 1700)

        function square3ani() {
            square3.classList.add("square1appear");
            setTimeout(iconAppear, 200)
        }

        function iconAppear() {
            for (var i = 0; i < fa.length; i++) {
                console.log("current loop" + i);
                fa[i].classList.remove("fa-no");
                fa[i].classList.add("fade");
            }
            headerH1.classList.add("h1-animation");
            setTimeout(headerAppear, 200)

        }

        function headerAppear() {
            fa[i].classList.remove("fa-no");
            fa[i].classList.add("fade");
        }
    }


    zeroC.addEventListener('mouseenter', function () {
        square0.classList.add("hoverC")
    });
    zeroC.addEventListener('mouseleave', function () {
        square0.classList.remove("hoverC")
    });

    oneC.addEventListener('mouseenter', function () {
        square1.classList.add("hoverC")
    });
    oneC.addEventListener('mouseleave', function () {
        square1.classList.remove("hoverC")
    });

    twoC.addEventListener('mouseenter', function () {
        square2.classList.add("hoverC")
    });
    twoC.addEventListener('mouseleave', function () {
        square2.classList.remove("hoverC")
    });

    threeC.addEventListener('mouseenter', function () {
        square3.classList.add("hoverC")
    });
    threeC.addEventListener('mouseleave', function () {
        square3.classList.remove("hoverC")
    });
