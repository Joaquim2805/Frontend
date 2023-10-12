


<template>
   
    

  
   
    
    <router-view />
  
    
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
   
    
}
    
  
  
  

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