<template>
  <div id="app">
    <Compo></Compo>
    <router-view/>
  </div>
</template>

<script>
import Compo from '@/components/comp/Compo'
export default {
  name: 'App',
  components:{
    Compo
  }
}
</script>

<style>
#app {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
</style>
