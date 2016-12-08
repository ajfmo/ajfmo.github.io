/*Script para el efecto de transicion suave cuando hacemos click en un enlace a la misma pagina*/
$('a[href*="#"]:not([href="#"])').click(function () {
	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
			return false;
		}
	}
}); //Fin de script de transicion

//La manito animada
function hand() {
	var a;
	a = document.getElementById("div1");
	a.innerHTML = "";
	setTimeout(function () {
		a.innerHTML = "";
	}, 500);
	setTimeout(function () {
		a.innerHTML = "";
	}, 1000);
}
hand();
setInterval(hand, 1500);
//fin de la manito

/* Script para Masonry */
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});