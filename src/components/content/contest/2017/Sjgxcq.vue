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
      <div class="introdution" v-if="activeName=='比赛规则'">
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
      <div class="introdution" v-if="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <h5>数据介绍</h5>
        <p>数据均来源于互联网新闻，涵盖国际、国内、军事、财经以及社会五类。</p>
        <h5>数据集</h5>
        <p>INPUT/EVENT_SCHEMA 事件参数文档</p>
        <p>INPUT/TRAIN/DOCUMENT_TRAIN 训练新闻文档</p>
        <p>INPUT/TRAIN/ANNOTATION_TRAIN	训练标注文档</p>
        <p>INPUT/TEST/DOCUMENT_TEST	测试新闻文档</p>
        <h5>数据样例</h5>
        <!-- <img :src="require('../../../../assets/contest/details/sjgxcq1.png')" alt='sjgxcq'> -->
        <div v-html="compiledSjgxcq1" style="margin: 0 auto; width: 60%;"></div>
        <!-- <img :src="require('../../../../assets/contest/details/sjgxcq2.png')" alt='sjgxcq'> -->
        <div v-html="compiledSjgxcq2" style="margin: 0 auto; width: 60%;"></div>
        <h5>数据获取</h5>
        <p>竞赛数据仅向参赛者开放,请先登录或注册</p>
      </div>
      <div class="introdution" v-if="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>关系抽取采用准确率、召回率以及F1-Measure作为评价指标。事件中的每个角色可以转换成一个Tuple:</p>
        <img :src="require('../../../../assets/contest/details/sjgxcq3.png')" alt='sjgxcq'>
        <p>参赛系统的输出结果的关系集合记为 R= {r1, r2, ... , rm},标准结果的(Gold St
          andard)的关系集合记为 G = {g1, g2, ... , gn},我们定义R中的元素ri与G中的元
          素gi等价，当且gi仅当rj，相当于实现精确匹配。</p>
          <p>基于以上等价关系，我们定义集合R与G的交集为</p>
          <img :src="require('../../../../assets/contest/details/sjgxcq4.png')" alt='sjgxcq'>
      </div>
      <div class="introdution" v-if="activeName=='提交要求'">
        <h4>提交要求</h4>
        <ol>
          <li>代码相关文件：完整代码、代码说明文档、算法说明文档</li>
          <li>结果文件：一个文本格式的文件，采用UTF-8无BOM编码，文件内一行代表一个事件角色，同
            一个事件的多个角色占用多行，每一行具体的格式是：</li>
        </ol>
        <img :src="require('../../../../assets/contest/details/sjgxcq5.png')" alt='sjgxcq'>
        <h4>附录 （事件分类信息表）</h4>
        <table :class="tableClass" style="width: 80%; margin: 0 auto;">
          <thead>
            <tr>
              <th>事件分类</th>
              <th>角色</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td>事故</td>
              <td>原因（地震，车祸等）</td>
            </tr>
            <tr>
              <td></td>
              <td>受伤人员（当没有具体人名时可以填类似于“12人”）</td>
            </tr>
            <tr>
              <td></td>
              <td>死亡人员（同上受伤人员）</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>冲突（和袭击合并）</td>
              <td>冲突方 1（袭击者）</td>
            </tr>
            <tr>
              <td></td>
              <td>冲突方 2（被袭击者）</td>
            </tr>
            <tr>
              <td></td>
              <td>武器（炸弹，枪，刀等）</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>外交</td>
              <td>外交方</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>会议政策</td>
              <td>主题（如果是会议用名称即可）</td>
            </tr>
            <tr>
              <td></td>
              <td>参与者</td>
            </tr>
            <tr>
              <td></td>
              <td>结果文件／协议</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>典礼</td>
              <td>典礼名字</td>
            </tr>
            <tr>
              <td></td>
              <td>参与者</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>军事</td>
              <td>涉及国家</td>
            </tr>
            <tr>
              <td></td>
              <td>武器</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>政权变化</td>
              <td>涉及人物</td>
            </tr>
            <tr>
              <td></td>
              <td>涉及政党</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
            <tr class="info">
              <td>人物</td>
              <td>涉及人（如李光耀）</td>
            </tr>
            <tr>
              <td></td>
              <td>状态（如死亡）</td>
            </tr>
            <tr>
              <td></td>
              <td>时间（格式统一为 2017-01-01）</td>
            </tr>
            <tr>
              <td></td>
              <td>地点</td>
            </tr>
          </tbody>
        </table>
        <!-- <img :src="require('../../../../assets/contest/details/sjgxcq6.png')" alt='sjgxcq'> -->
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E4%BA%8B%E4%BB%B6%E5%85%B3%E7%B3%BB%E6%8A%BD%E5%8F%96%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-show="activeName=='队伍排名'">
        <my-contest-rank :url="'sjgxcq'"></my-contest-rank>
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
      tableClass: {
        'table': true,
        'table-bordered': true,
        'table-hover': true,
        'table-striped': true,
        'table-condensed': true
      },
      sjgxcq1: `
      // 分类信息文档
      <?xml version="1.0" encoding="UTF-8" ?>
      <TAXONOMY>
        <TYPE>
          <TYPE_NAME>事故</TYPE_NAME>
            <ROLES>
              <ROLE>原因</ROLE>
              <ROLE>受伤人员</ROLE>
              <ROLE>死亡人员</ROLE>
              <ROLE>时间</ROLE>
              <ROLE>地点</ROLE>
            </ROLES>
        </TYPE>
        <TYPE>
        ...
        </TYPE>
      </TAXONOMY>
      `,
      sjgxcq2: `
      // 测试数据集
      <?xml version="1.0" encoding="UTF-8" ?>
      <EVENTS>
        <EVENT>
          <EVENT_ID>1</EVENT_ID>
          <EVENT_NAME>习近平访问瑞士</EVENT_NAME>
          <DOCS>
            <DOC>
              <DOC_ID>1</DOC_ID>
                <DOC_TITLE>王毅谈习近平访问瑞士：乱云飞渡仍从容</DOC_TITLE>
                <DOC_CONTENT>
                  1月15日至18日，国家主席习近平对瑞士进行国事访问，
                  出席世界经济论坛年会并访问在瑞士的国际组织。行程结束之际，
                  外交部长王毅向记者介绍此访情况。王毅说，新年伊始，习近平主
                  席2017年首次出访，来到欧洲中心瑞士，来到“世界经济风向标”达
                  沃斯，来到重要多边外交中心日内瓦。面对世界经济低迷不振，逆
                  全球化暗流涌动，国际形势动荡多变，习近平主席登上达沃斯和日
                  内瓦讲坛，紧扣时代命题，讲述中国故事，提出中国主张，贡献中
                  国智慧。乱云飞渡仍从容，世人再次目睹了一个稳健开放自信的中
                  国。
                </DOC_CONTENT>
            </DOC>
            <DOC>
              ...
            </DOC>
          </DOCS>
        </EVENT>
      </EVENTS>
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
    compiledSjgxcq1 () {
      return marked(this.sjgxcq1, { sanitize: true })
    },
    compiledSjgxcq2 () {
      return marked(this.sjgxcq2, { sanitize: true })
    }
  },
  mounted () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
    store.commit('changeTitle', '邀请赛介绍')
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
