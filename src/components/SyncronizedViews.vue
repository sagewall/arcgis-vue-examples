<template>
  <div class="container">
    <div ref="sceneView1" class="scene-view"></div>
    <div ref="sceneView2" class="scene-view"></div>
  </div>
</template>

<script lang="ts">
import Camera from '@arcgis/core/Camera'
import esriConfig from '@arcgis/core/config.js'
import Point from '@arcgis/core/geometry/Point'
import Viewpoint from '@arcgis/core/Viewpoint'
import SceneView from '@arcgis/core/views/SceneView'
import WebMap from '@arcgis/core/WebMap'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SyncronizedViews',

  props: {
    portalItemId1: {
      type: String,
      default: '55ebf90799fa4a3fa57562700a68c405'
    },
    portalItemId2: {
      type: String,
      default: '86265e5a4bbb4187a59719cf134e0018'
    },
    elevation: {
      type: Number,
      default: 5000
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
    },
    viewpoint(): Viewpoint {
      return new Viewpoint({
        camera: this.camera
      })
    }
  },

  mounted() {
    esriConfig.assetsPath = './assets'

    const webmap1 = new WebMap({
      portalItem: {
        id: this.portalItemId1
      },
      ground: this.groundString
    })

    const webmap2 = new WebMap({
      portalItem: {
        id: this.portalItemId2
      },
      ground: this.groundString
    })

    const sceneView1 = new SceneView({
      container: this.$refs.sceneView1 as HTMLDivElement,
      map: webmap1,
      viewpoint: this.viewpoint
    })

    const sceneView2 = new SceneView({
      container: this.$refs.sceneView2 as HTMLDivElement,
      map: webmap2,
      viewpoint: this.viewpoint
    })

    const views = [sceneView1, sceneView2]
    let active: SceneView

    const sync = (source: SceneView) => {
      if (!active || !active.viewpoint || active !== source) {
        return
      }

      for (const view of views) {
        if (view !== active) {
          view.viewpoint = active.viewpoint
        }
      }
    }

    for (const view of views) {
      view.watch(['interacting', 'animation'], () => {
        active = view
        sync(active)
      })

      view.watch('viewpoint', () => sync(view))
    }
  }
})
</script>

<style>
.container {
  display: flex;
  height: 100%;
}

.scene-view {
  flex: 50;
  margin: 10px;
}
</style>
