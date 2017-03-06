<template lang="html">
  <div class="home_container">
    <el-carousel height="350px">
      <el-carousel-item v-for="item in banner_list">
        <img :src="item.img" alt="" style="width: 100%;height: 100%;">
      </el-carousel-item>
    </el-carousel>
    <div class="newest_contest">
      <div class="title_container container">
        <h3>最新竞赛</h3>
        <router-link :to="'/contest'">
          <button type="button" name="button" class="btn btn-sm btn-primary" @click="toogleActive('竞赛')">更多竞赛</button>
        </router-link>
      </div>
      <div class="container">
        <el-row type="flex" justify="center">
          <el-col :span="5" v-for="item,index in newest_contest_list" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.img" class="image">
              <div style="padding: 14px;">
                <span>{{ item.title }}</span>
                <div class="bottom">
                  <time class="time">{{ item.time }}</time>
                  <router-link :to="'/contest/2017/'+item.path">
                    <el-button type="text" class="button" @click="handleContestClick(item.path)">立即参赛</el-button>
                  </router-link>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="newest_news clearfix">
      <div class="title_container container">
        <h3>最新动态</h3>
        <router-link :to="'/news'">
          <button type="button" name="button" class="btn btn-sm btn-primary" @click="toogleActive('新闻')">更多资讯</button>
        </router-link>
      </div>
      <div class="newest_news_container">
        <div class="news_item container clearfix">
          <template v-for="item in newest_news_list">
            <div class="news_details clearfix">
              <div class="news_item_left">
                <img :src="item.avator" alt="">
              </div>
              <div class="news_item_right">
                <router-link :to="'/news/details/'+item.id" @click.native="handleToNewsDetail(item.id)">
                  <h5 style="font-weight: 800; margin-top: 0;">{{ item.time + ' ' + item.title }}</h5>
                </router-link>
                <!-- <p>{{ item.desc }}</p> -->
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="expert_recommend">
      <div class="title_container container">
        <h3>专家推荐</h3>
        <router-link :to="'/expert'">
          <button type="button" name="button" class="btn btn-sm btn-primary" @click="toogleActive('专家')">更多专家</button>
        </router-link>
      </div>
      <div class="expert_recommend_container container">
        <el-row :gutter="20" type="flex" justify="space-around">
          <template v-for="item in expertList">
            <el-col :span="4" style="padding: 0;">
              <el-row>
                <img :src="item.avator" :alt="item.name">
              </el-row>
              <el-row style="padding: 0 10px;">
                <h5 style="color: #1D8CE0;">{{ item.name }}</h5>
                <p>{{ item.title }}</p>
              </el-row>
            </el-col>
          </template>
        </el-row>
      </div>
    </div>
    <div class="partner_company container">
      <div class="title_container container">
        <h3 id="partner_title">合作伙伴</h3>
      </div>
      <div class="partner_container">
        <el-row>
          <el-col>111</el-col>
          <el-col>222</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vue-swipe'
import store from '../../store'
const utils = require('../../../utils/util')

export default {
  data () {
    return {
      banner_list: [
        { img: 'https://img.alicdn.com/tps/TB1Qi6FPFXXXXaJXFXXXXXXXXXX-1440-340.png' },
        { img: 'https://img.alicdn.com/tps/TB1ds8NPXXXXXaKapXXXXXXXXXX-1440-340.png' },
        { img: 'https://gtms01.alicdn.com/tps/i1/TB1OWyfHXXXXXXhaFXXwu0bFXXX.png' },
        { img: 'https://img.alicdn.com/tps/TB1PviVPFXXXXb4XpXXXXXXXXXX-1440-340.png' }
      ],
      newest_contest_list: [
        { path: 'shrsb', img: require('../../assets/contest/shrsb.jpg'), title: '说话人识别', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'ypdb', img: require('../../assets/contest/yhhx.jpg'), title: '音频对比', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'yygjcjc', img: require('../../assets/contest/sjgxyc.jpg'), title: '语音关键词检测', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'tdspsb', img: require('../../assets/contest/gjccq.jpg'), title: '特定视频识别', time: '2017-3-1 ～ 2017-3-15' }
      ],
      newest_news_list: [
        { id: '1', title: '网络舆情分析结果', time: '2017-3-1', desc: '阿卡今年是达安寺大家按达科水济济你的教科书啊是看见的那块水济你的健康三大兰看到你啦开始的大赛', avator: 'http://static.wid.org.cn/img/18a41e0e-54b9-406a-b506-b529c0ae3e84.png' },
        { id: '2', title: '僵尸可拿到家', time: '2017-2-28', desc: '阿卡今年是达科静安寺大家按时递交那胜兰达科那胜兰看到你啦开始的呢', avator: 'http://static.wid.org.cn/img/18a41e0e-54b9-406a-b506-b529c0ae3e84.png' },
        { id: '3', title: '卡民生东路', time: '2017-2-26', desc: '阿卡今年是达科静俺是达科家那是达科技能安寺大家按时递交那胜兰达科那胜兰看到你啦开始的呢', avator: 'http://static.wid.org.cn/img/18a41e0e-54b9-406a-b506-b529c0ae3e84.png' },
        { id: '4', title: '阿卡民生东路卡', time: '2017-2-14', desc: '阿卡今年是达科静安寺大家按时递交那胜兰达科那胜兰看到你啦开始的呢', avator: 'http://static.wid.org.cn/img/18a41e0e-54b9-406a-b506-b529c0ae3e84.png' }
      ],
      expertList: [
        { avator: 'http://static.int-yt.com/img/6384cc6d-a19c-45f4-822d-7f3ac451cf48.png', name: '陈恩红', title: '中国科学技术大学计算机学院副院长、教授' },
        { avator: 'http://static.int-yt.com/img/97b59fb9-d5ea-4d66-928c-07924e9be5be.png', name: '车品觉', title: '阿里巴巴集团副总裁' },
        { avator: 'http://static.int-yt.com/img/d4580279-f518-42eb-8a35-aac7fa688fc2.png', name: '陈恩红', title: '中国科学技术大学计算机学院副院长、教授' },
        { avator: 'http://static.int-yt.com/img/57180b3b-30eb-483a-ac07-8261d88f0e71.png', name: '卜佳俊', title: '浙江大学软件学院教授' },
        { avator: 'http://static.wid.org.cn/img/4ab81219-f243-44cf-99d1-a8e94625c425.jpg', name: '陈恩红', title: '中国科学技术大学计算机学院副院长、教授' }
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
    },
    handleToNewsDetail: function (id) {
      store.commit('changeTitle', '新闻')
      console.log(id)
    },
    handleFetchNewestNewsFromServer () {
      this.$http.get('http://10.10.28.40:8080/iie-icm/api/news/fetchNewest.do')
        .then((d) => {
          this.newest_news_list = d.body.newsList
          this.newest_news_list.forEach(function (item) {
            item.time = utils.formatTime(item.time, false)
          })
        })
    }
  },
  mounted: function () {
    store.commit('changeTitle', '首页')
    this.handleFetchNewestNewsFromServer()
  }
}
</script>
<style lang="scss">

  .home_container {
    width: 100%;
    > div {
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
      margin-bottom: 10px;
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
      background: rgba(55, 178, 77, 0.8);
      .news_item {
        margin: 0 auto;
        .news_details {
          margin: 10px auto;
          width: 50%;
          height: 100px;
          float: left;
          .news_item_left {
            width: 50%;
            float: left;
            img {
              height: 90px;
            }
          }
          .news_item_right {
            width: 50%;
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
      margin-top: 13px;
      line-height: 12px;
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
