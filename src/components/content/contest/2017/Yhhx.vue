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
        <p>社交网络是web 2.0的重要组成部分。在社交网络中根据用户信息构建用户画像，在商业广
          告、金融信贷、舆情管控等领域都将发挥重大作用。本题目为参赛者提供真实微博数据，对用
          户画像中的用户标签问题进行分析，希望发现和培养在社交网络大数据挖掘领域的专业技术人才。</p>
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
          <p>比赛数据均来源于真实的微博数据，包括近10万用户的行为信息数据和约250万条社交关系数据。比赛数据分为训练集和测试集两部分。</p>
        <!-- <h5>数据量要求</h5>
        <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='yhhx'> -->
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
              <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='yhhx'>
          </li>
          <li>
            <p>weibo_user.csv, 部分用户信息数据文件，其数据格式为：</p>
            <img :src="require('../../../../assets/contest/details/yhhx2.png')" alt='yhhx'>
          </li>
          <li>
            <p>weibo_relation.csv，用户关系数据文件，其数据格式为：</p>
            <img :src="require('../../../../assets/contest/details/yhhx3.png')" alt='yhhx'>
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
        <ol>
          <li>根据预测正确标签数量的比例对比赛结果进行评分。</li>
          <li>最终得分 = 预测正确标签数量/预测标签总数量</li>
        </ol>
        <p>举例说明：如果总共需预测4类标签共2万个，某参赛团队总共正确预测了1.5万个标签，那么得分score=1.5/2=0.75。</p>
        <p>按照得分从大到小进行排序，得到各参赛队排名。</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <p>提交结果文件为txt格式，不同字段之间用英文逗号做间隔，文件结构如下：</p>
        <img :src="require('../../../../assets/contest/details/yhhx7.png')" alt='yhhx'>
        <p>文件统一采用UTF-8无BOM编码。</p>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E7%94%A8%E6%88%B7%E7%94%BB%E5%83%8F%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
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
  img {
    max-width: 900px;
  }
  p, li {
    font-size: 15px;
  }
</style>
