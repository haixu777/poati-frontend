<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>事件关键元素识别</el-breadcrumb-item>
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
        <p>给定事件名称及报道该事件的多篇新闻，从每篇新闻中抽取该事件的关键元素，包括时间、地点、参与人物及参与组织等实体。</p>
        <ol>
          <li>输入：多个新闻事件，其中每个新闻事件对应多篇新闻报道。</li>
          <li>输出：每篇新闻报道中的事件关键元素。</li>
        </ol>
        <p>如下事例:<p>
        <h6>新闻事件 > 河北官方：尽快做好特赦工作 不错放不漏赦</h6>
        <p>8月30日上午，河北省召开全省特赦部分服刑罪犯电视电话会议，省委政法委常务副书记王立
          山要求全省各级各有关部门充分认识这次特赦的重大意义，认真学习全国人大常委会《关于特
          赦部分服刑罪犯的决定》和中央政法部门制定的实施办法，准确把握特赦条件和基本要求，依
          法准确尽快做好特赦工作，不能错放一人，也不能漏赦一人。</p>
        <p>识别结果：</p>
        <img :src="require('../../../../assets/contest/details/sjgjyssb1.png')" alt='sjgjyssb'>
        <p style="text-align: center;">说明：上表中“位置”一列的三元组表示(段落位置，起始位置,结束位置)。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：本赛题除了允许使用“竞赛数据”中提供的数据，仅允许使用所有参赛者
            均可获取到的其它公开数据，不允许使用任何私有数据，所使用的外部数据需在竞赛
            报告书中说明。</li>
        </ol>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>数据介绍</h5>
        <p>数据均来源于互联网，主要为新浪网站的数据以及国外网站作为补充，其中事件类型涵盖国
          际、国内、军事、财经以及社会五类。通过人工标注得到每类新闻事件所包含的实体，以
          txt的形式保存作为标准结果。</p>
        <h5>数据集</h5>
        <p>INPUT/DOCUMENT 测试文档</p>
        <h5>数据格式</h5>
        <!-- <p>数据字段</p> -->
        <!-- <img :src="require('../../../../assets/contest/details/sjgjyssb2.png')" alt='sjgjyssb'> -->
        <p>数据样例:</p>
        <img class='zhaolin' :src="require('../../../../assets/contest/details/sjgjyssb3.png')" alt='sjgjyssb'>
        <p style='text-align: center;'>图 1 测试文档样例</p>
        <!-- <img :src="require('../../../../assets/contest/details/sjgjyssb4.png')" alt='sjgjyssb' class='zhaolin'> -->
        <!-- <p style='text-align: center;'>图 2 标准结果文档样例</p> -->
        <h5>数据获取</h5>
        <p>竞赛数据仅向参赛者开放,请先登录或注册</p>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>事件关键元素识别采用准确率、召回率以及F1-Measure作为评价指标。参赛系统的输出
          结果的实体集合记为 S = { S1, S2, ... , Sm },标准结果的(Gold Standard)的
          实体集合记为 K = { k1, k2, ,,, , kn }，我们定义S中的元素Si与K中的元素Kj等
          价，当且仅当:</p>
        <ol>
          <li>Si.entity = Kj.entity (实体)</li>
          <li>Si.entity_type = Kj.entity_type (实体类型)</li>
          <li>Si.doc_id = Kj.doc_id (实体对应的样本)</li>
          <li>Si.pos = Kj.pos (实体的起止位置)</li>
        </ol>
        <p>基于以上等价关系,基于以上等价关系，我们定义集合与的交集为</p>
        <img :src="require('../../../../assets/contest/details/sjgjyssb5.png')" alt="sjgjyssb">
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式，存放于OUTPUT/RESULT目录下。</li>
          <li>提交结果文件使用UTF-8无BOM编码。</li>
        </ol>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/result_%E5%85%B3%E9%94%AE%E5%85%83%E7%B4%A0%E8%AF%86%E5%88%AB.txt.zip">下载</a></p>
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
