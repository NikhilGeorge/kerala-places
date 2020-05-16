<template>
  <v-layout row wrap>
    <v-row>
      <v-col xs="6">
        <v-card>
          <h1><span class="map"> Map </span></h1>
          <kerala-map-new></kerala-map-new>
        </v-card>
      </v-col>
      <v-col xs="6">
        <v-card color="primary">
               <h3>{{ $store.state.dist }}</h3>
              <h4> lat : {{ $store.state.lat }} </h4>
        </v-card>
      </v-col>
    </v-row>
  </v-layout>
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
<style scoped>
  .map {
    color: red;
    background: rosybrown;
  }
</style>