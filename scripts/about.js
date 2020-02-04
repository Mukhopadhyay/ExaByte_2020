// (function (window, undefined) {
//     var
//         doc = window.document,
//         defualtStyle = "display:inline-block;",
//         Textile = function (n) {
//             var
//                 wordDiv,
//                 charDiv;
//             this.words = [];
//             this.chars = [];
//             this.contentClone = n.innerHTML;
//             this.n = n;
//             n.innerHTML = '';
//             var wordsArr = this.contentClone.split(' ');
//             for (var i = 0, wordslen = wordsArr.length; i < wordslen;) {
//                 wordDiv = doc.createElement('div');
//                 wordDiv.style.cssText += defualtStyle;
//                 var word = wordsArr[i++],
//                     charsArr = word.split('');
//                 for (var j = 0, charslen = charsArr.length; j < charslen;) {
//                     charDiv = doc.createElement('div');
//                     charDiv.style.cssText += defualtStyle;
//                     charDiv.textContent = charsArr[j++];
//                     wordDiv.appendChild(charDiv);
//                     this.chars.push(charDiv);
//                 }
//                 n.appendChild(wordDiv);
//                 this.words.push(wordDiv);
//                 if (i !== wordslen) {
//                     wordDiv.insertAdjacentHTML('afterEnd', ' ');
//                 }
//             }
//         }
//     Textile.prototype.revert = function () {
//         this.n.innerHTML = this.contentClone;
//     }
//     if (typeof window === "object" && typeof window.document === "object") {
//         window.Textile = window.T = Textile;
//     }
// })(window);
$(document).ready(function () {
    let underlineAppear = ele => {
        ele.children[0].children[1].style.transform = "translateX( 0% )"
    }
    let underlineDisappear = ele => {
        ele.children[0].children[1].style.transform = "translateX( -150% )"
    }
    let toggleFlag = 1;
    $('.desktopLogo').tilt({
        maxTilt: 35,
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
        scale: .9,      // 2 = 200%, 1.5 = 150%, etc..
        speed: 200,    // Speed of the enter/exit transition.
        transition: true,   // Set a transition on enter/exit.
        disableAxis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,   // If the tilt effect has to be reset on exit.
        glare: false,  // Enables glare effect
        maxGlare: 1
    });

    //Navigation
    $(".hamburger").click(function () {
        toggleFlag *= -1;
        $(this).toggleClass("is-active");
        $(".menu-overlay").toggleClass("overlay-toggle");
        if (toggleFlag == -1) {
            $(".menu-container").css("z-index", "1");
            setTimeout(() => {
                $(".menu-heading").toggleClass("heading-toggle")
            }, 300);
        } else {
            $(".menu-heading").toggleClass("heading-toggle");
            setTimeout(() => {
                $(".menu-container").css("z-index", "-1")
            }, 700);
        }
    });

    // var node = document.getElementById('animatePara');
    // var text = new T(node);

    // function random(min, max) {
    //     return (Math.random() * (max - min)) + min;
    // }

    // text.chars.map(function (v, i) {
    //     TweenMax.from(v, 1, {
    //         opacity: 0,
    //         x: random(-500, 500),
    //         y: random(-500, 500),
    //         z: random(-500, 500),
    //         scale: .1,
    //         delay: i * .02,
    //         yoyo: true
    //     });
    // });
})
