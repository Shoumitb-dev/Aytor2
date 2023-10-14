$(function(){
    // tooltip
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    // slick slider
    $('#banner').slick({
        arrows: "false",
        fade: true,
        dots: true,
        dotsClass: "bannerdots container",
    });
})