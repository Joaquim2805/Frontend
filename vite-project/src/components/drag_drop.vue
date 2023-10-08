<template>
  <div style="margin-top: 100px;">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card class="drop-container" @dragenter="handleDragEnter" @dragover="handleDragOver" @dragleave="handleDragLeave" @drop="handleDrop">
            <div v-if="!file">
              <p>{{ test }}</p>
            </div>
            <div v-else>
              <p>Vous avez sélectionné : {{ file.name }}</p>
            </div>
              
            
            <v-file-input v-model="file" show-size :label="test" @change="handleFileInputChange"></v-file-input>
            <v-btn  @click="clicR" color="error">Annuler</v-btn>
            <v-btn style="margin-left: 10px;" @click="clicB" color="success">Valider</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      isDragging: false,
      test: 'Faites glisser un fichier ici ou cliquez pour le sélectionner.',
    };
  },
  methods: {
    clicR() {
      this.test = 'Faites glisser un fichier ici ou cliquez pour le sélectionner.';
      this.file = null;
    },
    clicB() {
      alert('Fichier envoyé !');
      this.test = 'Fichier Validé';
    },
    handleDragEnter(e) {
      e.preventDefault();
      this.isDragging = true;
      this.test = 'Déposer votre fichier';
    },
    handleDragOver(e) {
      e.preventDefault();
    },
    handleDragLeave(e) {
      e.preventDefault();
      this.isDragging = false;
    },
    handleDrop(e) {
      e.preventDefault();
      this.isDragging = false;

      const droppedFile = e.dataTransfer.files[0];

      if (droppedFile) {
        this.file = droppedFile;
        // Vous pouvez maintenant traiter le fichier comme nécessaire ici
      }
    },
    handleFileInputChange(e) {
      const selectedFile = e.target.files[0];
      if (selectedFile) {
        this.file = selectedFile;
        // Vous pouvez maintenant traiter le fichier comme nécessaire ici
      }
    },
  },
};
</script>

<style scoped>
.drop-container {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  color: black;
  width: 500px;
}

.drop-container.is-dragging {
  border-color: #333;
  background-color: #df3030;
}
</style>
