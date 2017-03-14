<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;">比赛列表</a>
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
        <p>文本分类任务是对一组未经分词的文本文档进行自动分类。其中，新闻报道10万篇，覆盖
          15个类别；微博10万条，覆盖15个类别。数据比例严重倾斜且动态变化。参赛者需要训练
          两个分类系统，实现对新闻报道和微博的自动分类。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <p>单只队伍人数上限：5人</p>
        <h4>附加规则</h4>
        <p>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</p>
        <p>外部使用：本赛题除了允许使用“竞赛数据”中提供的数据，仅允许使用其他参赛者均可
          获取到的公开数据，不允许使用任何私有数据，所使用的外部数据需在竞赛报告书中说明。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>1、数据集:</h5>
        <p>INPUT/TRAIN/DOCUMENT_TRAIN  训练集文档</p>
        <p>INPUT/TRAIN/DOCUMENT_TRAIN 训练集标注</p>
        <p>INPUT/TEST/DOCUMENT_TEST  测试集文档</p>
        <h5>2、数据说明:</h5>
        <p>文本分类分为两个子任务，新闻报道长文本和微博短文本，但是数据比例严重倾斜且动态变化。</p>
        <ol>
          <li>训练数据：新闻5万、微博5万</li>
          <li>测试数据：新闻5万、微博5万</li>
        </ol>
        <h5>3、数据格式:</h5>
        <p>数据样例：</p>
        <img :src="require('../../../../assets/contest/details/wbfl1.png')" alt="wbfl">
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
        <p>最后使用综合评测结果的F1值作为排名依据，新闻报道和微博分值各占50%。</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式</li>
          <li>提交结果文件使用UTF-8无BOM编码，文件从上到下每一行为分类的对应测试集数据的类别。例如：第一行对应第一条测试集数据的类别，以此类推。</li>
        </ol>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E6%96%87%E6%9C%AC%E5%88%86%E7%B1%BB%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
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
