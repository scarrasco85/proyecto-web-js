'use strict'

$(document).ready(function(){

	//Cargamos el slider sólo en el index.html
	if(window.location.href.indexOf('index') > -1){

		//Slider (Plugin bxSlider)
		$('.bxslider').bxSlider({
		    mode: 'fade',
		    captions: true,
		    slideWidth: 1200
	  	});
	}
	

  	//************************************ Cargar Posts ***********************************
  	//Cargamos post sólo en el index.html
  	if(window.location.href.indexOf('index') > -1){
  		//Creamos JSON con los artículos
		let posts = [
	  		{
		  		 title: 'Prueba de Artículo 1',
		  		 date: 'Publicado el día ' + moment().day() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
		  		 content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque massa, elementum ut erat eu, auctor consequat nibh. Praesent lectus dolor, auctor a malesuada at, porta ac quam. Mauris bibendum, magna vitae tincidunt condimentum, leo augue sodales neque, eget rhoncus ipsum urna eget nibh. Cras sed volutpat nunc. Vestibulum lacinia nunc nisl, non vestibulum purus molestie sed. Curabitur sodales sit amet nisi et venenatis. In ipsum leo, blandit pulvinar sodales ac, ultrices ac elit. Sed rutrum leo ligula, ac rhoncus sapien congue eget. Sed blandit sodales scelerisque. In convallis erat et gravida iaculis. Cras rhoncus mattis risus, vitae sagittis arcu lobortis vel. Aenean porta odio eu sapien mattis, nec pretium erat convallis. Ut condimentum in felis vitae vestibulum.'
	  		},
	  		{
		  		 title: 'Prueba de Artículo 2',
		  		 date: 'Publicado el día ' + moment().day() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
		  		 content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque massa, elementum ut erat eu, auctor consequat nibh. Praesent lectus dolor, auctor a malesuada at, porta ac quam. Mauris bibendum, magna vitae tincidunt condimentum, leo augue sodales neque, eget rhoncus ipsum urna eget nibh. Cras sed volutpat nunc. Vestibulum lacinia nunc nisl, non vestibulum purus molestie sed. Curabitur sodales sit amet nisi et venenatis. In ipsum leo, blandit pulvinar sodales ac, ultrices ac elit. Sed rutrum leo ligula, ac rhoncus sapien congue eget. Sed blandit sodales scelerisque. In convallis erat et gravida iaculis. Cras rhoncus mattis risus, vitae sagittis arcu lobortis vel. Aenean porta odio eu sapien mattis, nec pretium erat convallis. Ut condimentum in felis vitae vestibulum.'
	  		},
	  		{
		  		 title: 'Prueba de Artículo 3',
		  		 date: 'Publicado el día ' + moment().day() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
		  		 content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque massa, elementum ut erat eu, auctor consequat nibh. Praesent lectus dolor, auctor a malesuada at, porta ac quam. Mauris bibendum, magna vitae tincidunt condimentum, leo augue sodales neque, eget rhoncus ipsum urna eget nibh. Cras sed volutpat nunc. Vestibulum lacinia nunc nisl, non vestibulum purus molestie sed. Curabitur sodales sit amet nisi et venenatis. In ipsum leo, blandit pulvinar sodales ac, ultrices ac elit. Sed rutrum leo ligula, ac rhoncus sapien congue eget. Sed blandit sodales scelerisque. In convallis erat et gravida iaculis. Cras rhoncus mattis risus, vitae sagittis arcu lobortis vel. Aenean porta odio eu sapien mattis, nec pretium erat convallis. Ut condimentum in felis vitae vestibulum.'
	  		},
	  		{
		  		 title: 'Prueba de Artículo 4',
		  		 date: 'Publicado el día ' + moment().day() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
		  		 content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque massa, elementum ut erat eu, auctor consequat nibh. Praesent lectus dolor, auctor a malesuada at, porta ac quam. Mauris bibendum, magna vitae tincidunt condimentum, leo augue sodales neque, eget rhoncus ipsum urna eget nibh. Cras sed volutpat nunc. Vestibulum lacinia nunc nisl, non vestibulum purus molestie sed. Curabitur sodales sit amet nisi et venenatis. In ipsum leo, blandit pulvinar sodales ac, ultrices ac elit. Sed rutrum leo ligula, ac rhoncus sapien congue eget. Sed blandit sodales scelerisque. In convallis erat et gravida iaculis. Cras rhoncus mattis risus, vitae sagittis arcu lobortis vel. Aenean porta odio eu sapien mattis, nec pretium erat convallis. Ut condimentum in felis vitae vestibulum.'
	  		},
	  		{
		  		 title: 'Prueba de Artículo 5',
		  		 date: 'Publicado el día ' + moment().day() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
		  		 content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc neque massa, elementum ut erat eu, auctor consequat nibh. Praesent lectus dolor, auctor a malesuada at, porta ac quam. Mauris bibendum, magna vitae tincidunt condimentum, leo augue sodales neque, eget rhoncus ipsum urna eget nibh. Cras sed volutpat nunc. Vestibulum lacinia nunc nisl, non vestibulum purus molestie sed. Curabitur sodales sit amet nisi et venenatis. In ipsum leo, blandit pulvinar sodales ac, ultrices ac elit. Sed rutrum leo ligula, ac rhoncus sapien congue eget. Sed blandit sodales scelerisque. In convallis erat et gravida iaculis. Cras rhoncus mattis risus, vitae sagittis arcu lobortis vel. Aenean porta odio eu sapien mattis, nec pretium erat convallis. Ut condimentum in felis vitae vestibulum.'
	  		}

	  	];

	  	//Recorremos el array de objetos JSON 'posts' y lo añadimos al div
	  	posts.forEach((item, indice) => {

	  		let post = `

	                    <article class="post">
							<h2>${item.title}</h2>
							<span class="date">${item.date}</span>
							<p>
								${item.content}
							</p>
							<a href="#" class="button-more">Leer más</a>						
						</article>

	  		`;
	  		//Añadimos la plantilla del post actual al div id="posts"
	  		$('#posts').append(post);
	  	});
  }
 
  	

  	//************************************ SELECTOR DE TEMAS ***********************************
  	
  	let theme = $('#theme');
  	//Capturamos el click del botón theme-green y cambiamos la hoja de estilo #theme a green.css
  	$('#theme-green').click(function(){
  		theme.attr('href', 'css/green.css');
  		//Si existe el localStorage guardamos el tema activo
  		if(typeof(Storage) != 'undefined'){
			localStorage.setItem('theme', 'css/green.css');
		}
  	});	

  	//Capturamos el click del botón theme-red y cambiamos la hoja de estilo #theme a red.css
  	$('#theme-red').click(function(){
  		theme.attr('href', 'css/red.css');

  		//Si existe el localStorage guardamos el tema activo
  		if(typeof(Storage) != 'undefined'){
			localStorage.setItem('theme', 'css/red.css');
		}
  	});

  	//Capturamos el click del botón theme-blue y cambiamos la hoja de estilo #theme a blue.css
  	$('#theme-blue').click(function(){
  		theme.attr('href', 'css/blue.css');

  		//Si existe el localStorage guardamos el tema activo
  		if(typeof(Storage) != 'undefined'){
			localStorage.setItem('theme', 'css/blue.css');
		}
  	});

  	//Comprobamos el tema activo del localStorage para mantenerlo en caso de recargar la página
  	if(typeof(Storage) != 'undefined'){
			var themeActive = localStorage.getItem('theme');
			if(themeActive == 'css/green.css'){
				theme.attr('href', 'css/green.css');
			}else if(themeActive == 'css/red.css'){
				theme.attr('href', 'css/red.css');
			}else if(themeActive == 'css/blue.css'){
				theme.attr('href', 'css/blue.css');
			}
	}

	//***************************** SCROLL IR PRINCIPIO PÁGINA ***********************************
	//Capturamos click en el enlace con la clase subir
	$('.subir').click(function(e){
		//evitamos que el enlace haga su función de redirigir
		e.preventDefault();

		//Con el método .animate() hacemos un scrollTop hasta la posición 0 con una duración de 500ms
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		console.log("Funciona?");
		return false;
	});

	//************************************ LOGIN FALSO **************************************
	//Creamos un sistema de login de usuario en el localStorage
	//Llamamos a la función controlarLogin()pasandole lo que devuelva existeSesion(true or false)

	controlarLogin(existeSesion());
	
	//Devuelve true si existe sesión en el LocalStorage y false en caso contrario
	function existeSesion(){
		
		let name_user = localStorage.getItem('name_user');
		
		if(name_user != '' && name_user != null && name_user != "undefined"){
			
			return true;

		}else{
			
			return false;
		}
	}

	//Si la sesión existe muestra los datos del usuario con un enlace para cerrar sesión en el
	//div #datos_login. Si no existe oculta el div #datos_login y muestra el div #login que contiene
	//el formulario para logear
	function controlarLogin(existeSesion){

		if(existeSesion == true){
			$('#login').hide();
			
		//	$('#datos_login').html('<hr><br><strong>Bienvenido, ' + localStorage.getItem('name_user') + '<a href="" id="a_logout" class="logout">Cerrar sesión</a></strong>');
		$('#datos_login').html('<hr><br><strong>Bienvenido, ' + localStorage.getItem('name_user'));
		$('#div_logout').html('<a href="" id="a_logout" class="logout">Cerrar sesión</a></strong>');
			$('#datos_login').show();
			$('#div_logout').show();

		}else{
			$('#datos_login').hide();
			$('#div_logout').hide();
			$('#login').show();

		}
	}

	
	//Capturamos cuando se envía el formulario y guardamos los datos en el localStorage
	$('#form_login').submit(function(){
	
		localStorage.setItem('name_user',  $('#form_name').val());
		localStorage.setItem('email_user',  $('#form_email').val());
		
		controlarLogin(true);
		
	});
	
	//Capturamos click del enlace para Cerrar Sesión
	$('#div_logout').click(function(){
		//Eliminamos los datos de usuario del localStorage
		localStorage.removeItem("name_user");
		localStorage.removeItem("email_user");
		
		//Y llamamos a controlarLogin() indicandole que no hay sesión activa con false
		controlarLogin(false);
		location.reload();

	});	
	
	//*********************************** ACORDEÓN about.html *********************************

	if(window.location.href.indexOf('about') > -1){

		$('#acordeon').accordion();
	}

	//*********************************** Reloj reloj.html *********************************

	if(window.location.href.indexOf('reloj') > -1){
		//Reloj con libreria moment: https://cdnjs.com/libraries/moment.js/
		setInterval(function(){
			var reloj = moment().format('hh:mm:ss');
			//$('#reloj').append(reloj);
			$('#reloj').html(reloj);
		}, 1000);
		
	}

	//**************** Validación formulario contacto con plugin jQuery Form Validation *********************************
	//Aqui tenemos los tipos de validación: http://www.formvalidator.net/#default-validators
	//Aquí tenemos muchas más opciones de configuración: http://www.formvalidator.net/#configuration
	//Se carga si encuentra contact en la url
	if(window.location.href.indexOf('contact') > -1){
		  
		  //Usamos .datepicker() para crear un calendario en los campos input con name="date"
		  $('form input[name="date"]').datepicker({
		  		dateFormat: 'dd-mm-yy'
		  });

		  //Validar con plugin jQuery Form Validation
		  $.validate({
		    lang: 'es',
		    //Con esta propiedad mandamos el mensaje de error al top cuando se da a enviar el formulario
		    errorMessagePosition: 'top',
		    scrollToTopOnError: true
		  });
	}	
});



					

