<template>
  <div class="scene-container">
    <SyncronizedViews
      portalItemId1="55ebf90799fa4a3fa57562700a68c405"
      portalItemId2="86265e5a4bbb4187a59719cf134e0018"
      :latitude="40"
      :longitude="-105"
      :heading="270"
    />
  </div>
</template>

<script lang="ts">
import SyncronizedViews from '@/components/SyncronizedViews.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SyncronizedViewsExample',
  components: {
    SyncronizedViews
  }
})
</script>

<style scoped>
.scene-container {
  height: 500px;
  width: 1000px;
}
</style>
