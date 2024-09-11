<script setup>
  function testAlert(value) {
    alert (value);
  }
</script>

<template>
    <nav>
      <ul id="menu-accordeon">
        <p><router-link to="./"><img id="logo" alt="logo" src="https://previews.123rf.com/images/gigisomplak/gigisomplak1711/gigisomplak171101575/90597746-ailes-pour-votre-communaut%C3%A9-logo-%C3%A0-fond-transparent-effect.jpg" /></router-link></p>
        <br />
        <li><RouterLink to="/projet2" title="clients" @click="testAlert('Clients !!!!!')"><span class="spanSpaceLeft"><img class="logoMenu" src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-de-vecteur-menu-sur-le-fond-transparent-conception-logo-122599749.jpg" alt="Clients" /></span>Clients<span class="spanSpaceRight"></span></RouterLink></li>
        <li><RouterLink to="/projet2" title="Menu" @click="testAlert('Menu !!!!!')"><span class="spanSpaceLeft"><img class="logoMenu" src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-de-vecteur-menu-sur-le-fond-transparent-conception-logo-122599749.jpg" alt="Menu" /></span>Menu<span class="spanSpaceRight"></span></RouterLink></li>
        <li><a href="#">Etage&nbsp&nbsp&nbsp&nbsp&nbsp &darr;</a>  
            <ul>
              <li><RouterLink to="/projet2" title="RDC" @click="testAlert('RDC')">Rez de chaussé</RouterLink></li>
              <li><RouterLink to="/projet2" title="1er étage" @click="testAlert('1er étage')">1er étage</RouterLink></li>
              <li><RouterLink to="/projet2" title="2eme étage" @click="testAlert('2eme étage')">2eme étage</RouterLink></li>
              <li><RouterLink to="/projet2" title="3eme étage" @click="testAlert('3eme étage')">3eme étage</RouterLink></li>
            </ul>
        </li>
      </ul>
    </nav>
</template>

<style>
  #menu-accordeon {
    padding:10px;
    margin:0px;
    list-style:none;
    text-align: left;
    width: auto;
    color:white;
    background-color: rgb(26, 26, 35);
    height:100vh;
    font-size:18px;
  }
  #menu-accordeon ul {
    padding:0;
    margin:0;
    list-style:none;
    text-align: center;
  }
  #menu-accordeon li {
    cursor: pointer;
    /*
    background-color:#729EBF; 
    background-image:-webkit-linear-gradient(top, #729EBF 0%, #333A40 100%);
    background-image: linear-gradient(to bottom, #729EBF 0%, #333A40 100%);
    border-radius: 6px;
    margin-bottom:2px;
    box-shadow: 3px 3px 3px #999;
    border:solid 1px #333A40
    */
  }
  #menu-accordeon li li {
    max-height:0;
    overflow: hidden;
    transition: all .5s;
    border-radius:0;
    background: #444;
    box-shadow: none;
    border:none;
    margin:0
  }
  #menu-accordeon a {
    display:block;
    text-decoration: none;
    color: #fff;
    padding: 8px 0;
    font-family: verdana;
  }
  #menu-accordeon ul li a, #menu-accordeon li:hover li a {
    font-size:12px;
  }

  #menu-accordeon li:hover {
    background: #729EBF;
  }
  #menu-accordeon li li:hover {
    background: #999;
  }
  #menu-accordeon ul li:last-child {
    border-radius: 0 0 6px 6px;
    border:none;
  }
  #menu-accordeon li:hover li {
    max-height: 15em;
  }

  .logoMenu{
    width:15px;padding-right:10px;
  }

  .spanSpaceLeft{
    padding-left:15px;
  }

  .spanSpaceRight{
    padding-right:15px;
  }

  #logo{
    width:100px;
    border-radius: 6px;
    padding-left:10px;
    padding-right:10px;
    /*outline-offset: 4px;*/
  }
</style>