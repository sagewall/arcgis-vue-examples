<template>
  <div class="map-container">
    <MapView
      basemap-string="streets"
      :latitude="45"
      :longitude="34"
      :zoom="12"
    />
  </div>
</template>

<script lang="ts">
import MapView from '@/components/MapView.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MapViewExample',
  components: {
    MapView
  }
})
</script>

<style scoped>
.map-container {
  height: 500px;
  width: 500px;
}
</style>
