<template>
    <div>
      <!--<div id="container" :style="{height: heightData}"></div>-->
      <p>原生使用h5定位：</p>
      <p>x坐标为：{{x}}y坐标为：{{y}}</p>
      <button @click="getLocation()">试一下</button>
      </div>
</template>

<script>
  import BMap from 'BMap'
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
        console.log(xy)
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
