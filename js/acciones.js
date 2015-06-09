// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	$('#btnconfigurar').on('tap',function(){
		$('#txtnombre').val($('#jugador').text());
		});
		
		$('#btnguardar').on ('tap',function(){
			var nuevonombre =$('#txtnombre').val();
			basedatos.transaction(function(consulta){
			consulta.executeSql("UPDATE Usuario SET NombreUsuario =? WHERE ClaveUsuario='1';",[nuevonombre]);
			
			});
			cargarnombrejugador();
			});
	
var basedatos= window.sqlitePlugin.openDatabase({name: "coloresBD.db",createFromLocation:1})
	
	cargarnombrejugador();
	function cargarnombrejugador ()
    {
	    basedatos.transaction(function(ejecutar){
	var sql="SELECT NombreUsuario FROM Usuario";
				
				
    ejecutar.executeSql(sql, undefined, function(ejecutar,resultado){
	
	var datosjugador=resultado.rows.item(0);
	$('#jugador').text(datosjugador.NombreUsuario);
			});
			});
			}
	
	
	
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.pm3',function(){},function(msg){ alert ("error" + msg);});
	audio.preloadFX('B2','audio/D.pm3',function(){},function(msg){ alert ("error" + msg);});
	audio.preloadFX('B3','audio/E.pm3',function(){},function(msg){ alert ("error" + msg);});
	audio.preloadFX('B4','audio/F.pm3',function(){},function(msg){ alert ("error" + msg);});
	
	
	$('#btnjugar').on('tap',function(){
		var pantalla =$.mobile.getScreenHeight();
		alert ('pantalla ' + pantalla);
		var encabezado =$('.ui-header').outerHeight();
		alert ('encabezado ' + encabezado);
		var pie =$('.ui-footer').outerHeight();
		alert ('pie' + pie);
		var contenido =$('.ui-content').outerHeight();
		alert ('contenido' + contenido);
		var alto=(pantalla - encabezado - pie )/2;
			
		
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


