
<template>
  <header>
  <h2>Prototype Application</h2>
    <nav>
      <ul style="margin-left: 20px; margin-top: 25px;">
        <li style="margin-bottom: 20px;"><a href="#">À propos</a></li>
        <li><a href="/file">Base de donnée</a></li>
        <li><a href="/login">Connexion</a></li>
        <!-- Ajoutez d'autres liens de navigation ici si nécessaire -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
/* Ajoutez vos styles CSS spécifiques au header ici */
header {
position: fixed;
top: 0;
left: 0;
width: 100%;
background-color: #333;
color: #fff;
padding: 10px;
z-index: 1;
justify-content: flex-start;
display: flex;
align-items: center;   /* Pour s'assurer que le header est au-dessus du reste du contenu */
  }
nav ul {
  list-style: none;
  padding: 0;
  display: flex;
}

nav li {
  margin-right: 20px;
}

a {
  color: #fff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>