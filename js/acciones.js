// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.pm3',function(){},function(msg){ alert ("error" + msg);});
	audio.preloadFX('B2','audio/D.pm3',function(){},function(msg){ alert ("error" + msg);});
	audio.preloadFX('B3','audio/E.pm3',function(){},function(msg){ alert ("error" + msg);});
	audio.preloadFX('B4','audio/F.pm3',function(){},function(msg){ alert ("error" + msg);});
	
	
	$('#btnjugar').on('tap',function(){
		var pantalla =$.mobile.getScreenHeight();
		var encabezado =$('.ui-header').outerHeight();
		var pie =$('.ui-footer').outerHeight();
		var contenido =$('.ui-content').outerHeight();
		var alto=(pantalla - encabezado - pie )/2;
		//alert ('pantalla ' + pantalla);
		//alert ('encabezado ' + encabezado);
		//alert ('pie' + pie);
		//alert ('contenido' + contenido);
		
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
				audio.play(q);
				return q.substring (1);
				
			}
			
			
			
}); 
});

