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
        <p>文本分类任务是对给定一组未经分词的文本文档中的每一篇文档指定唯一类别。按文本类型分为两个子任务：新闻报道分类和微博分类。其中，新闻报道10万篇，覆盖15个类别；微博10万条，覆盖15个类别。数据比例严重倾斜且动态变化。参赛者需要训练两个分类系统，实现对新闻报道和微博的自动分类。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <p>单只队伍人数上限：5人</p>
        <p>单支队伍每份数据提交上限: 10次</p>
        <h4>附加规则</h4>
        <p>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</p>
        <p>外部使用：不允许使用外部数据资源。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <p>文本分类分为两个子任务，新闻报道长文本和微博短文本，但是数据比例严重倾斜。比赛数据集分为：新闻调试集、新闻调试标注集、新闻训练集、新闻训练标注集、新闻测试集，微博调试集、微博调试标注集、微博训练集、微博训练标注集、微博测试集。</p>
        <h5>1、数据集:</h5>
        <p>&#9312; 新闻调试集</p>
        <p>新闻调试集包含150篇新闻报道，共15个类别，每个类别包含10篇新闻，用于调试参赛系统（调试集数据可以在网站下载）。</p>
        <p>&#9313; 新闻调试集标注集</p>
        <p>新闻调试标注集包含新闻调试集中每篇新闻的对应类别，共15个类别（调试标注集数据可以在网站下载）。</p>
        <p>&#9314; 新闻训练集</p>
        <p>新闻训练集包含70,000篇新闻报道，文本未经过分词处理。</p>
        <p>&#9315; 新闻训练标注集</p>
        <p>新闻训练标注集包含新闻训练集中每篇新闻的对应类别，共15个类别。</p>
        <p>&#9316; 新闻测试集</p>
        <p>新闻测试集共包含30,000篇新闻报道，文本未经过分词处理。新闻测试集分为3份，分别包含3000条、9,000条、18,000篇新闻。每一份测试数据的评测分值占最终评测分值的10%、30%、60%。</p>
        <p>&#9317; 微博调试集</p>
        <p>微博调试集包含150条微博，共15个类别，每个类别包含10条微博，用于调试参赛系统（调试集数据可以在网站下载）。</p>
        <p>&#9318; 微博调试标注集</p>
        <p>微博调试标注集包含微博调试集中每条微博的对应类别，共15个类别（调试标注集数据可以在网站下载）。</p>
        <p>&#9319; 微博训练集</p>
        <p>微博训练集包含70,000条微博，文本未经过分词处理。</p>
        <p>&#9320; 微博训练标注集</p>
        <p>微博训练标注集包含微博训练集中每条微博的对应类别，共15个类别。</p>
        <p>&#9321; 微博测试集</p>
        <p>微博测试集共包含30,000条微博，文本未经过分词处理。微博测试集分为3份，分别包含3,000条、9,000条、18,000条微博。每一份测试数据的评测分值占最终评测分值的10%、30%、60%。</p>
        <h5>2、数据格式:</h5>
        <p>数据样例：</p>
        <!-- <img :src="require('../../../../assets/contest/details/wbfl1.png')" alt="wbfl"> -->
        <div v-html="compiledWbfl1" style="width: 75%; margin: 0 auto;"></div>
        <div v-html="compiledWbfl2" style="width: 75%; margin: 0 auto;"></div>
        <h5>3、相关下载</h5>
        <p>
          <el-button type="primary" size="small">
            <a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/wbfl.zip" style="color: #fff;text-decoration: none;">测试集下载</a>
          </el-button>
        </p>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>文本分类评价采用准确率、召回率以及F值作为评价指标。评分综合每个类别的评价结果，每个类别的权重与该类别的样本数量成反比。新闻报道和微博分类的准确率、召回率和F值的计算公式如下：</p>
        <img :src="require('assets/contest/details/wbfl3.png')" alt='wbfl'>
        <p>其中C是类别的集合，Ci是属于类别i的样本数量与样本总数的比值，分别是类别i的准确率、召回率。设类别i的分类结果中，正确分为该类的样本数目是a，错误划归为该类的样本数目是b，将该类错误划归为它类的样本数目是c。类别i的准确率和召回率的计算公式如下：</p>
        <img :src="require('assets/contest/details/wbfl4.png')" alt='wbfl'>
        <p>最终排名以综合评分的F值作为依据，新闻报道和微博分值各占50%。</p>
        <!-- <h5>1.单类别测评</h5>
        <p>类别i的分类结果中，正确分为该类的样本数目是a，错误划归为该类的样本数目是b，将该类错误划归为它类的样本数目是c。</p>
        <p>准确率：Pi = a / (a+b)，衡量的是类别的查准率。</p><p>召回率：Ri = a / (a+c)，衡量的是类别的查全率。</p>
        <p>F1-measure：Fi = 2PiRi / (Pi + Ri)，衡量的是查全率和查准率的综合</p>
        <h5>2.综合测评</h5>
        <p>为了对任务进行综合评价，我们综合每个类别的评价结果，对该任务进行综合评价，同样采
          用准确率、召回率以及F1-Measure作为评价指标。每个类别的权重与该类别的样本数量成反比。Ci是属于类别i的样本数量与样本总数的比值。</p>
        <img :src="require('../../../../assets/contest/details/wbfl2.png')" alt='wbfl'>
        <p>最后使用综合评测结果的F1值作为排名依据，新闻报道和微博分值各占50%。</p> -->
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式</li>
          <li>提交结果文件使用UTF-8无BOM编码，结果文件中的每一行对应一篇新闻（或一条微博）的分类结果，用类别ID表示，数值从1到15。具体请见实例文件。</li>
        </ol>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E6%96%87%E6%9C%AC%E5%88%86%E7%B1%BB%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-show="activeName=='队伍排名'">
        <my-contest-rank :url="'wbfl'" :project="'wbfl'"></my-contest-rank>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../../store'
const myContestRank = require('../myContestRank')
const marked = require('marked')
export default {
  data () {
    return {
      activeName: '比赛介绍',
      detailsList: [
        { text: '比赛介绍' },
        { text: '比赛规则' },
        { text: '比赛数据' },
        { text: '评分标准' },
        { text: '提交要求' },
        { text: '队伍排名' }
      ],
      wbfl1: `
      // 新闻内容示例
      <Text>
        <ID>1</ID>
        <Title>深度：萨德抵韩已无情面好讲 中国可出10招打痛韩美</Title>
        <Content>
          美韩军方3月7日宣布，在韩部署“萨德”的第一批装备于3月6日晚抵韩，“萨德”部署进城正式启动，
          韩国未就该情况向中国做任何通报。对此，中国外交部发言人耿爽3月7日回应说，我们坚决反对美韩
          在韩国部署“萨德”反导系统，将坚决采取必要措施维护自身的安全利益。由此产生的一些后果由美韩
          来承担。再次强烈敦促有关方面停止部署进城，不要在错误的道路上越走越远。
        </Content>
      </Text>
      `,
      wbfl2: `
      // 新闻标注事例
      <Class>
        <ID>1</ID>
        <classname>军事</classname>
      </Class>
      `
    }
  },
  components: {
    myContestRank
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
  computed: {
    compiledWbfl1 () {
      return marked(this.wbfl1, { sanitize: true })
    },
    compiledWbfl2 () {
      return marked(this.wbfl2, { sanitize: true })
    }
  },
  mounted () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
    store.commit('changeTitle', '邀请赛')
    if (location.href.split('#')[1] === 'rank') {
      this.activeName = '队伍排名'
    }
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
