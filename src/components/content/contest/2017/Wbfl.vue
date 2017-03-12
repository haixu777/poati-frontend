<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>文本分类</el-breadcrumb-item>
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
        <p>文本分类是指计算机按照预先定义的主题类别,为文档集合中的每个文档确定一个类别。它是文
          本挖掘的一个重要内容。本赛题提供新闻（长文本）与微博（短文本）两类文档数据，文档分为
          训练集文档（提供类别）和测试集文档（隐藏类别）。要求参赛者需要基于训练数据实现一个分
          类系统，实现测试文档的自动分类。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <p>单只队伍人数上限：5人</p>
        <p>单支队伍每日提交次数上限：20次</p>
        <h4>附加规则</h4>
        <p>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>1、数据集:</h5>
        <p>TRAIN/DOCUMENT_TRAIN  训练集文档</p>
        <p>TRAIN/ANNOTATION_TRAIN 训练集标注</p>
        <p>TEST/IMAGES_TEST  测试集文档</p>
        <h5>2、数据说明:</h5>
        <p>文本分类分为两个子任务，新闻属的长文本和微博属的短文本。但是数据比例严重倾斜且动态变化，某些类别的样本只占1%左右。</p>
        <ol>
          <li>样例数据：每个专题10条</li>
          <li>训练数据：新闻8万、微博8万</li>
          <li>测试数据：新闻2万、微博2万</li>
        </ol>
        <h5>&nbsp;&nbsp;2.1 数据字段</h5>
        <img :src="require('../../../../assets/contest/details/wbfl.png')" style='width: 550px;height: 120px;' alt='wbfl'>
        <h5>&nbsp;&nbsp;2.2 数据样例</h5>
        <img :src="require('../../../../assets/contest/details/wbfl3.png')" alt='wbfl3'>
        <img :src="require('../../../../assets/contest/details/wbfl4.png')" alt='wbfl4'>
        <p>训练集数据和对应的标注文档id相同，参赛队伍需要读取训练数据和对应分类标注文档进行训练。</p>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>本评测利用测试集进行评价。采用准确率（Precision）、召回率（Recall）以及F1-Measure作为评价指标，分别对每个类别进行评价，格式为(Pi, Ri, Fi)。</p>
        <h5>1.单类别测评</h5>
        <p>类别i的分类结果中，正确分为该类的样本数目是a，错误划归为该类的样本数目是b，将该类错误划归为它类的样本数目是c。</p>
        <p>准确率：Pi = a / (a+b)，衡量的是类别的查准率。</p><p>召回率：Ri = a / (a+c)，衡量的是类别的查全率。</p>
        <p>F1-measure：Fi = 2PiRi / (Pi + Ri)，衡量的是查全率和查准率的综合</p>
        <h5>2.综合测评</h5>
        <p>为了对任务进行综合评价，我们综合每个类别的评价结果，对该任务进行综合评价，同样采
          用准确率、召回率以及F1-Measure作为评价指标。每个类别的权重与该类别的样本数量成反比。Ci是属于类别i的样本数量与样本总数的比值。</p>
        <img :src="require('../../../../assets/contest/details/wbfl2.png')" alt='wbfl'>
        <p>最后选用综合评测的结果，给出每个参赛队伍得分。</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式</li>
          <li>提交结果文件使用UTF-8编码，文件从上到下每一行为分类的对应测试集数据的类别。例如：第一行对应第一条测试集数据的类别，以此类推。</li>
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
