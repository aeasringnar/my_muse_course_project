<template>
  <div>
    <div id="container" :style="{height: heightData}"></div>
  </div>
</template>

<script>
  import BMap from 'BMap'
  export default {
    name: "bmap_demo",
    data () {
      return {
        docked: false,
        open: false,
        position: 'left',
        clientHeight: '',
        heightData: '',
        this_x: '',
        this_y: ''
      }
    },
    mounted:function () {
      this.init()
      this.clientHeight = `${document.documentElement.clientHeight}`
      console.log(this.clientHeight)
      var newheight = this.clientHeight - ((this.clientHeight) / 100) * 12
      console.log(newheight)
      this.heightData = newheight + 'px'
    },
    methods: {
      init:function () {
        var map = new BMap.Map("container");
        var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);
        var geolocation = new BMap.Geolocation();
        // 开启SDK辅助定位
        geolocation.enableSDKLocation();
        geolocation.getCurrentPosition(function(r){
          if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var mk = new BMap.Marker(r.point);
            map.addOverlay(mk);
            map.panTo(r.point);
            // alert('您的位置：'+r.point.lng+','+r.point.lat);
          }
          else {
            alert('failed'+this.getStatus());
          }
        });

      }
    }
  }
</script>

<style scoped>
  #container{
    width:100%;
    /*height: 569.6px;*/
  }
</style>
