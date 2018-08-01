<template>
    <div>
      <!--<div id="container" :style="{height: heightData}"></div>-->
      <p id="demo">点击这个按钮，获得您的坐标：</p>
      <button @click="getLocation()">试一下</button>
      </div>
</template>

<script>
  import BMap from 'BMap'
  var x=document.getElementById("demo");
  export default {
    name: "course",
    data () {
      return {
        x: '',
        y: ''
      }
    },
    methods: {
      // 29.768813   121.539836
      showPosition(position) {
        this.x = position.coords.latitude
        this.y = position.coords.longitude
        var xy = this.x + '/' + this.y
        alert(xy)
      },
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.showPosition);
        } else{alert('失败')}
      }
    }
    }
</script>

<style scoped>
  /*#container{*/
    /*width:100%;*/
    /*!*height: 569.6px;*!*/
  /*}*/
</style>
