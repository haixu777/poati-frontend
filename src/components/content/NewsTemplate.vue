<template lang="html">
  <div class="news_details_container container">
    <el-breadcrumb separator="/" class="myBread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/news' }">新闻列表</el-breadcrumb-item>
      <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="news_template_details">
      <div class="news_header">
        <h4 class="news_title">{{ news.title }}</h4>
        <p class="news_date">{{ news.time }}</p>
      </div>
      <div class="news_content" v-html="news.text">
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../store'
const utils = require('../../../utils/util')
export default {
  data () {
    return {
      newsId: '',
      news: {}
    }
  },
  methods: {
    handleFetchNewsDetail () {
      this.$http.get('news/details.do',
        {
          params: {
            id: this.newsId
          }
        }
      ).then((d) => {
        if (d.body.success) {
          this.news = {
            title: d.body.newsData.title,
            author: d.body.newsData.author,
            time: utils.formatTime(d.body.newsData.time),
            text: d.body.newsData.text
          }
        }
      })
    }
  },
  mounted () {
    store.commit('changeTitle', '新闻')
    let urls = location.href.split('/')
    this.newsId = urls[urls.length - 1]
    this.handleFetchNewsDetail()
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss">
  .myBread {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
  }
  .ql-align-right {
    text-align: right;
  }
  .ql-align-center {
    text-align: center;
  }
  .news_template_details {
    background: #fff;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid #dfe6ec;
    padding: 0 50px 10px 50px;
    img {
      max-width: 1037px;
    }
    .news_header {
      border-bottom: 1px solid #eee;
      .news_title {
        padding-top: 10px;
      }
      .news_date {
        text-align: right;
      }
    }
    .news_content {
      text-align: left;
    }
  }
  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
