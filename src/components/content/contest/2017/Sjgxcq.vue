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
        <p>本任务的主要目标是从众多的新闻文档中提取相关事件的关键参数。在前两个任务（事件
          样本发现、事件关键元素识别）中，已经完成了文档的归类以及专题事件的实体/数值提
          取，本任务是基于以上的任务完成的。首先我们需要对专题事件进行分类，在特定的类别
          下（见附录），每个事件都有固定的参数类型（比如袭击类型，那么在表格中规定只能有袭
          击者、被袭击者、武器三种参数），我们需要做的就是尽量从之前提取的实体或者数值中找
          到相应的对象填充到参数中去（不一定填充完全），完成事件参数的提取。</p>
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
        <h5>数据介绍</h5>
        <p>数据均来源于互联网，主要为新闻网站的数据，其中事件类型涵盖国际、国内、军事、财
          经以及社会五类。通过人工标注得到每类新闻事件所包含的实体，以txt的形式保存作为标
          准结果。</p>
        <h5>数据集</h5>
        <p>TEST/SAMPLES_TEST 测试文档</p>
        <p>SCHEMA/TAXONOMY_STANDARD 标准分类信息文件</p>
        <p>STANDARD/RESULTS_ STANDARD 标准结果文件</p>
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
          <li>结果文件：一个文本格式的文件，采用UTF-8编码，文件内一行代表一个事件角色，同
            一个事件的多个角色占用多行，每一行具体的格式是：</li>
        </ol>
        <img :src="require('../../../../assets/contest/details/sjgxcq5.png')" alt='sjgxcq'>
        <img :src="require('../../../../assets/contest/details/sjgxcq6.png')" alt='sjgxcq'>
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
