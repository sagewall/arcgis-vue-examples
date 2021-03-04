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
    const webmap: Map = new Map({
      basemap: 'satellite'
    })

    // Set this property to insure assets resolve correctly.
    esriConfig.assetsPath = './assets'

    new MapView({
      container: this.$el,
      map: webmap,
      center: [-104.70632, 39.62435],
      zoom: 12
    })
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mapdiv {
  height: 500px;
}
</style>
