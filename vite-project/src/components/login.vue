<template>
  <div class="login-page">
    <div class="login-container">
      <h2>Connexion</h2>
      <form @submit.prevent="login" class="login-form">
        <div class="form-group">
          <input
            type="text"
            v-model="id"
            placeholder="ID de l'utilisateur"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            v-model="password"
            placeholder="Mot de passe"
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      id: "",
      password: "",
      data: "",
    };
  },
  methods: {
    login() {
      axios
        .get(
          `http://127.0.0.1:8001/item?id=${this.id}&password=${this.password}`
        )
        .then((response) => {
          if (response.data && response.data.access_token) {
            this.$router.push("/file");
            this.data = response.data;
            console.log(this.data.access_token);
            axios
              .get("http://127.0.0.1:8001/protected-route", {
                headers: {
                  Authorization: `Bearer ${this.data.access_token}`, // Remplacez `votreAccessToken` par le véritable jeton d'accès
                },
              })
              .then((response) => {
                console.log(response.data); // Le contenu de la route protégée
              })
              .catch((error) => {
                console.error(
                  "Erreur lors de la requête à la route protégée :",
                  error
                );
              });
          } else {
            alert("Accès refusé");
            console.error("Réponse invalide de l'API :", response);
          }
        })
        .catch((error) => {
          alert("Accès refusé");
          console.error("Erreur lors de la requête API :", error);
        });
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(to right, #3494e6, #ec6ead);
}
.login-container {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  animation: fadeIn 0.5s;
}

h2 {
  color: #333;
  margin: 0 0 20px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin: 10px 0;
  width: 100%;
}

input {
  padding: 10px;
  border: none;
  border-bottom: 2px solid #007bff;
  outline: none;
  border-radius: 5px;
  width: 100%;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 0;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
