<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>用户画像</el-breadcrumb-item>
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
        <p>社交网络是web 2.0的重要组成部分。在社交网络中根据用户信息构建用户画像，在商业广
          告、金融信贷、舆情管控等领域都将发挥重大作用。本题目为参赛者提供真实微博数据，对用
          户画像中的用户标签问题进行分析，希望发现和培养在社交网络大数据挖掘领域的专业技术人才。</p>
        <p>参赛队伍利用给定的新浪微博数据（包括用户个人信息、用户行为信息、用户微博文本以及用户粉丝列表，详见数据格式部分），进行微博用户画像，具体包括以下四个标签:</p>
        <p>标签1： 推断用户的年龄（共3个标签：-1979/1980-1989/1990+）</p>
        <p>标签2：推断用户的性别（共2个标签：男/女）</p>
        <p>标签3：推断用户的地域（共8个标签：东北/华北/华中/华东/西北/西南/华南/境外）</p>
        <p>标签4：推断用户的兴趣（共13个标签：体育/健康/军事/女性/娱乐/教育/旅游/汽车/社会/科技/航空/读书/财经）</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
          <li>单支队伍每日提交次数上限: 10次</li>
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：不允许使用外部数据资源。</li>
        </ol>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <p>比赛数据包含、微博调试集，微博调试标注集，微博训练集，微博训练标注集，微博测试集。</p>
        <h5>1、数据集:</h5>
        <p>&#9312; 微博调试集</p>
        <p>微博调试集包含XX条分类的用户信息，以及相关（关注与粉丝）用户数据（调试集数据可以在网站下载）。</p>
        <p>&#9313; 微博调试标注集</p>
        <p>微博调试标注集包含对应微博调试集的用户标签（调试集数据可以在网站下载）。</p>
        <p>&#9314; 微博训练集</p>
        <p>微博训练集分别包含6k,7k,9k条的分类用户信息，以及相关（关注与粉丝）用户数据。</p>
        <p>&#9315; 微博训练标注集</p>
        <p>微博训练标注集为对应微博训练集的用户标签。</p>
        <p>&#9316; 微博测试集</p>
        <p>微博训练集分别包含1k,2k,3k条的待分类用户信息，以及相关（关注与粉丝）用户数据。</p>

        <!-- <h5>数据量要求</h5>
        <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='yhhx'> -->
        <h5>2、数据格式</h5>
        <p>训练集与测试集包含两类数据：微博用户信息数据users以及部分的相关（关注与粉丝）用户数据relations。其中微博用户信息数据users为所分类的主用户。</p>
        <p>其中单条用户数据user格式如下：</p>
        <table :class="tableClass">
          <thead>
            <tr>
              <th>Id</th>
              <th>用户id</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>微博用户名</td>
            </tr>
            <tr>
              <td>verified</td>
              <td>表示是否为认证用户，0为未认证，1为认证用户</td>
            </tr>
            <tr>
              <td>fan_list</td>
              <td>微博用户的粉丝列表</td>
            </tr>
            <tr>
              <td>follow_list</td>
              <td>微博用户的关注列表</td>
            </tr>
            <tr>
              <td>contens</td>
              <td>微博用户所发的微博内容</td>
            </tr>
            <tr>
              <td>retweets</td>
              <td>微博用户的转发内容</td>
            </tr>
            <tr>
              <td>supports</td>
              <td>微博用户的点赞内容</td>
            </tr>
          </tbody>
        </table>
        <p>其中fan_list，follow_list，contens，retweets，supports为列表，包含多个子节点。具体文件格式范例如下：</p>
        <div v-html="compiledYhhx1"></div>
        <ol v-if="false">
          <li>
              <p>weibo_content.csv,  用户发布微博内容文件，其数据格式为：</p>
              <!-- <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='yhhx'> -->
              <table :class="tableClass">
                <thead>
                  <tr>
                    <th>字段名</th>
                    <th>类型</th>
                    <th>含义</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>id</td>
                    <td>Int</td>
                    <td>数据编号</td>
                  </tr>
                  <tr>
                    <td>Uid</td>
                    <td>varchar</td>
                    <td>发布用户UID</td>
                  </tr>
                  <tr>
                    <td>mid</td>
                    <td>varchar</td>
                    <td>发布微博的消息ID</td>
                  </tr>
                  <tr>
                    <td>content</td>
                    <td>text</td>
                    <td>具体微博内容字符串</td>
                  </tr>
                  <tr>
                    <td>time</td>
                    <td>datetime</td>
                    <td>微博发布时间</td>
                  </tr>
                </tbody>
              </table>
          </li>
          <li>
            <p>weibo_user.csv, 部分用户信息数据文件，其数据格式为：</p>
            <!-- <img :src="require('../../../../assets/contest/details/yhhx2.png')" alt='yhhx'> -->
            <table :class="tableClass">
              <thead>
                <tr>
                  <th>字段名</th>
                  <th>类型</th>
                  <th>含义</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>uid</td>
                  <td>varchar</td>
                  <td>用户UID</td>
                </tr>
                <tr>
                  <td>name</td>
                  <td>varchar</td>
                  <td>用户昵称</td>
                </tr>
                <tr>
                  <td>sex</td>
                  <td>varchar</td>
                  <td>用户性别</td>
                </tr>
                <tr>
                  <td>location</td>
                  <td>varchar</td>
                  <td>用户地点</td>
                </tr>
                <tr>
                  <td>info</td>
                  <td>varchar</td>
                  <td>用户认证信息</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <p>weibo_relation.csv，用户关系数据文件，其数据格式为：</p>
            <!-- <img :src="require('../../../../assets/contest/details/yhhx3.png')" alt='yhhx'> -->
            <table :class="tableClass">
              <thead>
                <tr>
                  <th>字段名</th>
                  <th>类型</th>
                  <th>含义</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>id</td>
                  <td>Int</td>
                  <td>数据编号</td>
                </tr>
                <tr>
                  <td>Uid</td>
                  <td>varchar</td>
                  <td>发布用户UID</td>
                </tr>
                <tr>
                  <td>Follow_uid</td>
                  <td>varchar</td>
                  <td>关注用户ID</td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
        <!-- <h5>数据样例</h5> -->
        <!-- <p>微博内容数据：</p> -->
        <!-- <img :src="require('../../../../assets/contest/details/yhhx4.png')" alt='yhhx'> -->
        <table :class="tableClass" v-if="false">
          <thead>
            <tr>
              <th>id</th>
              <th>uid</th>
              <th>mid</th>
              <th>content</th>
              <th>time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1024573413</td>
              <td>4068206265805440</td>
              <td>农村大年集，年年乐不疲，淳朴乡与土，尽在年味中，[嘻嘻][嘻嘻][嘻嘻]@武汉晚报...</td>
              <td>2017-01-26 16:30:20</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1024573413</td>
              <td>4066474286406306</td>
              <td>分明一商家促销，却打社区旗号！21日在汉口一小区张贴着一张“燃气安全通知”，内...</td>
              <td>2017-01-26 21:20:20</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1024573413</td>
              <td>3990492304911029</td>
              <td>#我的黄金时代#老婆的爷爷今年虚岁93了，每年国庆节回来都要去看望他。如此高寿...</td>
              <td>2016-12-26 08:30:20</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1024573413</td>
              <td>3960324237123812</td>
              <td>近日，看到一同事用火柴点烟，颇感惊奇。在物质匮乏的年代，火柴是家家户户必不...</td>
              <td>2016-11-25 16:39:20</td>
            </tr>
            <tr>
              <td>5</td>
              <td>1024573413</td>
              <td>3930122324385991</td>
              <td>大批渣土夜间闯红灯。武汉园博园主干道广华路，每晚8点左右，大量渣土车全...</td>
              <td>2016-08-11 13:41:20</td>
            </tr>
            <tr>
              <td>6</td>
              <td>1024573413</td>
              <td>39300598523723423</td>
              <td>为女协警点赞。汉口二七路新村小学门口，每天早上学高峰期，总会看到一女协警...</td>
              <td>2016-06-26 16:30:20</td>
            </tr>
            <tr>
              <td>7</td>
              <td>1024573413</td>
              <td>39212310284234923</td>
              <td>#武汉观新春#大人打牌，孩子们玩手机。大人承诺打牌赢了钱，分给孩子们，因此...</td>
              <td>2016-02-10 21:22:20</td>
            </tr>
            <tr>
              <td>8</td>
              <td>1024573413</td>
              <td>39109209238493274</td>
              <td>#武汉观新春#大年初一，清晨祭拜。院子里摆放案台，上面放上面鱼、馒头、糖米...</td>
              <td>2016-02-08 16:30:20</td>
            </tr>
          </tbody>
        </table>
        <!-- <br> -->
        <!-- <p>微博用户数据：</p> -->
        <!-- <img :src="require('../../../../assets/contest/details/yhhx5.jpeg')" alt='yhhx'> -->
        <table :class="tableClass" v-if="false">
          <thead>
            <tr>
              <th>uid</th>
              <th>name</th>
              <th>sex</th>
              <th>location</th>
              <th>label</th>
              <th>verified</th>
              <th>birth</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1024573413</td>
              <td>家在沂蒙V武汉</td>
              <td>男</td>
              <td>湖北 武汉</td>
              <td>社会</td>
              <td>0</td>
              <td>1987 ~ 1990</td>
            </tr>
            <tr>
              <td>1050677954</td>
              <td>荷花不是藕的菜</td>
              <td>男</td>
              <td>湖北 襄阳</td>
              <td>娱乐</td>
              <td>0</td>
              <td>1971 ~ 1974</td>
            </tr>
            <tr>
              <td>1087643271</td>
              <td>图华</td>
              <td>男</td>
              <td>安徽 芜湖</td>
              <td>娱乐，社会</td>
              <td>0</td>
              <td>1969 ~ 1972</td>
            </tr>
            <tr>
              <td>1231624983</td>
              <td>党人碑</td>
              <td>男</td>
              <td>北京 海淀区</td>
              <td>读书，娱乐</td>
              <td>1</td>
              <td>1984 ~ 1987</td>
            </tr>
            <tr>
              <td>1232180151</td>
              <td>真名刘媛媛</td>
              <td>女</td>
              <td>江苏 南京</td>
              <td>旅游</td>
              <td>1</td>
              <td>1988 ~ 1991</td>
            </tr>
            <tr>
              <td>1249644380</td>
              <td>大猫KoX</td>
              <td>女</td>
              <td>海外 其他</td>
              <td>读书，娱乐，旅游，社会</td>
              <td>1</td>
              <td>1992 ~ 1995</td>
            </tr>
            <tr>
              <td>1272218442</td>
              <td>康强武汉大学1</td>
              <td>男</td>
              <td>湖北 武汉</td>
              <td>旅游</td>
              <td>1</td>
              <td>1985 ~ 1988</td>
            </tr>
            <tr>
              <td>1377875554</td>
              <td>Birchgrove</td>
              <td>男</td>
              <td>河南 郑州</td>
              <td>娱乐，旅游，科技</td>
              <td>0</td>
              <td>1988 ~ 1991</td>
            </tr>
          </tbody>
        </table>
        <!-- <br> -->
        <!-- <p>微博关系数据：</p> -->
        <!-- <img :src="require('../../../../assets/contest/details/yhhx6.jpeg')" alt='yhhx'> -->
        <table :class="tableClass" v-if="false">
          <thead>
            <tr>
              <th>id</th>
              <th>uid</th>
              <th>follow_uid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1024573413</td>
              <td>1540975621</td>
            </tr>
            <tr>
              <td>2</td>
              <td>1024573413</td>
              <td>1642412441</td>
            </tr>
            <tr>
              <td>3</td>
              <td>1024573413</td>
              <td>1656627870</td>
            </tr>
            <tr>
              <td>4</td>
              <td>1024573413</td>
              <td>1663284864</td>
            </tr>
            <tr>
              <td>5</td>
              <td>1024573413</td>
              <td>1687399850</td>
            </tr>
            <tr>
              <td>6</td>
              <td>1024573413</td>
              <td>1707850293</td>
            </tr>
            <tr>
              <td>7</td>
              <td>1024573413</td>
              <td>1749127163</td>
            </tr>
            <tr>
              <td>8</td>
              <td>1024573413</td>
              <td>1771925961</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>用户画像评价根据标签预测正确率及相应的标签权重对比赛结果进行评分。其中，四类标签的权重分别为0.1，0.2，0.3，0.4。</p>
        <p>最终得分 = 性别画像正确率*0.1 + 年龄画像正确率*0.2 + 地域画像正确率*0.3 + 兴趣画像正确率*0.4</p>
        <p>举例说明：如果总共需预测4类标签共4万个，某参赛团队对四类标签预测正确的个数分别为0.8万、0.5万、0.6万和0.1万，那么score = 0.8*0.1 + 0.5*0.2 + 0.6*0.3 + 0.1*0.4 = 0.4（满分为1分）。</p>
        <p>按照得分从大到小进行排序，得到各参赛队排名。</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <p>提交结果文件为txt格式，不同字段之间用英文逗号做间隔，文件结构如下：</p>
        <!-- <img :src="require('../../../../assets/contest/details/yhhx7.png')" alt='yhhx'> -->
        <table :class="tableClass" v-if="false">
          <thead>
            <tr>
              <th>字段名</th>
              <th>类型名</th>
              <th>含义</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Source</td>
              <td>varchar</td>
              <td>源用户ID</td>
            </tr>
            <tr>
              <td>Target</td>
              <td>varchar</td>
              <td>目标用户ID</td>
            </tr>
            <tr>
              <td>isFollowed</td>
              <td>Int</td>
              <td>从源用户到目标用户之间是否存在关注关系，1为存在，0为不存在</td>
            </tr>
          </tbody>
        </table>
        <p>文件统一采用UTF-8无BOM编码。</p>
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E7%94%A8%E6%88%B7%E7%94%BB%E5%83%8F%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-show="activeName=='队伍排名'">
        <my-contest-rank :url="'yhhx'" :zhibiao="'precision'"></my-contest-rank>
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
      yhhx1: `
        <relation_info>
          <id>163003</id>
          <info>微博个人认证</info>
          <name>流浪的猫猫9</name>
          <location>浙江 杭州</location>
          <fan_list>
            <childnode>7942</childnode>
            <childnode>9175</childnode>
            <childnode>24275</childnode>
            <childnode>42204</childnode>
            <childnode>47321</childnode>
            <childnode>57307</childnode>
            <childnode>77481</childnode>
            <childnode>87074</childnode>
            <childnode>91905</childnode>
            <childnode>102327</childnode>
            <childnode>115403</childnode>
          </fan_list>
          <sex></sex>
        </relation_info>
      `
    }
  },
  computed: {
    compiledYhhx1 () {
      return marked(this.yhhx1, { sanitize: true })
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
  mounted () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
    store.commit('changeTitle', '邀请赛')
  }
}
</script>

<style lang="scss" scoped>
  img {
    max-width: 900px;
  }
  p, li {
    font-size: 15px;
  }
</style>
