<template>

 <v-app>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
          >
            
             <KeralaMap/>
          </v-col>
        </v-row>  
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
</v-app>
 
 

           


 

</template>

<script>
import KeralaMap from './components/KeralaMap';

export default {
  name: 'App',

  components: {
    KeralaMap,
  },

  data: () => ({
    //
  }),
};
</script>
