<template>
  <div>
    <div id="container" ></div>
  </div>
</template>

<!--<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=5e71f5b194d178ad67c2e02225301a8d"></script>-->
<script>
  import AMap from 'AMap'
  var map
  export default {
    name: "amap_demo",
    data () {
      return {
        clientHeight: '',
        heightData: '',
        this_x: 39.766417,
        this_y: 121.543994
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
        var x = parseFloat('39.666633')
        var y = parseFloat('121.963258')
        var xy = ''
        plus.geolocation.getCurrentPosition(function(p){
          y = parseFloat(p.coords.longitude)
          x = parseFloat(p.coords.latitude)
          xy = String(x) + '/' + String(y)
          map = new AMap.Map('container',{
            resizeEnable: true,
            zoom:15,
            center: [y, x]
          })
          // alert(xy)
          AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.PlaceSearch'],function () {
            map.addControl(new AMap.ToolBar())
            map.addControl(new AMap.Scale())
            // map.addControl(new AMap.Geolocation())
            map.addControl(new AMap.PlaceSearch())
          })
          var marker = new AMap.Marker({
            position: new AMap.LngLat(y, x),   // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
            title: '我的'
          });
          map.add(marker);
        }, function(e){
          alert('Geolocation error: ' + e.message);
        } );
        // alert(xy)
        // map = new AMap.Map('container',{
        //   resizeEnable: true,
        //   zoom:15,
        //   center: [y, x]
        // })
        // AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.PlaceSearch'],function () {
        //   map.addControl(new AMap.ToolBar())
        //   map.addControl(new AMap.Scale())
        //   // map.addControl(new AMap.Geolocation())
        //   map.addControl(new AMap.PlaceSearch())
        // })

        // map.plugin('AMap.Geolocation', function () {
        //   var geolocation = new AMap.Geolocation({
        //     useNative: true,         // 使用sdk辅助定位
        //     enableHighAccuracy: true,//是否使用高精度定位，默认:true
        //     timeout: 10000,
        //     maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        //     convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        //     showButton: true,        //显示定位按钮，默认：true
        //     buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        //     buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        //     showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        //     showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        //     panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        //     zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        //   });
        //   map.addControl(geolocation);
        //   geolocation.getCurrentPosition();
        //   // AMap.event.addListener(geolocation, 'complete',onComplete);//返回定位信息
        //   // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        //   AMap.event.addListener(geolocation, 'complete', function(data) {
        //     this.this_x = data.position.getLng() //定位成功返回的经度
        //     this.this_y = data.position.getLat() //定位成功返回的纬度
        //     // alert(this.this_x,this.this_y)
        //   }); //返回定位信息
        //   AMap.event.addListener(geolocation, 'error', function(data) {
        //     if (data.info == 'FAILED') {
        //       // alert('获取您当前位置失败！')
        //       alert(JSON.stringify(data))
        //     }
        //   });
        // });
      },
      onPlusReady() {
        var x = 0
        var y = 0
        plus.geolocation.getCurrentPosition(function(p){
          y = parseFloat(p.coords.longitude)
          x = parseFloat(p.coords.latitude)
          // alert('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude);
        }, function(e){
          alert('Geolocation error: ' + e.message);
        } );
        this.this_x = x
        this.this_y = y
        // alert(this.this_y,'/',this.this_x)
      }
    }
    // created:function() {
    //   this.onPlusReady()
    // }
  }
</script>

<style scoped>
  #container{
    width: 100%;
    position: fixed;
    top: 0px;
    bottom: 12vw;
    /*line-height: 200px;*/
    text-align: center;
    /*height: 569.6px;*/
  }
</style>
