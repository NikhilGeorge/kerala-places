<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="8">
        <v-row>
          <v-col>
            
            <kerala-map-new></kerala-map-new>
            
          </v-col>
          <v-col>
            <PlaceCard />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import KeralaMapNew from '../components/KeralaMapNew'
import PlaceCard from '../components/PlaceCard'
export default {
  name: 'Home',
  components: {
    KeralaMapNew,
    PlaceCard
  },
  props: {
    msg: String
  },
  methods: {

  }
}
</script>
<style scoped>

</style>