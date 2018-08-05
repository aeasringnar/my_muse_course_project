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
      <p>使用h5+定位：</p>
      <p>x坐标为：{{x}}y坐标为：{{y}}</p>
      <button @click="getLocation()">试一下</button>
      <button type="button" @click="onPlusReady()">试一下(弹出)</button>
      <!--<div id="container" :style="{height: heightData}"></div>-->
      <mu-drawer :open.sync="open" :docked="docked" :left="position">
        <mu-list>
          <mu-list-item @click="open_amap" button>
            <mu-list-item-title>高德测试</mu-list-item-title>
          </mu-list-item>
          <mu-list-item @click="open_bmap" button>
            <mu-list-item-title>百度测试</mu-list-item-title>
          </mu-list-item>
          <mu-list-item  @click="open = false" button>
            <mu-list-item-title>Close</mu-list-item-title>
          </mu-list-item>
        </mu-list>
      </mu-drawer>
    </div>
</template>

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
        x: '',
        y: ''
      }
    },
    methods: {
      open_amap() {
        this.$router.push({ name:'amap' })
      },
      open_bmap() {
        this.$router.push({ name:'bmap' })
      },
      geoInf( position ) {
        // var str = "";
        // str += "地址："+position.addresses+"\n";//获取地址信息
        // str += "坐标类型："+position.coordsType+"\n";
        // var timeflag = position.timestamp;//获取到地理位置信息的时间戳；一个毫秒数；
        // str += "时间戳："+timeflag+"\n";
        var codns = position.coords;//获取地理坐标信息；
        var lat = codns.latitude;//获取到当前位置的纬度；
        // str += "纬度："+lat+"\n";
        var longt = codns.longitude;//获取到当前位置的经度
        this.x = lat
        this.y = longt
        // str += "经度："+longt+"\n";
        // var alt = codns.altitude;//获取到当前位置的海拔信息；
        // str += "海拔："+alt+"\n";
        // var accu = codns.accuracy;//地理坐标信息精确度信息；
        // str += "精确度："+accu+"\n";
        // var altAcc = codns.altitudeAccuracy;//获取海拔信息的精确度；
        // str += "海拔精确度："+altAcc+"\n";
        // var head = codns.heading;//获取设备的移动方向；
        // str += "移动方向："+head+"\n";
        // var sped = codns.speed;//获取设备的移动速度；
        // str += "移动速度："+sped;
        // console.log(JSON.stringify(position));
        // outLine( str );
      },
      getLocation() {
        console.log('ok')
        plus.geolocation.getCurrentPosition( this.geoInf, function ( e ) {
          outSet( "获取位置信息失败："+e.message );
        }, {geocode:false} );
      },
      onPlusReady() {
        plus.geolocation.getCurrentPosition(function(p){
          alert('Geolocation\nLatitude:' + p.coords.latitude + '\nLongitude:' + p.coords.longitude + '\nAltitude:' + p.coords.altitude);
        }, function(e){
          alert('Geolocation error: ' + e.message);
        } );
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
