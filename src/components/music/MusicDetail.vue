<template>
  <div>
        <aplayer v-if='isReady' :music=music :list=musiclist :showLrc ="true" />
  </div>

</template>
<script>
import Aplayer from 'vue-aplayer'// 这里有@符号证明在src中找，不带@则在nonde那个文件中找
import axios from 'axios'
    export default({
        created () {
           this.getData();
        },
        data(){
            return{
                musiclist:[],
                music:{
                    // title: 'secret base~君がくれたもの~',
                    // artist: 'Silent Siren',
                    // src: 'http://vip.baidu190.com/uploads/2017/20170580b35d63c5d3298171259e9634d8985b.mp3',
                    // pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
                },
                isReady:false
            }
        },
        components: {
            Aplayer
        },
        methods:{
            getData(){
                axios.get('./static/data/musicdata.json').then((res)=>{
                    let thisObj = {};
                    for(let i=0;i<res.data.musicData.length;i++){
                        this.musiclist.push({
                        title : res.data.musicData[i].title,
                        artist : res.data.musicData[i].artist,
                        src : res.data.musicData[i].src,
                        pic : res.data.musicData[i].pic,
                        lrc:'http://localhost:8080/static/'+res.data.musicData[i].lrc,
                        });
                    }
                   // this.music.title = res.data.musicData.title;

                    thisObj.title = res.data.musicData[0].title;
                    thisObj.artist = res.data.musicData[0].artist;
                    thisObj.src = res.data.musicData[0].src;
                    thisObj.pic = res.data.musicData[0].pic;
                   thisObj.lrc = 'http://localhost:8080/static/'+res.data.musicData[0].lrc;

                    this.music = thisObj;
                    this.isReady = true;
                }).catch(()=>{
                    console.log("error")
                })
            }
        }
    })
</script>

<style scoped>

</style>
