var width = $(document).width();
// document (ou windows) sélectionne l'ensemble de la page. Là, ce sera la largeur de la page.
var length = $(document).height();
console.log(length);
console.log(width);

$(document).keydown(function(e){
// The offset() method set or returns the offset coordinates for the selected elements, relative to the document.
  var left = $('.box').offset().left;
  var top = $('.box').offset().top;
    switch (e.which){
//L'instruction switch évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
//The event.which property returns which keyboard key or mouse button was pressed for the event.
    case 37:    //touche directionnelle de gauche
        if(left - 0 < 0){
// Si la valeur de la position horizontale est inférieure à zéro, alors je situe mon élément à la valeur width (largeur), donc son maximum (ce qui déplace mon carré à l'extrêmité droite)
// La valeur -10 prend en compte le dernier déplacement, qui est fixé à 10 pixels. Le width-100 prend en considération la largeur du carré, fixée à 100px.
          $('.box').offset({top:top, left:width-100});
        } else {
          $('.box').finish().animate({
//.finish() => Stop the currently-running animation, remove all queued animations, and complete all animations for the matched elements.
//.animate() => Perform a custom animation of a set of CSS properties.
            left: '-=10'
        })};
        break;
    case 38:    //touche directionnelle du haut
        if(top -0 < 0){
          $('.box').offset({top:length-100, left:left});
        } else {
        $('.box').finish().animate({
            top: '-=10'
        })};
break;
    case 38:    //touche directionnelle du haut
        if(top -10 < 0){
          $('.box').offset({top:length-100, left:left});
        } else {
        $('.box').finish().animate({
            top: '-=10'
        })};
        break;
    case 39:    //touche directionnelle de droite
        if(left +10 > width-100){
          $('.box').offset({top:top, left:0});
        } else {
        $('.box').finish().animate({
            left: '+=10'
        })};
        break;
// Le Break permet de sortir de la boucle
    case 40:    //touche directionnelle du bas
        if(top +10 > length-100){
          $('.box').offset({top:0, left:left});
        } else {
        $('.box').finish().animate({
            top: '+=10'
        })};
        break;
    }
});
