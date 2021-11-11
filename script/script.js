

var totalQuantity = 0;

$(".button-panier").click(function(){
totalQuantity += 1;
console.log(totalQuantity);
sessionStorage.setItem('value',totalQuantity);
});

$(".quantity").html(sessionStorage.getItem('value'));

$(".total-basket").html(sessionStorage.getItem('value')*15);
/*

*/
$("#remainder").html(99-sessionStorage.getItem('value'));

$("#livraison-btn").click(function(){
$("#livraison-status").html("Validé");
});
