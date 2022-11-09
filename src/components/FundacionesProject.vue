<template> 
    <div class="fundaciones"> 
        <div class="search">
            <input type="text" name="Search" placeholder="Búsqueda"> 
            <input type="submit" value="🔍">
        </div>
        <div class="blog-card">
            <div class="meta">
                <div class="photo" style="background-image">
                    <img src="@/assets/LogoFundacion.jpeg">
                </div>
            </div>
            <div class="description">
                <h1>Animalistas de Corazón</h1>
                <h2>Pensilvania, Caldas</h2>
                <p>La Fundación Animalistas de Corazón busca crear conciencia 
					en la tenencia responsable de los animales.
                </p>
                <p class="see-more">
                    <router-link to="/Foundation">Ver más</router-link>
                </p>
            </div>
        </div>
        
        <div class="blog-card">
            <div class="meta">
                <div class="photo" style="background-image">
                    <img src="@/assets/Huellas.jpg">
                </div>
            </div>
            <div class="description">
            <h1>Nombre Fundación</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Ad eum dolorum architecto obcaecati enim dicta praesentium, 
                quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
            <p class="see-more">
                <a href="#">Ver Más</a>
            </p>
            </div>
        </div>

    <div class="blog-card">
        <div class="meta">
            <div class="photo" style="background-image">
                <img src="@/assets/Huellas.jpg">
            </div>
        </div>
        <div class="description">
        <h1>Nombre Fundación</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Ad eum dolorum architecto obcaecati enim dicta praesentium, 
            quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
        <p class="see-more">
            <a href="#">Ver Más</a>
        </p>
        </div>
    </div>
</div>

  
</template>

<script>
    export default {
    name: 'FundacionesProject',
}

</script>

<style>
    .fundaciones{
        position: relative;
        height: 100%;
        background-color: antiquewhite;
        margin-top: 73px;
    }
    .search{
        
    }

    .blog-card {
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
        box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.4);
        margin-bottom: 1.6%;
        background: #fff;
        border-radius: 5px;
        overflow: hidden;
        z-index: 0;
    }


    .blog-card:hover .photo {
        transform: scale(1.3) rotate(3deg);
    }

    .blog-card .meta {
        position: relative;
        z-index: 0;
        height: 250px;
    }

    .blog-card .photo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: contain;
        background-position: center;
        transition: transform 0.2s;
    }

    .blog-card .description {
        padding: 1rem;
        background: #fff;
        position: relative;
        z-index: 0;
    }
    
    .blog-card .description h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.7rem;
    }

    .blog-card .description h2 {
        font-size: 1.02rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #a2a2a2;
        margin-top: 5px;
    }

    .blog-card .description .see-more {
        text-align: right;
    }

    .blog-card .description .see-more a {
        color: #8B07EC;
        display: inline-block;
        position: relative;
        text-decoration: none;
    }

    .blog-card p {
        position: relative;
        margin: 1rem 0 0;
    }

    .blog-card:hover .details {
        left: 0%;
    }

    @media (min-width: 640px) {
        .blog-card {
            flex-direction: row;
            max-width: 700px;
        }
        .blog-card .meta {
            flex-basis: 40%;
        }
        .blog-card .description {
            flex-basis: 60%;
        }
    }
</style>