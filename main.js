function opensearch(){
    var searchBar=document.getElementById("searchbar");
    searchBar.focus().click();
}
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});
function darkmode() {
    document.querySelector("body").classList.toggle("dark");
 }


 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
})