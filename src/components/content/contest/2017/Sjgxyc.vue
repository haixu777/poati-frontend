<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>社交关系预测</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="container_left">
      <ul>
        <template v-for="item in detailsList">
          <li @click="handleTabClick(item.text)" :class="activeName==item.text?'active':''"><a href="javascript:;" style="font-size: 16px;">{{ item.text }}</a></li>
        </template>
      </ul>
    </div>
    <div class="container_right">
      <div class="introdution" v-show="activeName=='比赛介绍'">
        <p>在对社交网络用户行为建模时，预测用户的关注行为是一个重要方面，根据用户的关注行为预测，可以得知用户之间的关联关系、用户的传播属性、社交网络的社群分布等。</p>
        <p>本题目给出新浪微博中真实的局部社交网络结构，给出账号发布的内容及部分社交关系，要求参赛者预测两个用户之间是否存在关注关系。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
          <!-- <li>单支队伍每日提交次数上限: 20次</li> -->
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：本赛题除了允许使用“竞赛数据”中提供的数据，仅允许使用所有参赛者均可获取到的其它公开数据，不允许使用任何私有数据，所使用的外部数据需在竞赛报告书中说明。</li>
        </ol>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>数据介绍</h5>
        <p>比赛数据均来源于真实的微博数据，包括近10万条用户的行为信息数据及相关的社交关系数据。比赛数据分为训练集和测试集两部分。</p>
        <h5>数据集</h5>
        <p>INPUT/TRAIN/weibo_content.csv, weibo_user.csv, weibo_relation.csv 训练集数据</p>
        <p>INPUT/TRAIN/result.csv	训练集标注</p>
        <p>INPUT/TEST/weibo_content.csv, weibo_user.csv, weibo_relation.csv	测试集数据</p>
        <h5>数据格式</h5>
        <p>用户基本信息（帐号，UID，性别，年龄，地点，个人主页等），用户发布的内容（如发表的微博和评论），用户的行为记录（浏览、转发、点赞、收藏），用户的链接关系（如用户之间的粉丝关注关系）等。</p>
        <p>训练数据包括三个文件：</p>
        <ol>
          <li>
            <p>weibo_content.csv,  用户发布微博内容文件，其数据格式为：</p>
            <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='sjgxyc'>
          </li>
          <li>
            <p>weibo_user.csv, 部分用户信息数据文件，其数据格式为：</p>
            <img :src="require('../../../../assets/contest/details/sjgxyc2.png')" alt='sjgxyc'>
          </li>
          <li>
            <p>weibo_relation.csv，用户关系数据文件，其数据格式为：</p>
            <img :src="require('../../../../assets/contest/details/yhhx3.png')" alt='sjgxyc'>
          </li>
        </ol>
        <h5>数据样例</h5>
        <p>微博内容数据：</p>
        <img :src="require('../../../../assets/contest/details/yhhx4.png')" alt='yhhx'>
        <br>
        <p>微博用户数据：</p>
        <img :src="require('../../../../assets/contest/details/yhhx5.jpeg')" alt='yhhx'>
        <br>
        <p>微博关系数据：</p>
        <img :src="require('../../../../assets/contest/details/yhhx6.jpeg')" alt='yhhx'>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>根据比赛结果计算F1值、正确率和召回率，并根据F1值对各参赛团队进行综合排名。</p>
        <p>正确率 = 提取出的正确关注条数 / 提取出的关注条数</p>
        <p>召回率 = 提取出的正确关注条数 / 实际关注条数</p>
        <p>F1 Value = 正确率*召回率 * 2 / (正确率+召回率)</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <p>提交结果文件为txt格式，不同字段之间用英文逗号做间隔，文件结构如下：</p>
        <img :src="require('../../../../assets/contest/details/sjgxyc3.png')" alt='sjgxyc'>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E7%A4%BE%E4%BA%A4%E5%85%B3%E7%B3%BB%E9%A2%84%E6%B5%8B%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../../store'
export default {
  data () {
    return {
      activeName: '比赛介绍',
      detailsList: [
        { text: '比赛介绍' },
        { text: '比赛规则' },
        { text: '比赛数据' },
        { text: '评分标准' },
        { text: '提交要求' }
      ]
    }
  },
  methods: {
    handleTabClick: function (activeText) {
      this.activeName = activeText
    },
    backToHome: function () {
      store.commit('changeTitle', '首页')
    },
    backToContest: function () {
      let urls = location.href.split('/')
      localStorage.setItem('yearPick', urls[urls.length - 2])
    }
  },
  mounted () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
    store.commit('changeTitle', '邀请赛')
  }
}
</script>

<style lang="scss" scoped>
  p, li {
    font-size: 15px;
  }
  img {
    max-width: 900px;
  }
</style>
