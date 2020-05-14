<template>
  <div class="hello">
    <h1>Austria Map</h1>
    <p>
      Please click a state to view state properties
    </p>
    <div>
      <kerala-map-new v-on:map-clicked="onMapClick"></kerala-map-new>
    </div>
  </div>
</template>

<script>
import KeralaMapNew from '../components/KeralaMapNew'
export default {
  name: 'Home',
  components: {
    KeralaMapNew
  },
  props: {
    msg: String
  },
  methods: {
    onMapClick: function(attr){
      this.$notify({
        group: 'map',
        title: 'State clicked',
        text: `You clicked on state with id: ${attr.mapId} and title: ${attr.title}`
      });
    }
  }
}
</script>