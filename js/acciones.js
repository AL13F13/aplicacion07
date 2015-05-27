// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#btnjugar').on('tap',function(){
		var pantalla =$.mobile.getScreenHeight();
		var encabezado =$('.ui-header').outerHeight();
		var pie =$('.ui-footer').outerHeight();
		var contenido =$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie )/2;
		alert ('pantalla ' + pantalla);
		alert ('encabezado ' + encabezado);
		alert ('pie' + pie);
		alert ('contenido' + contenido);
		
		$('.cuadro').height(alto);
		
		}); //cuadro
		
		
		$ ('.cuadro').on('vmousedown', function (){
			$('#pantalla').append(quien($(this).attr('id')));
		$(this).addClass('pulsado');
			}); //btnjugar
			
			$ ('.cuadro').on('vmouseup', function (){
			$(this).removeClass('pulsado');
			}); //btnjugar
			
			function quien (q)
			{
				return q.substring (1);
				
			}
			
			
			
			
		
		
	}); 
});

