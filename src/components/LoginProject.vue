<template> 
    <div class="fondo"> 
        <div class="container-form">
            <div>
                <img class="logo" src="@/assets/Logo.jpg" />
            </div>
            <div>
                <form>
                    <p class="Name">Ingrese su nombre de usuario</p>
                    <input class="form" type="text" placeholder="Nombre de Usuario" />
                    <p class="Name">Ingrese su contraseña</p>
                    <input class="form" type="password" placeholder="Contraseña" />
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
            <div class="links">
                <div>
                    <router-link to="/Register">Registrate</router-link>
                </div>
                <div>
                    <a href="#">Olvidé mi contraseña</a>
                </div>
            </div>                 
        </div>
    </div>
</template>

<script>
    export default {
		name: 'LoginProject',
	}

</script>

<style>
    .container-form{
        margin-top: 73px;
        width: 70%;
        background-color:antiquewhite;
        font-size: 17px;
        border-radius: 9px;
        margin-left: 15%;
    }
    
    .container-form:focus{
        outline: none;
        box-shadow: 3px 3px 10px #333;
        background: rgba(3,3,3,.18);
    }

    .logo{
        border-radius: 100%;
        width: 20%;
        margin-left: 40%;
    }   

    .Name{
        margin-left: 10%;
    }

    /* Inputs */
    .form{
        text-decoration: none;
        width: 75%;
        margin: 2% auto;
        color: #fff;
        line-height: 2;
        padding: 8px;
        border-radius: 6px;
        border: none;
        background: rgba(59, 59, 59, 0.19);
        -webkit-transition: all 2s ease-in-out;
        -moz-transition: all 2s ease-in-out;
        -o-transition: all 2s ease-in-out;
        transition: all 0.2s ease-in-out;
        margin-left: 10%;
    }

    /* Estilo sombra de contenedores */
    input:focus{
        outline: none;
        box-shadow: 3px 3px 10px rgb(171, 168, 168);
        background: rgba(3,3,3,.18);
    }

    /* código boton de ingreso */
    .login-button{        
        background-color: #09E8B2; 
        color: #353436;
        padding: 15px 32px;
        margin: 4px 2px;
        cursor: pointer;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 100px;
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        margin-left: 45%;
    }

    .login-button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }


    .checkbox-style{
        float: none;
        width: 70%;
        text-align: center;
        cursor: pointer;
        -webkit-appearance: none;
        padding: 5px;
        border-radius: 4px;
        margin-left: 15%;
    }
    .links{
        display: flex;
        justify-content:space-around;
    }

</style>