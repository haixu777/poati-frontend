<template lang="html">
  <div class="home_container clearfix">
    <swipe class="my-swipe" :speed="1000" :auto="5000">
      <swipe-item class="slide1">
        <img src="" alt="111">
      </swipe-item>
      <swipe-item class="slide2">
        <img src="" alt="222">
      </swipe-item>
      <swipe-item class="slide3">
        <img src="" alt="333">
      </swipe-item>
    </swipe>
    <div class="newest_contest clearfix">
      <h3>最新竞赛</h3>
      <div class="newest_contest_container clearfix">
        <div class="">
          111
        </div>
        <div class="">
          222
        </div>
        <div class="">
          333
        </div>
        <div class="">
          444
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'

export default {
  components: {
    Swipe,
    SwipeItem
  }
}
</script>
<style lang="scss">

  .home_container {
    width: 100%;
    height: 400px;
    .my-swipe {
      .mint-swipe-item {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .mint-swipe-indicators {
        .is-active {
          background: green;
        }
      }
    }

    .newest_contest {
      width: 100%;
      height: 450px;
      border: 1px solid #000;
      clear: both;
      h3 {
        font-size: 20px;
      }
      .newest_contest_container {
        clear: both;
        > div {
          display: inline-block;
          width: 250px;
          height: 350px;
          border: 1px solid #000;
          margin: 10px;
        }
      }
    }
  }
</style>
