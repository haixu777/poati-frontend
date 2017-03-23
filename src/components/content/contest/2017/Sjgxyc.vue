<template lang="html">
  <div class="container contest_details_container">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">
        <a href="javascipt:;" @click="backToHome()">回到首页</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/contest' }">
        <a href="javascipt:;" @click="backToContest()">比赛列表</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>社交关系预测</el-breadcrumb-item>
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
        <p>在对社交网络用户行为建模时，预测用户的关注行为是一个重要方面，根据用户的关注行为预测，可以得知用户之间的关联关系、用户的传播属性、社交网络的社群分布等。</p>
        <p>本题目给出新浪微博中真实的局部社交网络结构，给出账号发布的内容及部分社交关系，要求参赛者预测两个用户之间是否存在关注关系。</p>
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'">
        <h4>基本规则</h4>
        <ul>
          <li>单支队伍人数上限: 5人</li>
          <!-- <li>单支队伍每日提交次数上限: 20次</li> -->
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
        <p>比赛数据均来源于真实的微博数据，包括近10万条用户的行为信息数据及相关的社交关系数据。比赛数据分为训练集和测试集两部分。</p>
        <h5>数据集</h5>
        <p>INPUT/TRAIN/weibo_content.csv, weibo_user.csv, weibo_relation.csv 训练集数据</p>
        <p>INPUT/TRAIN/result.csv	训练集标注</p>
        <p>INPUT/TEST/weibo_content.csv, weibo_user.csv, weibo_relation.csv	测试集数据</p>
        <h5>数据格式</h5>
        <p>用户基本信息（帐号，UID，性别，年龄，地点，个人主页等），用户发布的内容（如发表的微博和评论），用户的行为记录（浏览、转发、点赞、收藏），用户的链接关系（如用户之间的粉丝关注关系）等。</p>
        <p>训练数据包括三个文件：</p>
        <ol>
          <li>
            <p>weibo_content.csv,  用户发布微博内容文件，其数据格式为：</p>
            <!-- <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='sjgxyc'> -->
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
            <!-- <img :src="require('../../../../assets/contest/details/sjgxyc2.png')" alt='sjgxyc'> -->
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
                  <td>Uid</td>
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
                  <td>Label</td>
                  <td>varchar</td>
                  <td>用户兴趣标签</td>
                </tr>
                <tr>
                  <td>Verified</td>
                  <td>Int</td>
                  <td>用户认证信息，1为认证用户，0为非认证用户</td>
                </tr>
                <tr>
                  <td>Birth</td>
                  <td>varchar</td>
                  <td>用户出生日期</td>
                </tr>
              </tbody>
            </table>
          </li>
          <li>
            <p>weibo_relation.csv，用户关系数据文件，其数据格式为：</p>
            <!-- <img :src="require('../../../../assets/contest/details/yhhx3.png')" alt='sjgxyc'> -->
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
        <h5>数据样例</h5>
        <p>微博内容数据：</p>
        <!-- <img :src="require('../../../../assets/contest/details/yhhx4.png')" alt='yhhx'> -->
        <table :class="tableClass">
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
        <br>
        <p>微博用户数据：</p>
        <!-- <img :src="require('../../../../assets/contest/details/yhhx5.jpeg')" alt='yhhx'> -->
        <table :class="tableClass">
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
        <br>
        <p>微博关系数据：</p>
        <!-- <img :src="require('../../../../assets/contest/details/yhhx6.jpeg')" alt='yhhx'> -->
        <table :class="tableClass">
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
        <p>根据比赛结果计算F1值、正确率和召回率，并根据F1值对各参赛团队进行综合排名。</p>
        <p>正确率 = 提取出的正确关注条数 / 提取出的关注条数</p>
        <p>召回率 = 提取出的正确关注条数 / 实际关注条数</p>
        <p>F1 Value = 正确率*召回率 * 2 / (正确率+召回率)</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <p>提交结果文件为txt格式，不同字段之间用英文逗号做间隔，文件结构如下：</p>
        <!-- <img :src="require('../../../../assets/contest/details/sjgxyc3.png')" alt='sjgxyc'> -->
        <table :class="tableClass">
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
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E7%A4%BE%E4%BA%A4%E5%85%B3%E7%B3%BB%E9%A2%84%E6%B5%8B%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-show="activeName=='队伍排名'">
        <h4>队伍排名</h4>
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
        { text: '提交要求' },
        { text: '队伍排名' }
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
