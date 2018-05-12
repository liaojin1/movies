<template>
  <div>
      <header :style="'background-color:'+$store.state.color">
          <div class="header-btn">首页</div>
          <h2 class="header-title">{{$store.state.title}}</h2>
      </header>
      <footer :style="'background-color:'+$store.state.color">
          <ul>
              <!-- <li> <router-link to="/">电影</router-link> </li>
              <li> <router-link to="/music">音乐</router-link> </li>
              <li> <router-link to="/book">书籍</router-link> </li>
              <li> <router-link to="/photo">图片</router-link> </li> -->

              <li v-on:click='routerLink("/")'>电影</li>
              <li @click='routerLink("book")'>书籍</li>
              <li @click='routerLink("music")'>音乐</li>
              <li @click='routerLink("photo")'>图片</li>
          </ul>
      </footer>
  </div>
</template>
<script>

import store from '@/vuex/store'
// 把store引入
    export default({
        store,
        // data(){
        //     return{
        //         bgColor:'red'
        //     }
        // },
        methods:{
            routerLink(path){
                this.$router.push(path);
                // if(path == '/book'){
                //     this.bgColor = 'blue';这样传值导致刷新后还会变成原来data的默认颜色
                //因此兄弟间传值使用vuex，父子间可以正常传值
                // }
            }
        }
    })

</script>
<style scoped>
    header{
        height: 1rem;
        background: rgb(33,150,243);
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
    }
    
    .header-title{
        color: white;
        font-size: .6rem;
        /*display: block; */
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .header-btn{
        height: 1rem;
        line-height: 1rem;
        padding-left: 0.1rem;
        color: #fff;
        
    }

    footer{
        height: 1rem;
        background: rgb(33,150,243);
        position: fixed;
        bottom: 0;
        left: 0;   
        width:100%;
    }
    footer ul{
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    footer ul li{
        flex-grow: 1;
        width: 0;
        /* height: 1rem; */
        text-align: center;
        line-height: 1rem;

        /* float: left;
        width:25%;
        text-align: center;
        height: 1rem;
        line-height: 1rem; */
        color: #ffffff;
        
    }
</style>
