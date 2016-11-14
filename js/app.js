var cargarPagina = function() {
	var text = $(".txt").text();
	var length = text.length;
	var timeOut;
	var character = 0;
	
	(function typeWriter() { 
    	timeOut = setTimeout(function() {
        	character++;
        	var type = text.substring(0, character);
        	$(".txt").text(type);
        	typeWriter();
        	if (character == length) {
            	clearTimeout(timeOut);
        	}
    	}, 100);
	}());
};


$(document).ready(cargarPagina);
