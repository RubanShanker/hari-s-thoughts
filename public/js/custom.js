function openDots () {
    var dot = document.getElementById ('openDots')
    dot.classList.toggle ('open-dots')
}
function openSearch () {
    var search = document.getElementById ('openSearch')
    search.classList.toggle ('search-open')
}
function openMenu () {
    var menu = document.getElementById ('openMenu')
    menu.classList.toggle ('menu-open')
    var times = document.getElementById ('node')
    times.classList.toggle ('fa-times')
}

function slide() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
}
