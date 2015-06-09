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
	
var basedatos=window.sqlitePlugin.openDatabase({name:"coloresBD.db",createFromLocation:1})
	
	cargarnombrejugador();
	function cargarnombrejugador ()
    {
	basedatos.transaction(function(ejecutar){
	var sql="SELECT NombreUsuario FROM usuario";
				
				
    ejecutar.executesql(sql, undefined, function(ejecutar, resultado){
	
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

