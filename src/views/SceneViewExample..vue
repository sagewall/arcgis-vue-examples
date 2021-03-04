<template>
  <div class="scene-container">
    <SceneView
      basemap-string="hybrid"
      :latitude="40"
      :longitude="-105"
      :heading="270"
    />
  </div>
</template>

<script lang="ts">
import SceneView from '@/components/SceneView.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MapViewExample',
  components: {
    SceneView
  }
})
</script>

<style scoped>
.scene-container {
  height: 500px;
  width: 500px;
}
</style>
