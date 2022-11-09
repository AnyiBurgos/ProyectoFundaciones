<template>
  <div class="home">
    <div class="description">
      <h1 class="title">Animal Lover Traces</h1><br>
      <p>
        Se tiene como objetivo dar a conocer las diferentes
        fundaciones de Caldas que estén enfocadas a la protección animal. Aquí
        podrás apoyar, conocer y estar más cerca de las diferentes procesos y
        actividades de las fundaciones, ya sea en la rehabilitación de animales o
        en actividades de concientización o recolección de recursos para los
        peluditos.
      </p>
    </div>      
    <div class="contenedor">
      <div class="contenedor-cards">
        <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <img src="@/assets/Home.jpg"/>
          </div>
        </div>
        <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <img
              src="@/assets/Home1.jpg"/>
          </div>
        </div>
        <div class="contenedor-card-item">
          <div class="contenedor-card-item-wrapper">
            <img
              src="@/assets/Home2.jpg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		name: 'InicioProject',
		}
</script>

<style>

.home{
  z-index: -1;
  background-color: antiquewhite;
  margin-top: 73px;
}
.title{
  text-align: center;
  height: 100%;
  background-size: 100% 100%;  
  font-family: 'Open Sans Condensed', cursive;
  font-size: 80px;
  color: #8B07EC;
  text-align: center;
  line-height: 100px;
  text-shadow: 0 5px 0 #09e8b067,
               0 10px 10px rgba(0, 0, 0, .6);
}

.description{
  position: sticky;
  width: 70%;
  text-align: justify;
  align-items: center;
  align-content: center;
  margin-left: 16%;
  line-height: 30px;
}

.contenedor {
  position: static;
  width: 100%;
  margin: 0 auto;
  transition: all 0.3s ease-out;
  margin-top: 50px;
  margin-bottom: 20px;
  display: block;
}

.contenedor-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.contenedor-cards .contenedor-card-item {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  width: 25%;
  margin: 1%;
  -webkit-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;
  border-radius: 5px;
  cursor: help;
}

.contenedor-card-item-wrapper {
  overflow: hidden;
  position: relative;
  background: #3e2723;
  border-radius: 5px;
}

.contenedor-card-item img {
  max-width: 100%;
  position: relative;
  top: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius: 5px;
}

.contenedor-card-item .contenedor-info {
  position: absolute;
  width: 100%;
  height: 70px;
  bottom: -70px;
  -webkit-transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}


.contenedor-card-item:hover .contenedor-info {
  bottom: 0;
}

.contenedor-card-item:hover img {
  top: -30px;
  -webkit-transform: rotate(-5deg) scale(2);
  -ms-transform: rotate(-5deg) scale(2);
  -o-transform: rotate(-5deg) scale(2);
  transform: rotate(-5deg) scale(2);
}

@media screen and (max-width: 900px) {
  .contenedor-card-item:hover img {
    top: -30px;
    -webkit-transform: rotate(-5deg) scale(1.3);
    -ms-transform: rotate(-5deg) scale(1.3);
    -o-transform: rotate(-5deg) scale(1.3);
    transform: rotate(-5deg) scale(1.3);
  }

  .contenedor-card-item .contenedor-info {
    bottom: 0;
  }
}

@media screen and (max-width: 767px) {
  .contenedor {
    width: 95%;
  }

  .contenedor-cards .contenedor-card-item {
    width: 48%;
    margin: 1%;
  }
}

@media screen and (max-width: 550px) {
  .contenedor-cards .contenedor-card-item {
    width: 60%;
    margin: 10px auto;
  }
}

@media screen and (max-width: 480px) {
  .contenedor {
    width: 90%;
  }

  .contenedor-cards .contenedor-card-item {
    width: 90%;
  }
}

@media screen and (max-width: 400px) {
  .contenedor {
    width: 100%;
  }
}
</style>
