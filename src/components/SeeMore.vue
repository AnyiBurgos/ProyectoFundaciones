<template>
	<div class="see-more">
		<div class="Foundation">
			<div>
				<img class="logo-fund" src="@/assets/LogoFundacion.jpeg">
			</div>
			<div class="description-fund">
				<h1>Fundación Animalistas de Corazón</h1>
				<p>Pensilvania, Caldas</p>
				<p>
					La Fundación Animalistas de Corazón busca crear conciencia 
					en la tenencia responsable de los animales mediante 3 
					factores importantes:
					<ul>
						<li>Educación</li>
						<li>Adopción</li>
						<li>Eterilización</li>
					</ul>
				</p>
			</div>
		</div>
		<div class="general">
			<div class="activities">
				<div class="slide">
					<div class="slide-inner">
						<input class="slide-open" type="radio" id="slide-1" 
							name="slide" aria-hidden="true" hidden="" checked="checked">
						<div class="slide-item">
							<img src="@/assets/Actividad1.jpeg">
						</div>
						<input class="slide-open" type="radio" id="slide-2" 
							name="slide" aria-hidden="true" hidden="">
						<div class="slide-item">
							<img src="@/assets/Actividad2.jpeg">
						</div>
						<input class="slide-open" type="radio" id="slide-3" 
							name="slide" aria-hidden="true" hidden="">
						<div class="slide-item">
							<img src="@/assets/Actividad3.jpeg">
						</div>
						<label for="slide-3" class="slide-control prev control-1">‹</label>
						<label for="slide-2" class="slide-control next control-1">›</label>
						<label for="slide-1" class="slide-control prev control-2">‹</label>
						<label for="slide-3" class="slide-control next control-2">›</label>
						<label for="slide-2" class="slide-control prev control-3">‹</label>
						<label for="slide-1" class="slide-control next control-3">›</label>
						<ol class="slide-indicador">
							<li>
								<label for="slide-1" class="slide-circulo">•</label>
							</li>
							<li>
								<label for="slide-2" class="slide-circulo">•</label>
							</li>
							<li>
								<label for="slide-3" class="slide-circulo">•</label>
							</li>
						</ol>
					</div>
				</div>
				<div class="des-activi">
					<ul type="number">
						<li>Jornadas de esterilización</li>
						<li>Jornadas de educación con estudiantes de diferentes instituciones Educativas del municipio de Pensilvania</li>
						<li>Ventas de comestibles y rifas para solventar las tantas necesidades del día a día</li>
					</ul>
				</div>
			</div>
			<div class="donations">
				<h1>Como puedo apoyar o hacer donaciones</h1>
				<p>Lorem ipsum dolor sit amet consectetur 
					adipisicing elit. Velit a adipisci harum 
					ipsum esse maiores dolor veniam tempore error 
					modi porro doloremque eveniet sint eligendi voluptates, 
					animi vero mollitia hic!</p>
			</div>
			<div class="adoptions">
				<h1>En Adopción</h1>
				<div class="blog-card">
					<div class="meta">
						<div class="photo" style="background-image">
							<img src="@/assets/Negrita.jpeg">
						</div>
					</div>
					<div class="description">
						<h1>Negrita</h1>
						<p> llegó hace 7 años,fue víctima de un ser cruel quien 
							machetio su cabecita.Gracias a todos los cuidados 
							y amor que tuvimos con ella,logramos recuperarla 
							.Aún espera por un hogar</p>
					</div>
				</div>
				<div class="blog-card">
					<div class="meta">
						<div class="photo" style="background-image">
							<img src="@/assets/Ramon.jpeg">
						</div>
					</div>
					<div class="description">
						<h1>Ramón</h1>
						<p> Tiene 9 meses ya está esterilizado.
							Llegó del Corregimiento de Arboleda y fue rescatado 
							ya que su amo lo maltrataba y lo tenía en unas 
							terribles condiciones. Hoy en día busca un hogar donde 
							le den todo lo que merece</p>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
    export default {
		name: 'SeeMore',
		}
			
</script>

<style>

/*Estilos div fundacion*/
	.see-more{
		background-color: antiquewhite;
	}
	.Foundation{
		display: flex;
		justify-content: space-around;
		margin-top: 73px;
	}
	.logo-fund{
			justify-content:space-between;
			border-radius: 100%;
			width: 20%;
	}
	
	.description-fund{
		line-height: 30px;
	}


	.description-fund h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.7rem;
    }

	.general{
		display: flex;
		justify-content: space-around;
	}

/*Estilos div Activities*/
	.activities{ 
		border: 4px solid #8B07EC;
		border-radius: 15px;
		width: 30%;
		box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.4);
	}

	.slide {
	position: relative;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
	margin-top: 26px;
	}
	.slide-inner {
	position: relative;
	overflow: hidden;
	width: 100%;
	height: calc( 300px + 3em);
	}
	.slide-open:checked + .slide-item {
	position: static;
	opacity: 100;
	}
	.slide-item {
	position: absolute;
	opacity: 0;
	-webkit-transition: opacity 0.6s ease-out;
	transition: opacity 0.6s ease-out;
	}
	.slide-item img {
	display: flex;
	width: min-content;
	max-width: 100%;
	}
	.slide-control {
		background: rgba(0, 0, 0, 0.28);
		border-radius: 50%;
		color: #fff;
		cursor: pointer;
		display: none;
		font-size: 40px;
		height: 40px;
		line-height: 35px;
		position: absolute;
		top: 50%;
		-webkit-transform: translate(0, -50%);
		cursor: pointer;
		-ms-transform: translate(0, -50%);
		transform: translate(0, -50%);
		text-align: center;
		width: 40px;
		z-index: 10;
	}
	.slide-control.prev {
		left: 2%;
	}
	.slide-control.next {
		right: 2%;
	}
	.slide-control:hover {
		background: rgba(0, 0, 0, 0.8);
		color: #aaaaaa;
	}
	#slide-1:checked ~ .control-1,
	#slide-2:checked ~ .control-2,
	#slide-3:checked ~ .control-3 {
		display: block;
	}
	.slide-indicador {
	list-style: none;
	margin: 0;
	padding: 0;
	position: absolute;
	bottom: 2%;
	left: 0;
	right: 0;
	text-align: center;
	z-index: 10;
	}
	.slide-indicador li {
	display: inline-block;
	margin: 0 5px;
	}
	.slide-circulo {
	color: #828282;
	cursor: pointer;
	display: block;
	font-size: 35px;
	}
	.slide-circulo:hover {
	color: #aaaaaa;
	}
	#slide-1:checked ~ .control-1 ~ .slide-indicador 
	li:nth-child(1) .slide-circulo,
	#slide-2:checked ~ .control-2 ~ .slide-indicador 
	li:nth-child(2) .slide-circulo,
	#slide-3:checked ~ .control-3 ~ .slide-indicador 
	li:nth-child(3) .slide-circulo {
	color: #8B07EC;
	}

	.des-activi{
		line-height: 30px;
	}

/*Estilos div Donations*/
	.donations{
		border: 4px solid #8B07EC;
		border-radius: 15px;
		width: 30%;
		line-height: 25px;
		box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.4);
	}

/*Estilos div adoptions*/
	.adoptions{
		border: 4px solid #8B07EC;
		border-radius: 15px;
		width: 30%;
		box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.4);
	}


</style>