<template>
    <footer class="">
        <div class="contact-social">
            <ul>
                <li>
                    <a class="hover-target" href="https://github.com/AnyiBurgos/">
                        <img class="github" src="@/assets/Github.png" alt="gitlogo"/>
                    </a>
                </li>
                <li>
                    <a class="hover-target" href="https://www.linkedin.com/in/anyi-giraldo-burgos-a1580824b/">
                        <img class="Linkedin" src="@/assets/Linkedin1.png" alt="gitlogo"/>
                    </a>
                </li>    
            </ul>
            <p>&copy; Creado por <spam> Anyi Giraldo Burgos</spam><br>
            "La lealtad de un animal no conoce los límites"</p>
        </div>        
    </footer>
</template>

<script>
export default {
  name: 'FooterProject',
  }
</script>

<style>
 ul {
    margin: 0;
    padding: 0;
    list-style: none;
    }

.contact-social {
    margin-top: 30px;
}

.contact-social > ul {
    position: absolute;
    display: flex;
    align-self: center;
}

.contact-social ul li a {
    border: 1px solid #8b9199;
    color: #8b9199;
    display: inline-block;
    height: 40px;
    margin: 0 10px;
    padding-top: 7px;
    transition: all 0.4s ease 0s;
    width: 40px;
}

.contact-social ul li a:hover {
    border: 1px solid #09E8B2;
    color: #09E8B2;
}

footer {
    background: #1A1E25;
    color: #868c96;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
}

footer p {
    padding: 40px 0;
    text-align: center;
}

footer img {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>