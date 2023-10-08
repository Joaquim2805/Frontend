<template>
  <div>
    <input type="range" v-model="sliderValue" @input="updateValue" min="0" max="100">
    <p>Slider Value: {{ sliderValue }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderValue: 50, // Valeur initiale du slider
    };
  },
  methods: {
    updateValue() {
      // Émettre un événement pour informer le parent de la nouvelle valeur du slider
      this.$emit('update:sliderValue', this.sliderValue);
    },
  },
};
</script>
