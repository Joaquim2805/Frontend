<template>
    <div>
        <canvas ref="chartCanvas" style="max-width: 1200px ; max-height: 500px;" ></canvas>
    </div>
  </template>
  
  <script>
  import { Chart } from 'chart.js';
  export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.chartCanvas.getContext('2d');

      if (this.chart) {
        this.chart.destroy(); // Détruit le graphique précédent si présent.
      }

      this.chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.labels,
          datasets: [
            {
              label: this.title,
              data: this.data,
              backgroundColor: 'red', // Rouge
              borderColor: 'rgba(255, 0, 0, 1)', // Bordure rouge
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              min : 0,
              max : 1024
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    },

  
}
 
  
 
};

  

  
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles CSS personnalisés ici si nécessaire */
  </style>
  