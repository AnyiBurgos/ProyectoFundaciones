<template>
  <div class="header header-fixed">
        <div class="navbar container">
            <div class="logo-project">
                <a href="Home">
                    <img class="logopro" src="./../assets/Logo.jpg" alt="">Animal Lover Traces
                </a>
            </div>
            <input type="checkbox" id="navbar-toggle" >
            <input id="navbar-toggle" >
            <label for="navbar-toggle"><i></i></label>
            <nav class="menu">
                <ul>
                    <li><a href="Home">Home</a></li>
                    <li><a href="Fundaciones">Fundaciones</a></li>
                    <li><a href="Login">Login</a></li>
                </ul>
            </nav>        
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .logopro {
        border-radius: 100%;
        object-fit: contain;
        width: 45px;
        font-size: 17px;
    }

    .header-fixed {
        position: fixed;
        top: 0;
        z-index: 1;
        width: 100%;
        background-color: #09E8B2;
        box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.556);
    }

    .navbar {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #09E8B2;
        line-height: 60px;
    }
    .navbar .logo-project a {
        display: block;
        font-size: 20px;
        font-weight: bold;
        color: #8B07EC;
        text-decoration: none;
    }
    .navbar .logo-project a:hover {
    color: #77777796;
    }

    .navbar nav {
        flex: 8;
    }

    .navbar label {
    user-select: none;
    cursor: pointer;
    padding: 28px 20px;
    position: relative;
    z-index: 3;
    }

    .navbar label i {
    height: 2px;
    position: relative;
    transition: background .2s ease-out;
    width: 18px;
    font-style: normal;
    font-weight: normal;
    }
    .navbar label i:before,
    .navbar label i:after {
    content: '';
    height: 100%;
    position: absolute;
    transition: all .2s ease-out;
    width: 100%;
    }
    .navbar label i,
    .navbar label i:before,
    .navbar label i:after {
    display: block;
    background: #8B07EC;  
    }
    .navbar label i:before {
    top: 5px;
    }
    .navbar label i:after {
    top: -5px;
    }

    .navbar #navbar-toggle {
    display: none;
    }

    .header #navbar-toggle:checked ~ .menu {
    visibility: visible;
    opacity: 0.99;
    }
    .header #navbar-toggle:checked ~ label {
    background: #1A1E25;
    border-radius: 50%;    
    }
    .header #navbar-toggle:checked ~ label i {
    background: transparent;
    }
    .header #navbar-toggle:checked ~ label i:before {
    transform: rotate(-45deg);
    }
    .header #navbar-toggle:checked ~ label i:after {
    transform: rotate(45deg);
    }
    .header #navbar-toggle:checked ~ label:not(.steps) i:before,
    .header #navbar-toggle:checked ~ label:not(.steps) i:after {
    top: 0;
    }

    @media (max-width: 768px) {
        .navbar nav {
        visibility: hidden;
        opacity: 0;
        z-index: 2;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 30%;
        transition: all 0.3s ease-out;
        display: table;
        background: #09E8B2;
        }
        .navbar nav ul {
        margin: 0;
        padding: 20px 0;
        display: table-cell;
        vertical-align: middle;
        }
        .navbar nav li {
        display: block;
        text-align: center;
        padding: 20px 0;
        text-align: center;
        font-size: 50px;
        min-height: 50px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.3s ease-out;
        }
        .navbar nav li:hover {
        background: #1A1E25;
        }
        .navbar nav li:hover a {
        color: #fff;
        transition: all 0.3s ease-out;
        }
        .navbar nav li a {
        color: #8B07EC;
        }
    }

    @media (min-width: 768px) {
        .navbar nav ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        text-align: center;
        list-style: none;
        }
        .navbar nav li {
        flex: 1;
        }
        .navbar nav li a {
        display: block;
        padding: 0 8px;
        font-size: 17px;
        line-height: 60px;
        color: #8B07EC ;
        text-decoration: none;
        }
        .navbar nav li.active {
        background: #555;  
        }
        .navbar nav li:hover {
        background: rgba(51, 51, 51, 0.155);
        }
        .navbar label {
        display: none;
        }
    }
</style>
