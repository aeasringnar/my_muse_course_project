<template>
    <div>
      <mu-appbar style="width: 100%;height: 11vw;" color="primary">
        <mu-button icon slot="left" @click="open = !open">
          <mu-icon size="32" value="menu"></mu-icon>
        </mu-button>
        home
        <mu-button icon slot="right" >
          <mu-icon size="32" value="search"></mu-icon>
        </mu-button>
      </mu-appbar>
      <!--<div>-->
        <!--<iframe src="https://m.amap.com/navi/?dest=116.470098,39.992838&destName=阜通西&hideRouteIcon=1&key=5e71f5b194d178ad67c2e02225301a8d"-->
                <!--frameborder="0" width="100%" height="500vw"></iframe>-->
      <!--</div>-->
      <div id="container" :style="{height: heightData}"></div>
      <mu-drawer :open.sync="open" :docked="docked" :left="position">
        <mu-list>
          <mu-list-item button>
            <mu-list-item-title>分类一</mu-list-item-title>
          </mu-list-item>
          <mu-list-item button>
            <mu-list-item-title>分类二</mu-list-item-title>
          </mu-list-item>
          <mu-list-item  @click="open = false" button>
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </div>
</template>

<!--<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3&key=5e71f5b194d178ad67c2e02225301a8d"></script>-->
<script>
  import AMap from 'AMap'
  var map
  export default {
    name: "home",
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
      var newheight = this.clientHeight - 25 - ((this.clientHeight) / 100) * 12
      console.log(newheight)
      this.heightData = newheight + 'px'
    },
    methods: {
      init:function () {
        map = new AMap.Map('container',{
          resizeEnable: true,
          zoom:15
          // center: [116.397428, 39.90923]
        })
        // AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.PlaceSearch'],function () {
        //   map.addControl(new AMap.ToolBar())
        //   // map.addControl(new AMap.Scale())
        //   // map.addControl(new AMap.Geolocation())
        //   map.addControl(new AMap.PlaceSearch())
        // })

        map.plugin('AMap.Geolocation', function () {
          var geolocation = new AMap.Geolocation({
            useNative: true,         // 使用sdk辅助定位
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          map.addControl(geolocation);
          geolocation.getCurrentPosition();
          // AMap.event.addListener(geolocation, 'complete',onComplete);//返回定位信息
          // AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
          AMap.event.addListener(geolocation, 'complete', function(data) {
            this.this_x = data.position.getLng() //定位成功返回的经度
            this.this_y = data.position.getLat() //定位成功返回的纬度
            // alert(this.this_x,this.this_y)
          }); //返回定位信息
          AMap.event.addListener(geolocation, 'error', function(data) {
            if (data.info == 'FAILED') {
              // alert('获取您当前位置失败！')
              alert(JSON.stringify(data))
            }
          });
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
