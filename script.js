$(document).ready(function(){
    $("#design-description").click(function(){
        $("#design-description").hide();
        $("#design-icon").show();
    })
    $("#design-icon").click(function(){
        $("#design-description").show();
        $("#design-icon").hide();
    })

    $("#development-description").click(function(){
        $("#development-description").hide();
        $("#development-icon").show();
    })
    $("#development-icon").click(function(){
        $("#development-description").show();
        $("#development-icon").hide();
    })

    $("#product-management-description").click(function(){
        $("#product-management-description").hide();
        $("#product-management-icon").show();
    })
    $("#product-management-icon").click(function(){
        $("#product-management-description").show();
        $("#product-management-icon").hide();
    })

    $("form").submit(function(event){
        event.preventDefault()
        const name=$("#name").val();
        alert(name + " we have received your message. Thank you for reaching out to us. ");
    })

    $("#project-black").hover(function() {
        $("#project-black .portfolio-description").toggleClass('visible');
    })

    $("#project-ontario").hover(function() {
        $("#project-ontario .portfolio-description").toggleClass('visible');
    })

    $("#project-orange").hover(function() {
        $("#project-orange .portfolio-description").toggleClass('visible');
    })

    $("#project-jim-carrey").hover(function() {
        $("#project-jim-carrey .portfolio-description").toggleClass('visible');
    })

    $("#project-elena").hover(function() {
        $("#project-elena .portfolio-description").toggleClass('visible');
    })

    $("#project-dashboard").hover(function() {
        $("#project-dashboard .portfolio-description").toggleClass('visible');
    })

    $("#project-burned").hover(function() {
        $("#project-burned .portfolio-description").toggleClass('visible');
    })

    $("#project-giraffe").hover(function() {
        $("#project-giraffe .portfolio-description").toggleClass('visible');
    })
})