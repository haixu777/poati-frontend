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
        <p>本题目给出某局部社交网络的结构，并给出1万个账号节点及部分关注关联关系，判断给出的两个用户之间是否存在关注关系。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
          <li>单支队伍每日提交次数上限: 20次</li>
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：本赛题除了允许使用“竞赛数据”中提供的数据，仅允许使用所有参赛者均可获取到的其它公开数据，不允许使用任何私有数据，所使用的外部数据需在竞赛报告书中说明。</li>
        </ol>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>数据来源</h5>
        <p>来源于微博</p>
        <h5>数据量要求</h5>
        <img :src="require('../../../../assets/contest/details/sjgxyc1.png')" alt='sjgxyc'>
        <h5>数据格式</h5>
        <p>用户基本信息（帐号，UID，性别，年龄，地点，个人主页等），用户发布的内容（如发表的微博和评论），用户的行为记录（浏览、转发、点赞、收藏），用户的链接关系（如用户之间的粉丝关注关系）等。</p>
        <h5>数据比例</h5>
        <p>每个标签的比例均等，例如用户的兴趣要分布在这13个类别中；大V用户和普通用户的占比：尽量以普通用户为主，如果普通用户不方便标注的话，可以引入大V用户，但是大V用户的占比不要超过总数的50%。</p>
        <h5>数据样例</h5>
        <p>张三，17612312312，女，18，北京，女性，发表的微博：…；评论的微博：…；转发的微博：…；点赞的微博：…；关注：…；粉丝：…；</p>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>根据结果计算F1值、正确率和召回率，并根据F1值进行综合排名。</p>
        <p>F1 Value= 正确率 * 召回率 * 2 / (正确率+召回率)</p>
        <p>正确率 = 提取出的正确关注条数 / 提取出的关注条数</p>
        <p>召回率 = 提取出的正确关注条数 / 实际关注条数</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为csv格式，包含3个字段source、target、isFollowed，前两字段
            表示一条用户关系，第3个字段给出两个用户之间是否存在关注关系的预测。</li>
          <li>文件采用UTF-8编码。</li>
        </ol>
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
  }
}
</script>

<style lang="css">
</style>
