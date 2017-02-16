<template lang="html">
  <div class="home_container">
    <el-carousel height="400px">
      <el-carousel-item v-for="item in 4">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <div class="newest_contest">
      <div class="title_container container">
        <h3>最新竞赛</h3>
        <router-link :to="'/contest'">
          <button type="button" name="button" class="btn btn-sm btn-success" @click="toogleActive('竞赛')">更多竞赛</button>
        </router-link>
      </div>
      <div class="container">
        <el-row type="flex" justify="center">
          <el-col :span="4" v-for="item,index in newest_contest_list" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img src="../../assets/test.png" class="image">
              <div style="padding: 14px;">
                <span>{{ item.title }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.time }}</time>
                  <router-link :to="'/contest/'+item.path">
                    <el-button type="text" class="button" @click="handleContestClick(item.path)">立即参赛</el-button>
                  </router-link>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
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
        <router-link :to="'/expert'">
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
  data () {
    return {
      newest_contest_list: [
        { path: 'shrsb', img: '../../assets/test.jpg', title: '说话人识别', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'ypdb', img: '../../assets/test.jpg', title: '音频对比', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'yygjcjc', img: '../../assets/test.jpg', title: '语音关键词检测', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'tdspsb', img: '../../assets/test.jpg', title: '特定视频识别', time: '2017-3-1 ～ 2017-3-15' }
      ]
    }
  },
  components: {
    Swipe,
    SwipeItem
  },
  methods: {
    toogleActive: function (text) {
      store.commit('changeTitle', text)
    },
    handleContestClick: function (text) {
      store.commit('changeTitle', '竞赛')
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

    .el-carousel__item h3 {
      color: #475669;
      font-size: 14px;
      opacity: 0.75;
      line-height: 150px;
      margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
      background-color: #d3dce6;
    }

    // -------- <el-card> start ------------
    .el-card {
      text-align: left;
    }

    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }
    // -------- </el-card> end -------------
  }
</style>
