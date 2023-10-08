


<template>
  <Header/>
  
  <div style="margin-top: 100px;">
    
    <!-- Utilisez le composant contenant les sliders en tant que sous-composant avec v-model -->
    

    


    <!-- Affichez le premier histogramme avec les données originales -->
    <Graph v-if="items.data && items.labels" :data="items.data" :labels="items.labels" title="Histogramme de données aléatoires" style="height: 400px;" :key="items.data"></Graph>


    <!-- Ajoutez une div pour contenir le deuxième graphique -->
  <div class="slider-container" style="position: absolute; top: 135px; left: 50px; width: 100%; height: 20%; display: flex; flex-direction: column; align-items: flex-start; justify-content: flex-start;">

    <br>
    <input type="range" style="width: 750px; position: absolute;" v-model="sliderValue2" min="0" :max="selectedMaxValue">

    <input type="range" style=" width: 750px; position: absolute; left: 0;" v-model="sliderValue3" min="0" :max="selectedMaxValue">


        
   

    
  </div>
  <div style="position: absolute;left : 850px ; bottom: 450px;">   
  <label for="maxValue">Choisir Max Value:</label>
    <input type="number" id="maxValue" v-model="selectedMaxValue" min="0" :max="512">
    <button @click="sendMaxValue">Envoyer</button>
  </div> 
  Valeur minimum: {{ sliderValue2 }} Valeur maximum: {{ sliderValue3 }}
      <!-- Utilisez v-bind pour transmettre les valeurs des sliders au deuxième graphique -->
      <Graph v-if="items.data && items.labels" :data="slicedata(items.data, sliderValue2 , sliderValue3)" :labels="slicelabel(items.labels, sliderValue2, sliderValue3)" title="Focus" style="width: 800px;" :key="sliderValue2 + '-' + sliderValue3+ '-' +items.data"></Graph>
 
  
    
   
    </div>

 
  


  
</template>

<script>
import axios from 'axios';

import Graph from './components/Graph.vue';
import Header from './components/Header.vue';

 // Assurez-vous d'importer le bon chemin vers votre composant

export default {
  components: {
    Graph,
    Header,
    
     // Utilisez le même nom (Slider) que dans l'importation
  },
  data() {
    return {
      sliderValue3: 256, // Valeur initiale du premier slider
      sliderValue2: 0, // Valeur initiale du deuxième slider (modifiable)
      randomData: [],
      minValue: 0,
      maxValue: 512,
      items: [],
    };
  },
  mounted() {
    // Effectuez la requête GET vers votre API FastAPI
    axios.get('http://127.0.0.1:8001/items?minValue=0&maxValue=512&numBins=512')
      .then((response) => {
        // Mettez à jour les données avec les résultats de la requête
        const data = response.data.data;
        const labels = response.data.labels;
        this.items = response.data;
        console.log(this.items)
      })
      .catch((error) => {
        console.error('Erreur lors de la requête GET :', error);
      });
  },
  
  methods: {
    slicelabel(labels, start, end) {
      return labels.slice(start, end);
    },
    slicedata(donnee, start, end) {
      return donnee.slice(start, end);
    },
    

    sendMaxValue() {
    // Effectuez la requête GET vers votre API FastAPI avec la nouvelle valeur maximale
    const apiUrl = `http://127.0.0.1:8001/items?minValue=0&maxValue=${this.selectedMaxValue}&numBins=${this.selectedMaxValue}`;

    axios.get(apiUrl)
      .then((response) => {
        // Mettez à jour les données avec les résultats de la requête
        const data = response.data.data;
        const labels = response.data.labels;
        this.items = response.data;
        console.log(this.items)
      })
      .catch((error) => {
        console.error('Erreur lors de la requête GET :', error);
      });
    },
    sendMaxValue() {
    // Effectuez la requête GET vers votre API FastAPI avec la nouvelle valeur maximale
    const apiUrl = `http://127.0.0.1:8001/items?minValue=0&maxValue=${this.selectedMaxValue}&numBins=${this.selectedMaxValue}`;

    axios.get(apiUrl)
      .then((response) => {
        // Mettez à jour les données avec les résultats de la requête
        const data = response.data.data;
        const labels = response.data.labels;
        this.items = response.data;
        console.log(this.items)
      })
      .catch((error) => {
        console.error('Erreur lors de la requête GET :', error);
      });
    },  

  },
  watch: {
  sliderValue2(newVal) {
    const sliderValue3Number = parseFloat(this.sliderValue3);

    if (newVal >= sliderValue3Number) {
      this.sliderValue2 = sliderValue3Number - 1;
    }
  },
  sliderValue3(newVal) {
    const sliderValue2Number = parseFloat(this.sliderValue2);

    if (newVal <= sliderValue2Number) {
      this.sliderValue3 = sliderValue2Number + 1;
    }
  },
},




};
</script>
<style>

input[type="range"]::-webkit-slider-runnable-track {
    height: 10px; /* Hauteur de la zone de sélection, ajustez selon vos besoins */
}
input[type="range"] {
    -webkit-appearance: none; /* Désactive le style par défaut du navigateur */
    appearance: none;
    width: 750px; /* Largeur totale du slider, ajustez selon vos besoins */
    background: transparent; /* Fond transparent pour masquer la barre */
  }

  /* Styles pour personnaliser la "boule" du slider */
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Désactive le style par défaut du navigateur */
    appearance: none;
    width: 5px; /* Largeur de la "boule", ajustez selon vos besoins */
    height: 280px; /* Hauteur de la "boule", ajustez selon vos besoins */
    
    background-color: #031e50; /* Couleur de la "boule" */
    border-radius: 0%; /* Rend la "boule" ronde */
    cursor: pointer; /* Curseur personnalisé pour la "boule" */
  }
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
}

.slider-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.slider {
  margin-right: 20px;
}

.graph-container {
  flex: 2;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.custom-button {
  background-color: #06386e;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background-color: #0056b3;
}
</style>