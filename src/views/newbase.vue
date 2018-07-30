<template>
    <div>
      <div>
        <router-view/>
      </div>
      <div class="footer">
        <mu-row>
          <mu-col span="4">
            <div class="grid-cell" @click="home">
              <img :src="home_url" alt="..." style="height: 10vw">
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="course">
              <img :src="course_url" alt="..." style="height: 11vw">
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="user">
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
  // var map = new AMap.Map('container', {
  //   zoom:11,//级别
  //   center: [116.397428, 39.90923],//中心点坐标
  //   viewMode:'3D'//使用3D视图
  // });
  export default {
    name: "newbase",
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
      home() {
        this.home_url = home
        this.course_url = course_no
        this.user_url = user_no
        this.$router.push({ name: 'home'})
      },
      course() {
        this.course_url = course
        this.home_url = home_no
        this.user_url = user_no
        this.$router.push({ name: 'course'})
      },
      user() {
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
    border-top: #eeeeee solid 0.05rem;
    background: #fffffe;
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
