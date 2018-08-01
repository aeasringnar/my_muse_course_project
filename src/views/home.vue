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
      }
    },
    methods: {
      open_amap() {
        this.$router.push({ name:'amap' })
      },
      open_bmap() {
        this.$router.push({ name:'bmap' })
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
