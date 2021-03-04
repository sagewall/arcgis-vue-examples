<template>
  <div class="mapdiv"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import esriConfig from '@arcgis/core/config.js'

export default defineComponent({
  name: 'MapView',

  mounted() {
    esriConfig.assetsPath = './assets'

    const webmap: Map = new Map({
      basemap: 'satellite'
    })

    new MapView({
      container: this.$el,
      map: webmap,
      center: [-104.70632, 39.62435],
      zoom: 12
    })
  }
})
</script>

<style scoped>
.mapdiv {
  height: 500px;
}
</style>
