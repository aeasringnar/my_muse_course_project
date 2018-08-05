<template>
    <div>
      <div>
        <router-view/>
      </div>
      <div class="footer">
        <mu-row>
          <mu-col span="4">
            <div class="grid-cell" @click="home">
              <img :src="$store.state.home_url" alt="..." style="height: 10vw">
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="course">
              <img :src="$store.state.course_url" alt="..." style="height: 11vw">
            </div></mu-col>
          <mu-col span="4">
            <div class="grid-cell" @click="user">
              <img :src="$store.state.user_url" alt="..." style="height: 10vw;">
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
  import $ from 'jquery'
  var oHeight = $(document).height(); //屏幕当前的高度
  // alert(oHeight)
  $(window).resize(function(){
    // alert('ok')
    if($(document).height() < oHeight){
      $(".footer").css("position","static");
    }else{
      $(".footer").css("position","fixed");
    }
  });
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
        this.$store.state.home_url = home
        this.$store.state.course_url = course_no
        this.$store.state.user_url = user_no
        this.$router.push({ name: 'home'})
      },
      course() {
        this.$store.state.course_url = course
        this.$store.state.home_url = home_no
        this.$store.state.user_url = user_no
        this.$router.push({ name: 'course'})
      },
      user() {
        this.$store.state.user_url = user
        this.$store.state.course_url = course_no
        this.$store.state.home_url = home_no
        this.$router.push({ name: 'user'})
      },
    },
    created: function() {
      this.clientHeight = `${document.documentElement.clientHeight}`
      // alert(this.clientHeight)
    },
    watch:{
      $route(to,from){
        console.log(to.path);
        switch (to.path) {
          case '/home':
            this.home()
            break
          case '/course':
            this.course()
            break
          case '/user':
            this.user()
            break
          case '/login':
            console.log(to.path);
            break
          default:
            console.log(to.path);
            break
        }
      }
    },
  }
</script>

<style scoped>
  .footer{
    /*display: none;*/
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
