<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>语音关键词检测</el-breadcrumb-item>
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
        <p>本项评测的对象为有害音频特定关键词检测技术，即检测给定音频内容中是否存在 有害信息相关的关键词。</p>
      </div>
      <div class="introdution" v-if="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <p>单只队伍人数上限：5人</p>
        <p>单支队伍每日提交次数上限：20次</p>
        <h4>附加规则</h4>
        <p>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</p>
      </div>
      <div class="introdution" v-if="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>1、数据集:</h5>
        <p>TRAIN/DOCUMENT_TRAIN  训练集文档</p>
        <p>TRAIN/ANNOTATION_TRAIN 训练集标注</p>
        <p>TEST/IMAGES_TEST  测试集文档</p>
        <h5>2、数据说明</h5>
        <p>1. 样例数据：910篇</p>
        <p>2. 训练数据： 10000</p>
        <p>3. 测试数据：3000</p>
        <h5>3、数据格式</h5>
        <h5>&nbsp;&nbsp;3.1 数据字段：</h5>
        <!-- <img src='http://10.10.28.40:8082/images/contest/gjccq1.png' alt='gjccq'> -->
        <img :src="require('../../../../assets/contest/details/gjccq1.png')" alt='gjccq'>
        <h5>&nbsp;&nbsp;3.2 数据样例</h5>
        <img :src="require('../../../../assets/contest/details/gjccq5.png')" alt='gjccq'>
        <img :src="require('../../../../assets/contest/details/gjccq6.png')" alt='gjccq6'>
        <p>训练集数据和对应的标注文档id相同，参赛队伍需要读取训练数据和对应关键词标注文档进行训练。</p>
      </div>
      <div class="introdution" v-if="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>需要分别对每篇文档的抽取结果进行评价，本评测采用MRR(mean reciprocal rank)进行评价。对于文档i，假设人工标注的关键词词典大小是n，评测公式定义如下：</p>
        <img :src="require('../../../../assets/contest/details/gjccq2.png')" alt='gjccq'>
        <p>其中，Mi是关键词词典中每一个词与抽取结果中最相似的词的匹配程度（即相似度），Pi是关键词词典中每一个词在抽取结果中的排序位置，对于不在抽取结果中的关键词，1 / Pi = 0</p>
        <p>为了对任务进行综合评价，我们综合每篇文档的评价结果，对关键词抽取系统进行综合评价，采用MRR的均值作为评价指标，假设一共有K篇文档，则:</p>
        <img :src="require('../../../../assets/contest/details/gjccq3.png')" alt='gjccq'>
        <p>最后选用综合评的结果，给出每个参赛队伍得分。</p>
      </div>
      <div class="introdution" v-if="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式</li>
          <li>提交结果文件使用UTF-8编码，文件从上到下每一行为对应的抽取的测试集数据的关键词。例如：第一行对应第一条测试集数据的关键词，以此类推。每行中连续两个关键词使用空格隔开，格式如：</li>
        </ol>
        <img :src="require('../../../../assets/contest/details/gjccq4.png')" alt='gjccq'>
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
        { text: '比赛介绍' }
        // { text: '比赛规则' },
        // { text: '比赛数据' },
        // { text: '评分标准' },
        // { text: '提交要求' }
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
