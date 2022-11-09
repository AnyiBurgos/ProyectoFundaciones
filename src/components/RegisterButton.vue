<template>
    <div class="container-form">
        <div ><img class="logo" src="../assets/Logo.jpg" />
        </div>
        <div>
            <form class="formulario">
                <p class="dates">NIT de la fundación</p>
                <input class="form" type="text" placeholder="Nit" />
                <p class="dates">Razón social</p>
                <input class="form" type="text" placeholder="Nombre Fundación" />
                <p class="dates">Correo electrónico</p>
                <input class="form" type="email" placeholder="Correo Electrónico" />
                <p class="dates">Contraseña</p>
                <input class="form" type="password" placeholder="Contraseña" />
                <p class="dates">Confirmar Contraseña</p>
                <input class="form" type="password" placeholder="Confírme su contraseña" />
                <p class="dates1">La Contraseña debe tener al menos 8 caracteres</p>
            </form>
        </div>
        <div>
            <button class="register-button">Regístrate</button>
        </div>
        <div>
            <div class="Regreso-login">
                <router-link to="/Login"><p>¿Ya eres miembro?</p> 
                    Inicia tu Sesión</router-link>
            </div>
        </div>                 
    </div> 
</template>

<script>
    export default {
		name: 'RegisterButton',
		}
</script>

<style>
    .dates{
        margin-left: 10%;
    }
    .dates1{
        margin-left: 10%;
        font-size: small;
    }
    .register-button{        
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
        margin-left: 43%;
    }

    .register-button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
    .Regreso-login{
        justify-content: center;
        display: flex;
        text-align: center;
    }

</style>