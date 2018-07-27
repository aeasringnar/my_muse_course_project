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
      <div id="container"></div>
      <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
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

<script>
  export default {
    name: "home",
    data () {
      return {
        docked: false,
        open: false,
        position: 'left',
      }
    }
  }
</script>

<style scoped>
#container{
  width:300px;
  height: 180px;
}
</style>
