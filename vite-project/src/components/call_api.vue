<template>
  <h5  style="margin-left: 20px; margin-top: 20px;">Appel d'une API pour afficher des photos du rover Curiosity sur Mars à une date souhaitée  :</h5>
    <div style="margin-left: 20px;">
      
    <div>
    <v-text-field id="dchoice" v-model="date" @change="updateDate" style="width: 400px;" type="date" label="Date"></v-text-field>
    </div>







    <div>
    
    <div v-if="photos.length > 0">
      <h6 style="margin-left: 20px;">Photos du rover Curiosity sur Mars le {{ date }}</h6>
      <div v-for="photo in photos" :key="photo.id">
        
        <img :src="photo.img_src" :alt="photo.id" />
      </div>
    </div>
    <div v-else>
      <h6 style="text-align: center;margin-left: 800px;">Aucune photo n'a été trouvée.</h6>
    </div>
  </div>
</div>
  
  </template>
  
  <script>
  import Datepicker from 'vuejs-datepicker';

  import axios from 'axios';
  
  export default {
    data() {
      return {
        data: null,
        photos : [],
        date : 'TEST'
      };
    },
    methods: {
      updateDate(event) {
        this.date = event.target.value
        console.log('Evenement')
        this.fetchData()
      },
      fetchData() {
        const params = {
        api_key: 'EX5IzKzW4IZ40lWG8yh5F8AdQmWIehA8wz2dpZxj',
        earth_date: this.date, // Date terrestre (1er janvier 2023)
        camera: 'FHAZ', // Exemple : filtre par la caméra FHAZ
        };
        // Remplacez l'URL par l'URL de l'API que vous souhaitez interroger
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos', {
        params: params,
      })
          .then(response => {
            // Traitez la réponse ici
            this.photos = response.data.photos;
            console.log(this.data);
          })
          .catch(error => {
            console.error('Une erreur s\'est produite lors de la récupération des données :', error);
          });
      },
    },
  };
  </script>


<style>
  button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #dcb0ec;
  cursor: pointer;
  transition: border-color 0.25s;
  
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.custom-select {
      margin-top: 160px; /* Ajustez la marge supérieure selon vos besoins */
      margin-left: 20px; /* Ajustez la marge gauche selon vos besoins */
      padding: 8px; /* Ajoutez de la marge intérieure pour un meilleur espacement */
      border: 1px solid #ccc; /* Ajoutez une bordure pour délimiter le menu déroulant */
      border-radius: 5px; /* Ajoutez une légère courbure aux coins */
      font-size: 16px; /* Ajustez la taille de la police selon vos préférences */
      background-color: #fff; /* Couleur de fond du menu déroulant */
      color: #333; /* Couleur du texte */
      width: 250px; /* Ajustez la largeur du menu déroulant selon vos besoins */
    }

    .custom-select option[disabled] {
      color: #080101; /* Couleur du texte pour les options désactivées */
    }
</style>