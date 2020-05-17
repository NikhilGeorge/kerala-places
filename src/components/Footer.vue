<template>
 <v-footer>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
</template>

<script>
    export default {
        data: () => ({
            icons: [
              'mdi-facebook',
              'mdi-twitter',
              'mdi-linkedin',
              'mdi-instagram',
            ],
  }),
        
    }
</script>

<style lang="scss" scoped>

</style>