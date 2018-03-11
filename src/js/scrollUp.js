
$("#go-up").on("click", function() {
    $("body").velocity("scroll", { 
        duration: 1000,
        easing: "easeInBack"
    });
});