<template>
  <div class="mapdiv"></div>
</template>

<script lang="ts">
import esriConfig from '@arcgis/core/config.js'
import Point from '@arcgis/core/geometry/Point'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MapView',

  props: {
    basemapString: {
      type: String,
      default: 'satellite'
    },
    latitude: {
      type: Number,
      default: 39.62435
    },
    longitude: {
      type: Number,
      default: -104.70632
    },
    zoom: {
      type: Number,
      default: 12
    }
  },

  computed: {
    center(): Point {
      return new Point({
        latitude: this.latitude,
        longitude: this.longitude
      })
    }
  },

  mounted() {
    esriConfig.assetsPath = './assets'

    const webmap: Map = new Map({
      basemap: this.basemapString
    })

    new MapView({
      container: this.$el,
      map: webmap,
      center: this.center,
      zoom: this.zoom
    })
  }
})
</script>

<style scoped>
.mapdiv {
  height: 500px;
}
</style>
