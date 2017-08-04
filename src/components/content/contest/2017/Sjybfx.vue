<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>事件样本发现</el-breadcrumb-item>
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
        <p>本任务的目标是从给定语料中查找与指定事件对应的新闻语料。任务的输入为N个专题事件及每个事件对应的若干篇种子文档，要求从给定新闻语料中找出与这N个事件对应的全部新闻文档。</p>
        <h4>数据集</h4>
        <div class="">
          <h5>1.&nbsp;&nbsp;&nbsp;训练语料集</h5>
          <p>训练语料集共包含6000篇新闻报道，新闻报道均来自互联网，涵盖国际、国内、军事、财经、社会五类。新闻内容未经过分词处理。</p>
          <h5>2.&nbsp;&nbsp;&nbsp;测试语料集</h5>
          <p>测试语料集包含4000篇新闻报道，新闻报道均来自互联网，涵盖国际、国内、军事、财经、社会五类。新闻内容未经过分词处理。</p>
        </div>
        <div class="">
          <el-button @click="download" size="small" type="info">比赛题目下载</el-button>
          <transition name="fade">
            <div class="" v-if="canDownload">
              <a :href="require('assets/contest/subject/事件样本发现.pdf')" download="事件样本发现.pdf">事件样本发现.pdf</a>
            </div>
          </transition>
        </div>
        <!-- <p>给定事件名称和该事件下的4-5篇新闻报道，从全部语料中发现描述该事件的相关样本。</p>
        <ul>
          <li>输入：事件名称、相关报道4-5篇。</li>
          <li>输出：与事件对应的所有新闻报道。</li>
        </ul>
        <h5>如下事例:</h5>
        <h6>事件名称 > 十二届全国人大第十六次会议举行</h6>
        <h6>报道1 > 河北官方：尽快做好特赦工作 不错放不漏赦</h6>
        <p>8月30日上午，河北省召开全省特赦部分服刑罪犯电视电话会议，省委政法委常务副书记王
          立山要求全省各级各有关部门充分认识这次特赦的重大意义，认真学习全国人大常委会《关
          于特赦部分服刑罪犯的决定》和中央政法部门制定的实施办法，准确把握特赦条件和基本要求
          ，依法准确尽快做好特赦工作，不能错放一人，也不能漏赦一人。</p>
        <h6>报道2 > 我国33年来首次行使特赦决定权</h6>
        <p>今日提请十二届全国人大常委会审议。正在服刑的参加过抗战和解放战争的老兵等四类服刑
          人员，或将获得特赦。这是全国人大常委会依据现行宪法规定，33年来首次行使特赦决定
          权。我国上一次特赦是1975年。</p>
        <h6>报道3 > 专家:不排除9月3日有罪犯特赦出狱的可能性</h6>
        <p>全国人大常委会法工委副主任郎胜回应说：特赦是一项宪法制度，从1975年到现在40年没有
          执行，但是也有历史条件。特赦和大赦不同，特赦都是在特定历史条件下、特定时期为了体现
          人道，或者为了反映一个时期的纪念意义，促进社会和谐做出的。作为一项宪法制度，82宪
          法作了规定以后，从来没有实行过。</p>
        <h6>报道4 > 四类实行特赦罪犯中未成年人占比较大</h6>
        <p>特赦的四类服刑罪犯包括：参加过中国人民抗日战争、中国人民解放战争的;中华人民共和
          国成立以后，参加过保卫国家主权、安全和领土完整对外作战的，但犯 贪污受贿犯罪，故意杀
          人、强奸、抢劫、绑架、放火、爆炸、投放危险物质或者有组织的暴力性犯罪，黑社会性质
          的组织犯罪，危害国家安全犯罪，恐怖活动犯罪 的，有组织犯罪的主犯以及累犯除外;年满
          七十五周岁、身体严重残疾且生活不能自理的;犯罪的时候不满十八周岁，被判处三年以下有
          期徒刑或者剩余刑期在一年 以下的，但犯故意杀人、强奸等严重暴力性犯罪，恐怖活动犯罪
          ，贩卖毒品犯罪的除外。</p>
        <h5>样本发现结果:</h5>
        <img :src="require('../../../../assets/contest/details/sjybfx1.png')" alt='sjybfx'>
        <table :class="tableClass">
          <thead>
            <tr>
              <th>事件名称</th>
              <th>相关样本</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>我国拟特赦四类服刑罪犯</td>
              <td>习近平签署主席特赦令 特赦四类服刑罪犯</td>
            </tr>
            <tr>
              <td></td>
              <td>我国逆特赦四类服刑罪犯 建国后曾七次特赦</td>
            </tr>
            <tr>
              <td></td>
              <td>我国拟特赦四类服刑罪犯，时隔40年重启特赦制度</td>
            </tr>
            <tr>
              <td></td>
              <td>我国重启尘封40年特赦制度 逆特赦四类服刑罪犯</td>
            </tr>
          </tbody>
        </table>
        <p>说明：给定事件名称“我国拟特赦四类服刑罪犯”以及以上相关4篇报道，上表中“相关样本”一列为从给定的样本中发现的相关样本。</p> -->
      </div>
      <div class="introdution" v-show="activeName=='相关下载'">
        <el-button @click="download">比赛题目下载</el-button>
        <transition name="fade">
          <div class="" v-if="canDownload">
            <a :href="require('assets/contest/subject/事件样本发现.pdf')" download="事件样本发现.pdf">事件样本发现.pdf</a>
          </div>
        </transition>
      </div>
      <div class="introdution" v-if="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
          <li>单支队伍每份数据提交上限: 10次</li>
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：不允许使用外部数据资源。</li>
        </ol>
      </div>
      <div class="introdution" v-if="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <!-- <h5>数据介绍</h5> -->
        <p>比赛数据集分为：调试语料集、调试样例集、调试样例标注集、新闻语料集、测试样例集。</p>
        <h5>1、数据集</h5>
        <p>&#9312; 调试语料集</p>
        <p>调试语料集包含99篇新闻报道，新闻报道均来自互联网，涵盖国际、国内、军事、财经、社会五类。新闻内容未经过分词处理（调试语料集数据可以在网站下载）。</p>
        <p>&#9313; 调试样例集</p>
        <p>调试样例集包含10组样例，每组样例给出事件信息和与该事件相关的3篇报道（调试集数据可以在网站下载）。</p>
        <p>&#9314; 调试样例标注集</p>
        <p>调试样例标注集包含调试案例的正确答案，给出每组样例事件的所有相关报道（调试标注集数据可以在网站下载）。</p>
        <p>&#9315; 新闻语料集</p>
        <p>新闻语料集包含20117篇新闻报道，新闻报道均来自互联网，涵盖国际、国内、军事、财经、社会五类。新闻内容未经过分词处理。</p>
        <p>&#9316; 测试样例集</p>
        <p>测试样例集共包含400组样例，分为3份，分别包含40组、120组、240组样例。每一份测试数据的评测分值占最终评测分值的10%、30%、60%。</p>
        <h5>2、数据格式</h5>
        <p>数据样例</p>
        <!-- <img class='zhaolin' :src="require('../../../../assets/contest/details/sjybfx3.png')" alt='sjybfx'> -->
        <!-- <P style='text-align: center;'>图 1 测试文档样例</P> -->
        <div v-html="compiledYbfx1" style="width: 80%; margin: 0 auto;"></div>
        <!-- <img class='zhaolin' :src="require('../../../../assets/contest/details/sjybfx4.png')" alt='sjybfx'> -->
        <!-- <p style='text-align: center'>图 2 输入格式文档样例</p> -->
        <div v-html="compiledYbfx2" style="width: 80%; margin: 0 auto;"></div>
        <h5>3、相关下载</h5>
        <p>
          <el-button type="primary" size="small">
            <a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/sjybfx.zip" style="color: #fff;text-decoration: none;">测试集下载</a>
          </el-button>
        </p>
      </div>
      <div class="introdution" v-if="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>事件样本发现评价采用准确率、召回率以及F值作为评价指标。评分综合每个类别的评价结果，每个类别的权重与该类别的样本数量成反比。事件样本发现的准确率、召回率和F值的计算公式如下：</p>
        <img :src="require('assets/contest/details/sjybfx11.png')" alt="">
        <p>其中C是类别的集合，Ci是属于类别i的样本数量与样本总数的比值，Pi, Ri分别是类别i的准确率、召回率。设类别i的分类结果中，正确分为该类的样本数目是a，错误划归为该类的样本数目是b，将该类错误划归为它类的样本数目是c。类别i的准确率和召回率的计算公式如下：</p>
        <img :src="require('assets/contest/details/sjybfx12.png')" alt="">
        <p>最终排名以综合评分的F值作为依据。</p>
      </div>
      <div class="introdution" v-if="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式。</li>
          <li>提交结果文件使用UTF-8无BOM编码。每组测试用例应对应两行输出。第一行为EventID，对应测试集某组用例的EventID。第二行为SampleID，对应程序从新闻语料集中找到的新闻样本的SampleID。具体请见结果文件实例。</li>
        </ol>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sjybfx_%E8%BE%93%E5%87%BA%E7%BB%93%E6%9E%9C%E6%A0%B7%E5%BC%8F.txt" download="sjybfx_输出结果样式">下载</a></p>
      </div>
      <div class="introdution" v-if="activeName=='重要日期'">
        <my-schedule></my-schedule>
      </div>
      <div class="introdution" v-if="activeName=='队伍排名'">
        <div class="introdution" v-if="activeName=='队伍排名'">
          <div class="" v-if="checkRank">
            <my-contest-rank :url="'sjybfx'" :zhibiao="'precision'" :project="'sjybfx'"></my-contest-rank>
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
      conditionStatus: null,
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
      ybfx1: `
      // 测试样例文档描述
      <?xml version="1.0" encoding="UTF-8"?>
      <Samples>
        <Sample>
          <EventID>123123</EventID><!--事件编号-->
          <EventTitle>一带一路国际合作高峰论坛</EventTitle><!--事件名称-->
          <RelSampleID><!--与事件相关的3篇报道-->
            <SampleID>1231</SampleID><!--样本编号-->
            <SampleID>899</SampleID>
            <SampleID>89798</SampleID>
          </RelSampleID>
        </Sample>
        <Sample><!--以下若干组样例，同上说明-->
        </Sample>
      </Samples>
      `,
      ybfx2: `
      // 新闻语料文档描述
      <?xml version="1.0" encoding="UTF-8"?>
      <Samples>
        <Sample>
          <SampleID>1743</SampleID><!--样本编号-->
          <SampleTitle></SampleTitle><!--样本标题-->
          <publishDate>2017-01-09</publishDate><!--样本发表日期-->
          <SampleContent>《中国共产党纪律检查机关监督执纪工作规则(试行)》<!--样本内容-->
            十八届中央纪委七次全会8日在京闭幕，全会审议通过了《中国共产党纪律检查机关监督执纪工作规则(试行)》。
            全会一致认为，制定监督执纪工作规则，是纪检机关贯彻党的十八届六中全会精神，落实全面从严治党部署，带头强化自我约束把监督执纪权力关进制度笼子，做到正人先正己的实际行动，充分表面了严格自律的担当和决心。
            全会审议通过的《中国共产党纪律检查机关监督执纪工作规则(试行)》，紧扣监督执纪工作流程，明确请示报告、线索处置、初步核实、立案审查、案件处理、涉案款物管理等工作流程；规定谈话函询的工作程序，执纪审查的审批权限、调查谈话和证据收集的具体要求；提炼有效管用的实招，上升为制度规范，把纪委的自我监督同接受党内监督、社会监督等有机结合，确保党和人民赋予的权力不被滥用。
            全会指出，中央纪委带头执行规则，加强对监督执纪工作的领导、管理和监督，各级纪委要切实履行自身建设主体责任，严肃处理执纪违纪、失职失责行为。
          </SampleContent>
        </Sample>
        <Sample><!--以下若干新闻样本，同上说明-->
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
            this.checkRank = $utils.contestDownload('事件样本发现', res.data.userInfo.contest)
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
    compiledYbfx1 () {
      return marked(this.ybfx1, {sanitize: true})
    },
    compiledYbfx2 () {
      return marked(this.ybfx2, {sanitize: true})
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
