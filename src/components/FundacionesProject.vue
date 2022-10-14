<template>  
    <h1>Fundaciones</h1>
    <div class="search">
        <input type="text" name="Search" placeholder="Busqueda"> 
        <input type="submit" value="🔍">
    </div>
    <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg)"></div>
      </div>
    <div class="description">
      <h1>Animalistas de Corazón</h1>
      <h2>Pensilvania, Caldas</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="see-more">
        <a href="#">Ver más</a>
      </p>
    </div>
    </div>
    
    <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg)"></div>
      </div>
    <div class="description">
      <h1>Learning to Code in python</h1>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="see-more">
        <a href="#">Ver Más</a>
      </p>
    </div>
  </div>

  <div class="blog-card">
    <div class="meta">
      <div class="photo" style="background-image: url(https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__480.jpg)"></div>
      </div>
    <div class="description">
      <h1>Learning to Code in python</h1>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
      <p class="see-more">
        <a href="#">Ver Más</a>
      </p>
    </div>
  </div>
  
</template>

<script>
    export default {
		name: 'FundacionesProject',
		}
</script>

<style>
    .search{

    }

    .blog-card {
        display: flex;
        flex-direction: column;
        margin: 1rem auto;
        box-shadow: 0 3px 7px -1px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.6%;
        background: #fff;
        line-height: 1.4;
        font-family: sans-serif;
        border-radius: 5px;
        overflow: hidden;
        z-index: 0;
    }

    .blog-card a {
        color: inherit;
    }

    .blog-card a:hover {
        color: #5ad67d;
    }

    .blog-card:hover .photo {
        transform: scale(1.3) rotate(3deg);
    }

    .blog-card .meta {
        position: relative;
        z-index: 0;
        height: 200px;
    }

    .blog-card .photo {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-size: cover;
        background-position: center;
        transition: transform 0.2s;
    }

    .blog-card .details, .blog-card .details ul {
        margin: auto;
        padding: 0;
        list-style: none;
    }

    .blog-card .details {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -100%;
        margin: auto;
        transition: left 0.2s;
        background: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 10px;
        width: 100%;
        font-size: 0.9rem;
    }

    .blog-card .description {
        padding: 1rem;
        background: #fff;
        position: relative;
        z-index: 1;
    }

    .blog-card .description h1, .blog-card .description h2 {
        font-family: 'Open Sans Condensed', sans-serif;
    }
    
    .blog-card .description h1 {
        line-height: 1;
        margin: 0;
        font-size: 1.7rem;
    }

    .blog-card .description h2 {
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        color: #a2a2a2;
        margin-top: 5px;
    }

    .blog-card .description .see-more {
        text-align: right;
    }

    .blog-card .description .see-more a {
        color: #5ad67d;
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
            height: auto;
        }
        .blog-card .description {
            flex-basis: 60%;
        }
    }
</style>