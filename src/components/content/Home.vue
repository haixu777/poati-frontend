<template lang="html">
  <div class="home_container">
    <el-carousel height="450px" v-if="false">
      <el-carousel-item v-for="item in banner_list">
        <img :src="item.img" alt="banner" style="width: 100%;height: 100%;">
      </el-carousel-item>
    </el-carousel>
    <div class="banner" style="height:450px;padding:0;">
      <img
        src="http://omnwjdv5k.bkt.clouddn.com/images/banner/banner_1280_new2.jpg"
        style="width:100%;height:100%;"
        alt="banner">
    </div>
    <!-- 最新竞赛 -->
    <contest-newest></contest-newest>
    <!-- 比赛排行 -->
    <contest-rank v-if="false"></contest-rank>
    <!-- 最新动态 -->
    <contest-news v-if="false"></contest-news>
    <!-- 专家报告 -->
    <contest-expert v-if="false"></contest-expert>
    <!-- 合作伙伴 -->
    <contest-partner></contest-partner>
  </div>
</template>

<script>
import store from '../../store'
const contestRank = require('./Home/ContestRank')
const contestNewest = require('./Home/ContestNewest')
const contestNews = require('./Home/ContestNews')
const contestExpert = require('./Home/ContestExpert')
const contestPartner = require('./Home/ContestPartner')

export default {
  components: {
    contestRank,
    contestNewest,
    contestNews,
    contestExpert,
    contestPartner
  },
  data () {
    return {
      show: true,
      banner_list: [
        { img: 'http://omnwjdv5k.bkt.clouddn.com/images/banner/banner_new2.jpg' },
        { img: 'http://omnwjdv5k.bkt.clouddn.com/images/banner/banner_new3.jpg' }
      ]
    }
  },
  methods: {
  },
  mounted: function () {
    store.commit('changeTitle', '首页')
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>
<style lang="scss">
  .home_container {
    // margin-top: 60px;
    width: 100%;
    > div {
      margin-bottom: 20px;
      padding: 10px;
    }
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
      margin-bottom: 20px;
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
      margin-bottom: 20px;
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
      color: #fff;
      // background: rgba(55, 178, 77, 0.8);
      background: #b0b0b0;
      .news_item {
        margin: 0 auto;
        .news_details {
          margin: 10px auto;
          width: 50%;
          height: 100px;
          float: left;
          .news_item_left {
            width: 40%;
            float: left;
            img {
              border-radius: 5px;
              background: #fff;
              width: 150px;
              height: 90px;
            }
          }
          .news_item_right {
            width: 60%;
            text-align: left;
            float: right;
            a {
              color: #fff;
              text-decoration: none;
            }
          }
        }
      }
    }

    .partner_company {
      .title_container {
        // margin-bottom: 0;
      }
      .partner_container {
        .partner_card {
          height: 108px;
          width: 268px;
          border-radius: 3px;
          border: 1px solid #d1dbe5;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
          display: inline-block;
          margin-left: 28px;
        }
        :first-child {
          margin-left: 0;
        }
      }
    }

    .expert_recommend_container {
      text-align: center;
      background: #F3F6F9;
      .el-row {
        > div {
          border: 1px solid #d1dbe5;
          box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    .el-carousel {
      padding: 0;
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
      text-align: center;
      line-height: 12px;
      background: #3281e0;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        button {
          width: 100%;
        }
        span {
          color: #fff;
          font-weight: 700;
        }
      }
    }

    .button {
      padding: 0;
      float: right;
      height: 25px;
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
