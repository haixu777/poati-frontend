<template lang="html">
  <div class="news_details_container container">
    <el-breadcrumb separator="/" class="myBread">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/news' }">新闻列表</el-breadcrumb-item>
      <el-breadcrumb-item>新闻详情</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="news_details">
      <div class="news_header">
        <h4 class="news_title">第一届全国网络舆情（音视频）分析技术邀请赛视频回顾</h4>
        <p class="news_date">2017-3-1 12:31:22</p>
      </div>
      <div class="news_content">
        news_content
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .myBread {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
  }
  .news_details {
    background: #fff;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid #dfe6ec;
    padding: 0 50px 10px 50px;
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
