<template>
    <div>
      <mu-appbar style="width: 100%;height: 11vw;" color="primary">
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
              <!--<mu-icon :color="h_color" size="40" value="home"></mu-icon>-->
              <img :src="home_url" alt="..." style="height: 10vw">
              <!--<div style="width: 10vw;height: 10vw;background-color: red;"></div>-->
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="c">
              <!--<mu-icon :color="g_color" size="40" value="grade"></mu-icon>-->
              <img :src="course_url" alt="..." style="height: 11vw">
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="u">
              <!--<mu-icon :color="s_color" size="40" value="search"></mu-icon>-->
              <img :src="user_url" alt="..." style="height: 10vw;">
            </div></mu-col>
        </mu-row>
      </div>
    </div>
</template>

<script>
    import home_no from '../static/icon/home_no.png'
    import home from '../static/icon/home.png'
    import course_no from '../static/icon/course_no.png'
    import course from '../static/icon/course.png'
    import user_no from '../static/icon/user_no.png'
    import user from '../static/icon/user.png'
    export default {
      name: "test",
      data () {
        return {
          docked: false,
          open: false,
          position: 'left',
          s_color: 'black',
          h_color: 'red',
          g_color: 'black',
          // home_url: require('../static/icon/home_no.png')
          home_url: home,
          course_url: course_no,
          user_url: user_no
        }
      },
      methods: {
        h() {
          this.home_url = home
          this.course_url = course_no
          this.user_url = user_no
        },
        c() {
          this.course_url = course
          this.home_url = home_no
          this.user_url = user_no
        },
        u() {
          this.user_url = user
          this.course_url = course_no
          this.home_url = home_no
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
  height: 12vw;
  border-top: gray solid 0.05rem;
  background: white;
  width: 100%;
}
.grid-cell {
  height: 15vw;
  display: flex;
  justify-content: center;
  align-content: center;
  /*align-items: center;*/
  /*background: red;*/
}
</style>
