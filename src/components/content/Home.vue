<template lang="html">
  <div class="home_container">
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
    <div class="newest_contest">
      <div class="title_container container">
        <h3>最新竞赛</h3>
        <router-link :to="'/news'">
          <button type="button" name="button" class="btn btn-sm btn-success" @click="toogleActive('竞赛')">更多竞赛</button>
        </router-link>
      </div>
      <div class="newest_contest_container container">
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
    <div class="newest_news ">
      <div class="title_container container">
        <h3>最新动态</h3>
        <router-link :to="'/news'">
          <button type="button" name="button" class="btn btn-sm btn-success" @click="toogleActive('新闻')">更多资讯</button>
        </router-link>
      </div>
      <div class="newest_news_container">
        newest_news_container
      </div>
    </div>
    <div class="expert_recommend ">
      <div class="title_container container">
        <h3>专家推荐</h3>
        <router-link :to="'/news'">
          <button type="button" name="button" class="btn btn-sm btn-success" @click="toogleActive('专家')">更多专家</button>
        </router-link>
      </div>
      <div class="expert_recommend_container">
        expert_recommend_cotainer
      </div>
    </div>
    <div class="partner_company container">
      <div class="title_container container">
        <h3 id="partner_title">合作伙伴</h3>
      </div>
      <div class="partner_container">
        expert_cotainer
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'
import store from '../../store'

export default {
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    toogleActive: function (text) {
      console.log(222)
      store.commit('changeTitle', text)
      console.log(store)
    }
  }
}
</script>
<style lang="scss">

  .home_container {
    width: 100%;

    .my-swipe {
      height: 400px;
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

    .title_container {
      margin-top: 20px;
      margin-bottom: 5px;
      h3 {
        font-size: 20px;
        display: inline;
        margin-left: 90px;
      }
      button {
        float: right;
        margin-right: 21px;
      }
      #partner_title {
        margin-left: -28px;
      }
    }

    .newest_contest {
      .newest_contest_container {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        > div {
          display: inline-block;
          width: 250px;
          height: 300px;
          border: 1px solid #000;
          margin: 10px;
        }
      }
    }

    .newest_news {

    }
  }
</style>
