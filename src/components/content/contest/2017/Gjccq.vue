<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>关键词抽取</el-breadcrumb-item>
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
        <p>关键词抽取任务是从一篇新闻文档中抽取与该文档主题最相关的一些词或者短语。对于给定
          的一组文档，参赛者需要设计一个关键词抽取系统，用于抽取每篇文档的关键词，提供的关
          键词数量不允许超过10个。参赛者不允许使用外部数据资源，且关键词必须从文本中提取。
          如果一个关键词有多种同义形式，抽取出一个就算对。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <p>单只队伍人数上限：5人</p>
        <h4>附加规则</h4>
        <p>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</p>
        <p>外部数据：本赛题除了允许使用“竞赛数据”中提供的数据，仅允许使用其他参赛者均可获取到的公开数据，不允许使用任何私有数据，所使用的外部数据需在竞赛报告书中说明。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>1、数据集:</h5>
        <p>INPUT/TRAIN/KEYWORD_TRAIN  训练集文档</p>
        <p>INPUT/TRAIN/ANNOTATION_TRAIN 训练集标注</p>
        <p>INPUT/TEST/KEYWORD_TEST  测试集文档</p>
        <h5>2、数据说明</h5>
        <p>1. 样例数据：910篇</p>
        <p>2. 训练数据： 10000</p>
        <p>3. 测试数据：3000</p>
        <h5>3、数据格式</h5>
        <h5>&nbsp;&nbsp;3.1 数据字段：</h5>
        <!-- <img src='http://10.10.28.40:8082/images/contest/gjccq1.png' alt='gjccq'> -->
        <!-- <img :src="require('../../../../assets/contest/details/gjccq1.png')" alt='gjccq'> -->
        <table :class="tableClass" style="width: 80%;margin: 0 auto;">
          <thead>
            <tr>
              <th>字段</th>
              <th>说明</th>
              <th>备注</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>样本编号</td>
              <td>自动增长</td>
            </tr>
            <tr>
              <td>Title</td>
              <td>样本标题</td>
              <td></td>
            </tr>
            <tr>
              <td>Context</td>
              <td>样本内容</td>
              <td></td>
            </tr>
            <tr>
              <td>keywords</td>
              <td>关键词</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <h5>&nbsp;&nbsp;3.2 数据样例</h5>
        <!-- <img :src="require('../../../../assets/contest/details/gjccq5.png')" alt='gjccq'> -->
        <div v-html="compiledGjccq1"></div>
        <!-- <img :src="require('../../../../assets/contest/details/gjccq6.png')" alt='gjccq6'> -->
        <div v-html="compiledGjccq2"></div>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>需要分别对每篇文档的抽取结果进行评价，本评测采用MRR(mean reciprocal rank)进行评价。对于文档i，假设人工标注的关键词词典大小是n，评测公式定义如下：</p>
        <img :src="require('../../../../assets/contest/details/gjccq2.png')" alt='gjccq'>
        <p>其中，Mi是关键词词典中每一个词与抽取结果中最相似的词的匹配程度（即相似度），Pi是关键词词典中每一个词在抽取结果中的排序位置，对于不在抽取结果中的关键词，1 / Pi = 0</p>
        <p>为了对任务进行综合评价，我们综合每篇文档的评价结果，对关键词抽取系统进行综合评价，采用MRR的均值作为评价指标，假设一共有K篇文档，则:</p>
        <img :src="require('../../../../assets/contest/details/gjccq3.png')" alt='gjccq'>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式</li>
          <li>提交结果文件使用UTF-8无BOM编码，文件从上到下每一行为对应的抽取的测试集数据的关键词。例如：第一行对应第一条测试集数据的关键词，以此类推。每行中连续两个关键词使用空格隔开，格式如：</li>
        </ol>
        <img :src="require('../../../../assets/contest/details/gjccq4.png')" alt='gjccq'>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../../store'
const Marked = require('marked')
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
      ],
      tableClass: {
        'table': true,
        'table-bordered': true,
        'table-hover': true,
        'table-striped': true,
        'table-condensed': true
      },
      gjccq1: `
      // 训练集数据
      <Text>
        <ID>1<ID>
        <Title>习近平：扎实把“十三五”发展蓝图变为现实</Title>
        <Content>
          新华社北京1月30日电 中共中央政治局1月29日下午就“十三五”时期我国经济社会发展的战略重点进行第三十次集体学习。
          中共中央总书记习近平在主持学习时强调，发展战略重点，是“十三五”时期我国发展的“衣领子”，“牛鼻子”。抓准、抓住、
          抓好战略重点，是保证“十三五”发展开好头、起好步的关键，是保证全面建成小康社会决胜阶段获得全胜的关键。要准确
          把握“十三五”时期我国发展的战略重点，做到胸有成竹、落实右策、行动有策，以奋发有为的精神状态、攻坚克难的拼
          搏意志、只争朝夕的紧迫劲头，通过抓好发展战略重点带动发展全局，把“十三五”发展宏伟蓝图一步一步变为现实。
        </Content>
      </Text>
      `,
      gjccq2: `
      // 训练集关键词标注文档
      <Class>
        <ID>1</ID>
        <keywords>习近平 十三五 发展蓝图 经济发展</keywords>
      </Class>
      `
    }
  },
  computed: {
    compiledGjccq1 () {
      return Marked(this.gjccq1, { sanitize: true })
    },
    compiledGjccq2 () {
      return Marked(this.gjccq2, { sanitize: true })
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
