//HOMEPAGE //
//cliquer sur les article à la une ouvre la page article
$(".article-h").click( function(){
    window.open('articles');
});
//FIN HOMEPAGE//

//FORM CONTACT
//formulaire de contact show
$(".form-contact").hide();
$("#email_span").click(function() {
    $(".form-contact").show();
});

//envoi
function ValidateEmail(email) {
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return expr.test(email);
};
//lorsque l'envoi est validé affiche un message
$(".btn-envoi").click(function() {
    if (!ValidateEmail($("#email").val())) {
       //
        $("#email").css("border-color","red");
    }
    else {
        $(".form-contact").replaceWith("<p>Votre message a été envoyé.</p>");
    }
});
//FIN FORM CONTACT

//ARTICLES
//au click changement class et move dans div
$(".articleMove").click( function() {
    //si l'article est déjà en principale
    if ( $(this).hasClass( "articlePrincipale")){
       $(this).removeClass("articlePrincipale");
       $(".articleblock").append(this);
    } else {
        var bouge = $(".articlePrincipale");
        $(".articleblock").append(bouge);
        bouge.removeClass("articlePrincipale");
        $(this).addClass("articlePrincipale");
        $('.articleP').append(this);
    }
});
//FIN ARTICLES

//ADMIN SLIDER
//message validation insertion
/*
$("form").submit(function(){
    $("#form").append('<p>L\'image a été ajouté.</p>')
});
*/
//afficher images sliders
$(".form-slider").hide();
$(".ferm").hide();
$(".btn-formslider").click(function(){
    $(".form-slider").show();
    $(".btn-formslider").hide();
    $(".ferm").show();
});
//fermer la div
$(".ferm").click(function(){
    $(".form-slider").hide();
    $(".btn-formslider").show();
    $(".ferm").hide();
});
//FIN SLIDER
//FIN ADMIN

//RESPONSIVE
function resizePage()
{
    //inferieur à 750px
    var Largeur = $(window).width();
    if(Largeur < 780) {
        $('.resp').show();
        $('.navbar-default').hide();
        $('.navbar_admin').hide();

        //menu hamburger
        $('.hamenu').hide();
        $('.cross').hide()

        $('.ham').click(function() {
            $('.hamenu').show();
            $('.ham').hide();
            $('.cross').show()
        })

        $('.cross').click(function() {
            $('.hamenu').hide();
            $('.ham').show();
            $('.cross').hide()
        })

    }else{
        $('.resp').hide();
        $('.navbar-default').show();
        $('.navbar_admin').show();
    }
};

// Appel de la fonction
$(window).resize(resizePage);
resizePage();

// CAROUSEL OPTION

$('.carousel').carousel({
    interval: 5000,
    pause: null
})