<template>
    <div>
      <mu-appbar style="width: 100%;height: 3rem;" color="primary">
        <mu-button icon slot="left" @click="open = !open">
          <mu-icon size="32" value="menu"></mu-icon>
        </mu-button>
        <mu-button icon slot="right" >
          <mu-icon size="32" value="search"></mu-icon>
        </mu-button>
      </mu-appbar>

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
      <!--<mu-row>-->
        <!--<mu-col span="4"><div class="grid-cell"></div></mu-col>-->
        <!--<mu-col span="4"><div class="grid-cell"></div></mu-col>-->
        <!--<mu-col span="4"><div class="grid-cell"></div></mu-col>-->
      <!--</mu-row>-->
      <div style="height: 1000px;background-color: chocolate;margin-bottom: 5rem;">
      </div>
      <div class="footer">
        <mu-row>
          <mu-col span="4">
            <div class="grid-cell" @click="h">
              <div><mu-icon :color="h_color" size="40" value="home"></mu-icon></div>
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="g">
              <mu-icon :color="g_color" size="40" value="grade"></mu-icon>
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="s">
              <mu-icon :color="s_color" size="40" value="search"></mu-icon>
            </div></mu-col>
        </mu-row>
      </div>
    </div>
</template>

<script>
    export default {
      name: "test",
      data () {
        return {
          docked: false,
          open: false,
          position: 'left',
          s_color: 'black',
          h_color: 'red',
          g_color: 'black'
        }
      },
      methods: {
        h() {
          this.h_color = 'red'
          this.g_color = 'black'
          this.s_color = 'black'
        },
        g() {
          this.h_color = 'black'
          this.g_color = 'red'
          this.s_color = 'black'
        },
        s() {
          this.h_color = 'black'
          this.g_color = 'black'
          this.s_color = 'red'
        },
      },
      created: function() {
      }
    }
</script>

<style scoped>
.footer{
  /*display: flex;*/
  position: fixed;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  height: 3.5rem;
  border-top: gray solid 0.05rem;
  background: white;
  width: 100%;
}
.grid-cell {
  border-radius: 0.1rem;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  align-content: center;
  /*background: red;*/
}
.grid-cell div{
  width: 40px;
  height: 40px;
}
</style>
