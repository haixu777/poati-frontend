<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户画像</el-breadcrumb-item>
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
        <p>参赛队伍利用给定的新浪微博数据（包括用户个人信息、用户行为信息、用户微博文本以及用户粉丝列表，详见数据格式部分），进行微博用户画像，具体包括以下四个标签:</p>
        <p>标签1： 推断用户的年龄（共3个标签：-1979/1980-1989/1990+）</p>
        <p>标签2：推断用户的性别（共2个标签：男/女）</p>
        <p>标签3：推断用户的地域（共8个标签：东北/华北/华中/华东/西北/西南/华南/境外）</p>
        <p>标签4：推断用户的兴趣（共13个标签：体育/健康/军事/女性/娱乐/教育/旅游/汽车/社会/科技/航空/读书/财经）</p>
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
        <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='yhhx'>
        <h5>数据格式</h5>
        <p>用户基本信息（帐号，UID，性别，年龄，地点，个人主页等），用户发布的内容（如发表的微博和评论），用户的行为记录（浏览、转发、点赞、收藏），用户的链接关系（如用户之间的粉丝关注关系）等。</p>
        <h5>数据比例</h5>
        <p>每个标签的比例均等，例如用户的兴趣要分布在这13个类别中；大V用户和普通用户的占比：尽量以普通用户为主，如果普通用户不方便标注的话，可以引入大V用户，但是大V用户的占比不要超过总数的50%。</p>
        <h5>数据样例</h5>
        <p>张三，17612312312，女，18，北京，女性，发表的微博：…；评论的微博：…；转发的微博：…；点赞的微博：…；关注：…；粉丝：…；</p>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <ol>
          <li>score = 所有匹配到的4类标签 / 应该匹配到的4类标签</li>
          <li>score范围为 [0,1] </li>
        </ol>
        <p>举例说明：在训练集中，总共带标签的用户数是0.5万，4类标签，参赛团队总共匹配上1.5万个标签，那么得分score = 1.5 / (4*0.5) = 0.75</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为csv格式，包含4个字段age、gender、location、interest，每个字段对应一个标签结果。</li>
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
