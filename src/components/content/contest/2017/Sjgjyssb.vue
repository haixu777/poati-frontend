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
        <h4>任务介绍</h4>
        <p>本任务的目标是从给定语料中抽取出描述指定事件的关键元素。任务的输入为一系列专题事件以及与这些事件对应的文档集合，要求针对每个事件从其对应文档中抽取事件关键元素（注意并非每篇文档中的全部实体），关键元素类型包括时间、地点、参与人物及参与组织等实体，语料中不同事件的新闻数量比例严重倾斜。</p>
        <h4>数据集</h4>
        <div class="">
          <h5>1.&nbsp;&nbsp;&nbsp;新闻训练集</h5>
          <p>新闻训练集共包含6000篇新闻报道，新闻报道均来自互联网，涵盖国际、国内、军事、财经、社会五类。新闻内容未经过分词处理。</p>
          <h5>2.&nbsp;&nbsp;&nbsp;新闻测试集</h5>
          <p>新闻测试集共包含4000篇新闻报道，新闻报道均来自互联网，涵盖国际、国内、军事、财经、社会五类。新闻内容未经过分词处理。</p>
        </div>
        <div class="">
          <el-button @click="download" size="small" type="info">比赛题目下载</el-button>
          <transition name="fade">
            <div class="" v-if="canDownload">
              <a :href="require('assets/contest/subject/事件关键元素识别.pdf')" download="事件关键元素识别.pdf">事件关键元素识别.pdf</a>
            </div>
          </transition>
        </div>
      </div>
      <div class="introdution" v-if="activeName=='相关下载'">
        <el-button @click="download">比赛题目下载</el-button>
        <transition name="fade">
          <div class="" v-if="canDownload">
            <a :href="require('assets/contest/subject/事件关键元素识别.pdf')" download="事件关键元素识别.pdf">事件关键元素识别.pdf</a>
          </div>
        </transition>
      </div>
      <div class="introdution" v-if="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
          <li>单支队伍每份数据提交次数上限: 10次</li>
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：本赛题禁止使用外部数据。</li>
        </ol>
      </div>
      <div class="introdution" v-if="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <p>比赛数据为涵盖国际、国内、军事、财经以及社会五类的新闻报道，共20,117篇，其中包含401个事件，每个事件下包含的新闻数据比例严重倾斜。数据包含新闻调试集、新闻调试标注集和新闻测试集。</p>
        <h5>1、数据集</h5>
        <p>&#9312; 新闻调试集</p>
        <p>新闻调试集包含99篇新闻报道，共10个类别，用于调试参赛系统（调试集数据可以在网站下载）。</p>
        <p>&#9313; 新闻调试集标注集</p>
        <p>新闻调试标注集包含新闻调试集中每篇新闻的识别的对应的事件关键元素（调试标注集数据可以在网站下载）。</p>
        <p>&#9314; 新闻测试集</p>
        <p>新闻测试集共包含20117篇新闻报道，分为3份，分别包含2011篇、6,033篇、12,073篇新闻。每一份测试数据的评测分值占最终评测分值的10%、30%、60%。</p>
        <h5>2、数据格式</h5>
        <!-- <p>数据字段</p> -->
        <!-- <img :src="require('../../../../assets/contest/details/sjgjyssb2.png')" alt='sjgjyssb'> -->
        <p>数据样例:</p>
        <div v-html="compiledSjgjyssb1" style="margin: 0 auto; width: 80%;"></div>
        <!-- <img class='zhaolin' :src="require('../../../../assets/contest/details/sjgjyssb3.png')" alt='sjgjyssb'> -->
        <!-- <p style='text-align: center;'>图 1 测试文档样例</p> -->
        <!-- <img :src="require('../../../../assets/contest/details/sjgjyssb4.png')" alt='sjgjyssb' class='zhaolin'> -->
        <!-- <p style='text-align: center;'>图 2 标准结果文档样例</p> -->
        <h5>3、相关下载</h5>
        <p>
          <el-button type="primary" size="small">
            <a href="http://omnwjdv5k.bkt.clouddn.com/sjgjyssb.zip" style="color: #fff;text-decoration: none;">测试集下载</a>
          </el-button>
        </p>
      </div>
      <div class="introdution" v-if="activeName=='评分标准'">
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
      <div class="introdution" v-if="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式</li>
          <li>提交结果文件使用UTF-8无BOM编码。</li>
          <li>结果文件中的每一行对应一篇新闻的关键元素识别结果，形式为“新闻ID号,实体,实体类型,(段落位置,起始位置,结束位置) ”。样例如下图所示，其中时间的表示形式为“yyyy-mm-dd”，若无年份则用xxxx表示，即“xxxx-12-28”。实体类型分为四类，LOC（地理位置），ORG（组织机构），PER（人物），TIME（时间）。其中符号均为英文半角符号。</li>
        </ol>
        <img :src="require('assets/contest/details/sjgjyssb11.png')" alt="">
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/result_%E5%85%B3%E9%94%AE%E5%85%83%E7%B4%A0%E8%AF%86%E5%88%AB.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-if="activeName=='重要日期'">
        <my-schedule></my-schedule>
      </div>
      <div class="introdution" v-if="activeName=='队伍排名'">
        <div class="introdution" v-if="activeName=='队伍排名'">
          <div class="" v-if="checkRank">
            <my-contest-rank :url="'sjgjyssb'" :zhibiao="'precision'" :project="'sjgjyssb'"></my-contest-rank>
          </div>
          <div class="" v-else>
            您无权查看此项目排行
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../../store'
const myContestRank = require('../myContestRank')
const mySchedule = require('./schedule2017')
const marked = require('marked')
const $utils = require('utils')
export default {
  data () {
    return {
      activeName: '比赛介绍',
      canDownload: false,
      checkRank: false,
      conditionStatus: false,
      detailsList: [
        { text: '比赛介绍' },
        // { text: '相关下载' },
        // { text: '比赛规则' },
        // { text: '比赛数据' },
        // { text: '评分标准' },
        // { text: '提交要求' },
        { text: '重要日期' },
        { text: '队伍排名' }
      ],
      tableClass: {
        'table': true,
        'table-bordered': true,
        'table-hover': true,
        'table-striped': true,
        'table-condensed': true
      },
      sjgjyssb1: `
      // 测试文档样例
      <?xml version="1.0" encoding="UTF-8"?>
      <Samples>
        <Sample>
          <SampleID>1</SampleID><!--样本编号--
          <EventID>1</EventID><!--事件编号-->
          <SampleTitle>河北官方：尽快做好特赦工作 不错放不漏赦</SampleTitle><!--样本标题-->
          <SampleContent><!--样本内容-->
            8月30日上午，河北省召开全省特赦部分服刑罪犯电视电话会议，省委政法委常务副书记王
            立山要求全省各级各有关部门充分认识这次特赦的重大意义，认真学习全国人大常委会《关
            于特赦部分服刑罪犯的决定》和中央政法部门制定的实施办法，准确把握特赦条件和基本要
            求，依法准确尽快做好特赦工作，不能错放一人，也不能漏赦一人。
          </SampleContent>
        </Sample>
        <Sample>
        </Sample>
      </Samples>
      `
    }
  },
  components: {
    myContestRank,
    mySchedule
  },
  watch: {
    activeName (name) {
      if (name === '队伍排名') {
        this.fetchUserinfoFromServer()
      }
    }
  },
  methods: {
    fetchUserinfoFromServer (cb) {
      this.$http.get('user/fetchProfile.do')
        .then((res) => {
          if (!$utils.isEmptyObject(res.data)) {
            this.conditionStatus = res.data.userInfo.conditionStatus
            this.checkRank = $utils.contestDownload('事件关键元素识别', res.data.userInfo.contest)
          }
          cb ? cb() : ''
        })
    },
    handleTabClick: function (activeText) {
      this.activeName = activeText
    },
    backToHome: function () {
      store.commit('changeTitle', '首页')
    },
    backToContest: function () {
      let urls = location.href.split('/')
      localStorage.setItem('yearPick', urls[urls.length - 2])
    },
    download: function () {
      this.fetchUserinfoFromServer(() => {
        if (localStorage.getItem('username')) {
          if (this.conditionStatus === 1) {
            if (this.checkRank) {
              this.canDownload = !this.canDownload
            } else {
              this.$message({
                type: 'info',
                message: '您没有权限下载此项目'
              })
            }
          } else {
            this.$message({
              type: 'info',
              message: '请耐心等待审核通过后下载'
            })
          }
        } else {
          this.$message({
            type: 'info',
            message: '请登录后下载'
          })
        }
      })
    }
  },
  computed: {
    compiledSjgjyssb1 () {
      return marked(this.sjgjyssb1, { sanitize: true })
    }
  },
  mounted () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
    store.commit('changeTitle', '邀请赛介绍')
  }
}
</script>

<style lang="scss" scoped>
.introdution {
  padding-bottom: 20px;
  h4 {
    padding-left: 10px;
    border-left: 4px solid #24ca85;
  }
}
p, li {
  font-size: 15px;
}
img {
  // max-width: 900px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
