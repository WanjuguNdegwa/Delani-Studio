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
})