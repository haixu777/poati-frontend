<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>事件关系抽取</el-breadcrumb-item>
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
        <p>从新闻文档中提取相应新闻事件的相关参数。本任务提供每一篇新闻文档对应的新闻事件及关
          键元素集合，需要识别出事件的类别，以及该事件类别下每一个参数对应的基本实体。新闻事
          件类别及对应的参数见下表：每个事件类别都有固定的参数类型（比如袭击类型，那么在表格
          中规定只能有袭击者、被袭击者、武器三种参数），我们需要做的就是从已知的事件关键元素
          （即实体或者数值）中找到相应的对象填充到参数中去（不一定填充完全），完成事件参数
          的提取。</p>
          <ol>
            <li>输入：一组新闻文档，其中每篇文档对应的新闻事件及关键元素集合已给定。</li>
            <li>输出：每篇新闻文档对应的新闻事件类别，以及该事件类别下每一个角色参数对应的基本实体。</li>
          </ol>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
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
        <p>数据均来源于互联网新闻，涵盖国际、国内、军事、财经以及社会五类。</p>
        <h5>数据集</h5>
        <p>INPUT/EVENT_SCHEMA 事件参数文档</p>
        <p>INPUT/TRAIN/DOCUMENT_TRAIN 训练新闻文档</p>
        <p>INPUT/TRAIN/ANNOTATION_TRAIN	训练标注文档</p>
        <p>INPUT/TEST/DOCUMENT_TEST	测试新闻文档</p>
        <h5>数据样例</h5>
        <img :src="require('../../../../assets/contest/details/sjgxcq1.png')" alt='sjgxcq'>
        <img :src="require('../../../../assets/contest/details/sjgxcq2.png')" alt='sjgxcq'>
        <h5>数据获取</h5>
        <p>竞赛数据仅向参赛者开放,请先登录或注册</p>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>关系抽取采用准确率、召回率以及F1-Measure作为评价指标。事件中的每个角色可以转换成一个Tuple:</p>
        <img :src="require('../../../../assets/contest/details/sjgxcq3.png')" alt='sjgxcq'>
        <p>参赛系统的输出结果的关系集合记为 R= {r1, r2, ... , rm},标准结果的(Gold St
          andard)的关系集合记为 G = {g1, g2, ... , gn},我们定义R中的元素ri与G中的元
          素gi等价，当且gi仅当rj，相当于实现精确匹配。</p>
          <p>基于以上等价关系，我们定义集合R与G的交集为</p>
          <img :src="require('../../../../assets/contest/details/sjgxcq4.png')" alt='sjgxcq'>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>代码相关文件：完整代码、代码说明文档、算法说明文档</li>
          <li>结果文件：一个文本格式的文件，采用UTF-8无BOM编码，文件内一行代表一个事件角色，同
            一个事件的多个角色占用多行，每一行具体的格式是：</li>
        </ol>
        <img :src="require('../../../../assets/contest/details/sjgxcq5.png')" alt='sjgxcq'>
        <h4>附录 （事件分类信息表）</h4>
        <img :src="require('../../../../assets/contest/details/sjgxcq6.png')" alt='sjgxcq'>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E4%BA%8B%E4%BB%B6%E5%85%B3%E7%B3%BB%E6%8A%BD%E5%8F%96%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
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
    max-width: 800px;
  }
</style>
