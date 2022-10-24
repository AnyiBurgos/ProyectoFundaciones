<template>
    <div class="container-form">
        <div ><img class="logo-login" src="../assets/Logo.jpg" />
        </div>
        <div>
            <form class="formulario">
                <p>NIT de la fundación</p>
                <input class="form1" type="text" placeholder="Nit" />
                <p>Razón social</p>
                <input class="form2" type="text" placeholder="Nombre Fundación" />
                <p>Correo electrónico</p>
                <input class="form1" type="email" placeholder="Correo Electrónico" />
                <p>Contraseña</p>
                <input class="form2" type="password" placeholder="Contraseña" />
                <p>Confirmar Contraseña</p>
                <input class="form1" type="password" placeholder="Confírme su contraseña" />
                <p>La Contraseña debe tener al menos 8 caracteres</p>
            </form>
        </div>
        <div>
            <button class="login-button">Regístrate</button>
        </div>
        <div>
            <div>
                <a class="olvido-pass" href="#"> <p>¿Ya eres miembro?</p> 
                    Inicia tu Sesión</a>
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
    .container-form{
        position: absolute;
        z-index: 999;
    }

</style>