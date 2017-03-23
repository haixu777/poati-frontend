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
        <p>给定事件名称和该事件下的4-5篇新闻报道，从全部语料中发现描述该事件的相关样本。</p>
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
        <!-- <img :src="require('../../../../assets/contest/details/sjybfx1.png')" alt='sjybfx'> -->
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
        <p>说明：给定事件名称“我国拟特赦四类服刑罪犯”以及以上相关4篇报道，上表中“相关样本”一列为从给定的样本中发现的相关样本。</p>
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
        <p>数据均来源于互联网新闻报道，涵盖国际、国内、军事、财经以及社会五类。</p>
        <h5>数据集</h5>
        <p>INPUT/DOCUMENT 新闻报道文档</p>
        <p>INPUT/EVENT 事件描述文档</p>
        <h5>数据格式</h5>
        <p>数据样例</p>
        <!-- <img class='zhaolin' :src="require('../../../../assets/contest/details/sjybfx3.png')" alt='sjybfx'> -->
        <!-- <P style='text-align: center;'>图 1 测试文档样例</P> -->
        <div v-html="compiledYbfx1" style="width: 80%; margin: 0 auto;"></div>
        <!-- <img class='zhaolin' :src="require('../../../../assets/contest/details/sjybfx4.png')" alt='sjybfx'> -->
        <!-- <p style='text-align: center'>图 2 输入格式文档样例</p> -->
        <div v-html="compiledYbfx2" style="width: 80%; margin: 0 auto;"></div>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>事件样本发现采用准确率、召回率以及F1-Measure作为评价指标，格式为（Pi, Ri, Fi）
          。事件i的样本中，正确发现为该事件的样本数目是a，错误划归为该事件的样本数目是b，将
          属于该事件的样本错误划归为其它事件的样本数目是c</p>
        <p>准确率：Pi = a / (a+b)，衡量的是类别的查准率</p>
        <p>召回率：Ri = a / (a+c)，衡量的是类别的查全率</p>
        <p>F1-measure：Fi = 2PiRi / (Pi + Ri) ，衡量的是查全率和查准率的综合</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>提交结果文件为txt格式，存放于OUTPUT/RESULT目录下。</li>
          <li>提交结果文件使用UTF-8无BOM编码。</li>
        </ol>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E6%A0%B7%E6%9C%AC%E5%8F%91%E7%8E%B0%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-show="activeName=='队伍排名'">
        <h4>队伍排名</h4>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../../store'
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
      tableClass: {
        'table': true,
        'table-bordered': true,
        'table-hover': true,
        'table-striped': true,
        'table-condensed': true
      },
      ybfx1: `
      // 测试文档样例
      <?xml version="1.0" encoding="UTF-8"?>
      <Samples>
        <Sample>
          <SampleID>1</SampleID><!--样本编号-->
          <SampleTitle>河北官方：尽快做好特赦工作 不错放不漏赦</SampleTitle><!--样本标题-->
          <SampleContent><!--样本内容-->
            8月30日上午，河北省召开全省特赦部分服刑罪犯电视电话会议，省委政法委常务副书记王
            立山要求全省各级各有关部门充分认识这次特赦的重大意义，认真学习全国人大常委会《关
            于特赦部分服刑罪犯的决定》和中央政法部门制定的实施办法，准确把握特赦条件和基本要
            求，依法准确尽快做好特赦工作，不能错放一人，也不能漏赦一人。
          </SampleContent>
        </Sample>
        <Sample>
          <SampleID>2</SampleID>
          <SampleTitle>我国33年来首次行使特赦决定权</SampleTitle>
          <SampleContent>
            今日提请十二届全国人大常委会审议。正在服刑的参加过抗战和解放战争的老兵等四
            类服刑人员，或将获得特赦。这是全国人大常委会依据现行宪法规定，33年来首次行
            使特赦决定权。我国上一次特赦是1975年。
          </SampleContent>
        </Sample>
      </Samples>
      `,
      ybfx2: `
      // 输入格式文档样例
      <?xml version="1.0" encoding="UTF-8"?>
      <Samples>
        <Sample>
        <EventID>1</EventID><!--事件编号-->
        <EventTitle>我国拟特赦四类服刑罪犯</EventTitle><!--事件名称-->
        <RelSampleID><!--与事件相关的报道-->
          <SampleID>1</SampleID><!--样本编号-->
          <SampleID>2</SampleID>
          <SampleID>4</SampleID>
          <SampleID>6</SampleID>
        </RelSampleID>
        </Sample>
        <Sample>
        </Sample>
      </Samples>
      `
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
