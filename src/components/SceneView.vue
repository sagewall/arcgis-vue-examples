<template>
  <div class="scenediv"></div>
</template>

<script lang="ts">
import Camera from '@arcgis/core/Camera'
import esriConfig from '@arcgis/core/config.js'
import Point from '@arcgis/core/geometry/Point'
import Map from '@arcgis/core/Map'
import SceneView from '@arcgis/core/views/SceneView'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SceneView',

  props: {
    basemapString: {
      type: String,
      default: 'satellite'
    },
    elevation: {
      type: Number,
      default: 10000
    },
    fov: {
      type: Number,
      default: 55
    },
    groundString: {
      type: String,
      default: 'world-topobathymetry'
    },
    heading: {
      type: Number,
      default: 0
    },

    latitude: {
      type: Number,
      default: 39.62435
    },
    longitude: {
      type: Number,
      default: -104.70632
    },
    tilt: {
      type: Number,
      default: 70
    }
  },

  computed: {
    position(): Point {
      return new Point({
        latitude: this.latitude,
        longitude: this.longitude,
        z: this.elevation
      })
    },
    camera(): Camera {
      return new Camera({
        fov: this.fov,
        heading: this.heading,
        position: this.position,
        tilt: this.tilt
      })
    }
  },

  mounted() {
    esriConfig.assetsPath = './assets'

    const webmap: Map = new Map({
      basemap: this.basemapString,
      ground: this.groundString
    })

    new SceneView({
      container: this.$el,
      map: webmap,
      camera: this.camera
    })
  }
})
</script>

<style scoped>
.scenediv {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
}
</style>
