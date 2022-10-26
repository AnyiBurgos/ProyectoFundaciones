<template>  
    <div class="overlay">
        <div class="container-form">
            <div id="ejemplo" class="modal">
                <div class="button-close">
                <button id="close" class="cerrar">❎</button>
                </div> 
            </div> 
            <div ><img class="logo-login" src="../assets/Logo.jpg" />
            </div>
            <div>
                <form class="formulario">
                    <p>Ingrese su nombre de usuario</p>
                    <input class="form1" type="text" placeholder="Nombre de Usuario" />
                    <p>Ingrese su contraseña</p>
                    <input class="form2" type="password" placeholder="Contraseña" />
                </form>
            </div>
            <div class="checkbox-style">
                    <label id="check">
                        <input id="check1" type="checkbox"> Recordar mis datos
                    </label>
            </div>
            <div>
                <button class="login-button">Ingresar</button>
            </div>
            <div>
                <div class="registro">
                    <a v-on:click="Register">Registrarse</a>
                </div>
                <div>
                    <a class="olvido-pass" href="#">Olvidé mi contraseña</a>
                </div>
            </div>                 
        </div>   
    </div> 
    <div id="RegisterBut">
        <RegisterButton/>
    </div>
</template>

<script>
import RegisterButton from './RegisterButton.vue';
    export default {
		name: 'LoginProject',
        components: {
            RegisterButton
        },
        methods: {
            Register: function(){
                document.getElementById('RegisterBut')
            }
        }
	}

</script>

<style>

.overlay{
    z-index: 999;
    position: absolute;
}
    .container-form{
        display: flex;
        background-color: #fff;
        margin-top: 15%;
        width: 70%;
        align-items: center;
        margin: auto;
        font-size: 17px;
        border-color: #8B07EC;
        border-radius: 3px;
        position: absolute;
        top: 20%;
        bottom: 0;
        left: 5%;
        right: 0;
    }

    .button-close{
        float: right;
        width: 18%;
    }

    .logo-login{
        align-items: stretch;
        display: inline;
        margin:0%;
        border-radius: 100%;
        width: 20%;
        height: 20%;
        align-items: center;
    }

    .registro{
        float: left;
    }

    .olvido-pass{
        float: right;
    }

    /* Inputs */
    input{
        font-family: 'Open Sans Condensed', sans-serif;
        text-decoration: none;
        position: center;
        width: 100%;
        display: block;
        margin: 9px auto;
        font-size: 17px;
        color: #fff;
        line-height: 2;
        padding: 8px;
        border-radius: 6px;
        border: none;
        background: rgba(3,3,3,.1);
        -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out;
        transition: all 0.2s ease-in-out;
    }

    /* Estilo sombra de contenedores */
    input:focus{
        outline: none;
        box-shadow: 3px 3px 10px #333;
        background: rgba(3,3,3,.18);
    }

    /* código boton de ingreso */
    .login-button{        
        font-family: 'Open Sans Condensed', sans-serif;
        background-color: #09E8B2; 
        color: #353436;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: flex;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 100px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        align-items: center;
    }

    .login-button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }


    .checkbox-style{
        font-family: 'Open Sans Condensed', sans-serif;
        float: none;
        width: 20%;
        text-align: center;
        position: relative;
        cursor: pointer;
        -webkit-appearance: none;
        padding: 5px;
        border-radius: 4px;
        width: 16px;
        display: flex;
    }

</style>