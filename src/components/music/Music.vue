<template>
  <div>
    <ul>
      <li @click='goDetail()' v-for="item in musiclist" :key='item.id'>
        <img :src="item.bg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/vuex/store'
import axios from 'axios'
export default({
  store,
  data(){
    return{
      musiclist:[]
    }
  },
  created(){
  this.$store.commit('routerLinks',{
   color:'rgb(0,150,136)',
   title:'music',
 });
 this.getData()
},
methods:{
  getData(){
    axios.get('./static/data/musiclist.json').then((res)=>{
      this.musiclist = res.data.albums
    }).catch(()=>{

    })
  },
  goDetail(){
    this.$router.push('/musicdetail')
  }
}
})
</script>

<style scoped>
/*scoped只在主键内有效不加的话全局有效*/

ul{
  display: flex;
  flex-wrap: wrap;
}
ul li{
  width: 50%;
  /* display: inline-block; */
  /* float: left; */

}
ul li img{
  width:100%;
}
</style>
