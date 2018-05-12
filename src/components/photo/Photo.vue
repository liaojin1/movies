<template>
  <h1>photo</h1>
</template>

<script>
import store from '@/vuex/store'
export default({
  store,
  created(){
  this.$store.commit('routerLinks',{
   color:'rgb(63,83,181)',
   title:'photo',
 });
}
})
</script>

<style scoped>
/*scoped只在主键内有效不加的话全局有效*/

</style>
