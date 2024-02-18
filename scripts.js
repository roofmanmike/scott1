
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {

        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})
function howFeel() {
    
    var x = document.getElementById("in1").value;
    
    // $("body").css("background-color", "yellow");
    if (x==1) {
        alert("Initiating 1st protocol");
    } else {
        if (x==2) {
            alert("Initiating 2nd protocol")
        } else {
            if (x==3) {
                    $("body").css("background-color", "blue");
            } else {
                if (x==4) {
                        $("body").css("background-color", "darkGreen");
                } else {
                    if (x==5) {
                            $("body").css("background-color", "red");
                    } else {
                        if (x==6) {
                            $("#ch1").text(x);
                        } else {
                            if (x==7) {
                                    $("body").css("background-color", "orange");
                            } else {
                                if (x==8) {
                                        $("body").css("background-color", "gold");
                                } else {
                                    if (x==9) {
                                            $("body").css("background-color", "purple");
                                    } else {
                                        if (x==10) {
                                                $("body").css("background-color", "turquoise");
                                        } else {
                                            
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}