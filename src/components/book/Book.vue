<template>
  <h1>book</h1>
</template>

<script>
import store from '@/vuex/store'
  export default({
 store,
//  beforeRouteEnter: (to, from, next) => {//根据页面上方路径判断是否进入
//  $store.commit('routerLinks',{
//    color:'blue',
//    title:'book',
//  })
//  // console.log('进入book');
//       next();
//     }
created(){
  this.$store.commit('routerLinks',{
   color:'rgb(121,85,72)',
   title:'book',
 });
}
  })
</script>

<style scoped>
/*scoped只在主键内有效不加的话全局有效*/

</style>
