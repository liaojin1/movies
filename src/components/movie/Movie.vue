<template>
  <div>
      <ul>
          <li @click='toDetail(val.id)' v-for='val in datas' :key='val.id' class="items">
          <div class="item-img">
              <img :src="val.img" alt="">
          </div>
          <div class="item-info">
              <h4>{{val.nm}}</h4>
              <p>{{val.ver}}</p>
              <p>主演：{{val.star}}</p>
              <p>{{val.showInfo}}</p>
          </div>
          </li>
      </ul>
      <div>
          <img src="@/assets/img/load.gif" alt="" v-show="isLoading">
      </div>
      <div>
          <h3 v-show='isEnd'>到底了</h3>
      </div>
  </div>
</template>

<script>
import store from '@/vuex/store'
import axios from 'axios'

export default({
    data(){
        return{
            datas:[],
            isLoading:false,
           isEnd:false,            
        }
    },
  store,
  methods:{
      getData(){
         axios.get(API_PROXY+'http://m.maoyan.com/movie/list.json?type=hot&offset='+this.datas.length+'&limit=10')
        .then((response)=> {
           this.datas= this.datas.concat( response.data.data.movies);
           this.isLoading =  false;
           if(response.data.data.movies.length==0){
               this.isEnd = true;
           }

        })
        .catch( (error)=> {
            console.log(error);
        });
      },
      toDetail(val){
          this.$router.push({name:'MovieDetail',params:{detailId:val}});
      }
  },
  created(){
  this.$store.commit('routerLinks',{
   color:'rgb(33,150,243)',
   title:'movie',
 });
 this.getData();
},
mounted(){
    window.onscroll=()=>{
        let scrollTop = document.documentElement.scrollTop;
        let scrollHeight = document.documentElement.scrollHeight;
        let scrollWidth = document.documentElement.scrollWidth;

        if(scrollTop+scrollHeight==scrollWidth){
            // alert('bottom!');
            // 先显示动态图片
            if(this.isLoading){
                if(this.isEnd){

            }else{
              setTimeout(()=>{
            this.isLoading = true;                  
                this.getData();
            },200)  
            }
            
            }
            

        }
    }
}
})
</script>

<style scoped>
/*scoped只在主键内有效不加的话全局有效*/
.items{
    display: flex;
    border-bottom: 1px solid #333;
    margin-bottom: .1rem;
    padding-bottom: .1rem;
}
.item-img{
    flex-grow: 1;
    width: 0;/* 否则图片有大有小 */
}
.item-info{
    flex-grow: 2;
    width: 0;
    padding-left: 0.1rem;
}
</style>
