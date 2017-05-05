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
          <li>单支队伍每日提交次数上限: 10次</li>
        </ul>
        <h4>附加规则</h4>
        <ol>
          <li>数据使用：本赛题数据仅允许用于本次竞赛相关活动，禁止参赛者用作它用。</li>
          <li>外部数据：本赛题禁止使用外部数据</li>
        </ol>
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'">
        <h4>比赛数据</h4>
        <p>比赛数据均来源于真实的大型问答类社交网站，数据集包括用户基本信息集，热门主题回答集，热门主题提问集，社交关系训练数据调试集，社交用户和主题标签的关系集，主题标签集，源社交用户集，目标社交用户集。比赛数据分为三部分，分别用于调试、训练以及最终的结果测试。</p>
        <h5>1、数据集</h5>
        <p>用户基本信息集包含超过10万条用户的基本信息数据。包含用户的id，用户名，位置信息，职业背景，受教育经历，个人简介，收到其他用户点赞的点赞数，收到其他用户感谢的感谢数，收藏帖子数，回答问题数，最多参与的主题，关注其他用户的关注数，被其他用户关注的被关注数，这些数据可以用来对用户进行用户画像帮助社交关系的预测。</p>
        <p>&#9312; 用户基本信息集</p>
        <p>由热门主题衍生的超过7万条热门回答，包含热门回答的一些基本信息，如作者id，点赞数，评论数，回答时间，回答所属主题，回答内容。</p>
        <p>&#9313; 热门主题提问集</p>
        <p>由热门主题衍生的近2000个热门问题，包含热门回答的一些基本信息，如作者id，点赞数，评论数，回答时间，回答所属的所有主题标签，问题描述，提问时间。</p>
        <p>&#9314; 社交关系训练数据调试集</p>
        <p>社交关系训练数据，包含社交网站中节点间的48万余条连接边关系。</p>
        <p>&#9315; 社交用户和主题标签的关系集</p>
        <p>在问答型社交网站中，用户会关注自己喜欢的主题，该集合中包含用户对热门主题的全部关注情况。</p>
        <p>&#9316; 主题标签集</p>
        <p>问答型社交网站的主题分类，各种标签数量达到2万6千条，主题是层次结构，由根节点衍生各个子主题。</p>
        <p>&#9317; 社交关系测试数据集</p>
        <p>社交关系测试数据集总共包含1700万条关系预测数据，作为测试数据集分为3份，分别包含100*1000条、300*1000条、600*1000条关系数据。每一份测试数据的评测分值占最终评测分值的10%、30%、60%。</p>
        <h5>2、数据格式</h5>
        <div v-html="compiledSjgxyc1"></div>
        <div v-html="compiledSjgxyc2"></div>
        <div v-html="compiledSjgxyc3"></div>
        <div v-html="compiledSjgxyc4"></div>
        <div v-html="compiledSjgxyc5"></div>
        <div v-html="compiledSjgxyc6"></div>
        <!--
        <p>用户基本信息（帐号，UID，性别，年龄，地点，个人主页等），用户发布的内容（如发表的微博和评论），用户的行为记录（浏览、转发、点赞、收藏），用户的链接关系（如用户之间的粉丝关注关系）等。</p>
        <p>训练数据包括三个文件：</p>
        <ol>
          <li>
            <p>weibo_content.csv,  用户发布微博内容文件，其数据格式为：</p>
            <img :src="require('../../../../assets/contest/details/yhhx1.png')" alt='sjgxyc'>
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
            <img :src="require('../../../../assets/contest/details/sjgxyc2.png')" alt='sjgxyc'>
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
            <img :src="require('../../../../assets/contest/details/yhhx3.png')" alt='sjgxyc'>
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
        <img :src="require('../../../../assets/contest/details/yhhx4.png')" alt='yhhx'>
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
        <img :src="require('../../../../assets/contest/details/yhhx5.jpeg')" alt='yhhx'>
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
        <img :src="require('../../../../assets/contest/details/yhhx6.jpeg')" alt='yhhx'>
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
      -->
      </div>
      <div class="introdution" v-show="activeName=='评分标准'">
        <h4>评分标准</h4>
        <p>根据预测正确标签数量的比例对比赛结果进行评分。</p>
        <p>最终得分 = 预测正确标签数量/预测标签总数量</p>
        <p>举例说明：如果总共需预测4类标签共2万个，某参赛团队总共正确预测了1.5万个标签，那么得分score=1.5/2=0.75。</p>
        <p>按照得分从大到小进行排序，得到各参赛队排名。</p>
      </div>
      <div class="introdution" v-show="activeName=='提交要求'">
        <h4>提交要求</h4>
        <p>按照参考实例文件，左侧是前面介绍的源社交用户集的用户id，右侧是目标社交用户集子集的用户id，用“----”隔开。表示参赛者预测得到的左侧用户对右侧用户的关注关系。文件统一采用UTF-8编码。</p>
        <!-- <img :src="require('../../../../assets/contest/details/sjgxyc3.png')" alt='sjgxyc'> -->
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
        <h4>实例文件</h4>
        <p>提交参考实例文件<a href="http://omnwjdv5k.bkt.clouddn.com/sample_data/%E7%A4%BE%E4%BA%A4%E5%85%B3%E7%B3%BB%E9%A2%84%E6%B5%8B%E7%BB%93%E6%9E%9C%E7%A4%BA%E4%BE%8B.txt.zip">下载</a></p>
      </div>
      <div class="introdution" v-show="activeName=='队伍排名'">
        <my-contest-rank :url="'sjgxyc'"></my-contest-rank>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../../../../store'
const myContestRank = require('../myContestRank')
const Marked = require('marked')
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
      sjgxyc1: `
        <!--用户基本信息-->
        <RECORD>
          <id>-liudazhuang</id>
          <user_name>柳大壮</user_name>
          <location>北京</location>
          <jobs>互联网</jobs>
          <education></education>
          <personal_description>
            一个写正经答案的不正经女IT汪
            普通长相，略有品味
            业余爱好：研究花钱
            时尚这条路要想走得好
            无非比人多烧钱多踩雷
            或者，关注我 :)
          </personal_description>
          <likes_num>52821</likes_num>
          <thanks_num>20198</thanks_num>
          <collection_num>226813</collection_num>
          <answer_num>41</answer_num>
          <source_topic_id>19554791</source_topic_id>
          <source></source>
          <follow_person_num>85</follow_person_num>
          <follow_topics_num>29</follow_topics_num>
          <updatetime>2017/4/12 11:09:15</updatetime>
          <incId>1</incId>
        </RECORD>
      `,
      sjgxyc2: `
        <!--热门主题回答集-->
        <RECORD>
          <question_id>48959950</question_id>
          <author_id>null</author_id>
          <likes_num>664</likes_num>
          <comment_num>612</comment_num>
          <answer_time>2016/10/16 19:21:29</answer_time>
          <topic>艺术</topic>
          <answer_content>
            今天第三次更新，想了想还是决定更在在前面！看了评论～大家也都好可爱！一个可以分享自己心情的地方，可以说出自己最真实的心声！可以真的跟大家当朋友，如果大家有什么问题类似于 人肉她 这样的评论，一会有时间会再在最下面继续回答大家的问题。
            女演员，准确来说也唱过那么一两首歌，电视剧插曲之类的那种，给自己的定位就是没那么红。下面切入正题！关于拍吻戏，大家看电视的时候或许会很羡慕演员可以跟各种小鲜肉，或者是明星接吻，但其实一般都会有点尴尬，因为毕竟一部戏里的演员们彼此并没有大家眼中看到的那么相熟，导演不满意会要求无数次重来，所以吻到最后真的心里只有！妈蛋怎么还没完事。所以戏里大家不要入戏太深，cp这种东西，对我们来讲就是一种甜蜜的负担。
          </answer_content>
        </RECORD>
      `,
      sjgxyc3: `
        <!--热门主题提问集-->
        <RECORD>
          <id>19551117</id>
          <author_id>da-joy</author_id>
          <topic_1>文化</topic_1>
          <topic_2>文化差异，国民文化，工业，制造业，中国制造</topic_2>
          <topic_3></topic_3>
          <question>如何能使【中国制造】达到【德国制造】的水平？</question>
          <question_description></question_description>
          <followCnt>7779</followCnt>
          <visitCnt>651584</visitCnt>
          <commentCnt>27</commentCnt>
          <questionTime>2010/12/26 02:34:44</questionTime>
        </RECORD>
      `,
      sjgxyc4: `
        <!--社交关系训练数据调试集-->
        <RECORD>
          <author_id>ggboy-60</author_id>
          <followee_id>feifeimao</followee_id>
        </RECORD>
        <RECORD>
          <author_id>chen-kk-95</author_id>
          <followee_id>bo-he-chun-guang-jing</followee_id>
        </RECORD>
        <RECORD>
          <author_id>chen-kk-95</author_id>
          <followee_id>ccc-zhao</followee_id>
        </RECORD>
        <RECORD>
          <author_id>chen-kk-95</author_id>
          <followee_id>enostyle</followee_id>
        </RECORD>
      `,
      sjgxyc5: `
        <!--社交用户和主题标签的关系集-->
        <RECORD>
          <author_id>bai-cai-ai-chi-shui-guo</author_id>
          <topic_id>19550240</topic_id>
        </RECORD>
        <RECORD>
          <author_id>bu-ming-bu-bai-41</author_id>
          <topic_id>19550240</topic_id>
        </RECORD>
        <RECORD>
          <author_id>hong-xiao-feng-82</author_id>
          <topic_id>19550240</topic_id>
        </RECORD>
      `,
      sjgxyc6: `
        <!--主题标签集-->
        <RECORD>
          <incId>1</incId>
          <topic>电影</topic>
          <id>19550429</id>
          <super_topic_id>19550434</super_topic_id>
          <topic_level>4</topic_level>
          <topic_description>
            电影是一种视听媒介，利用胶卷、录像带或数位媒体将影像和声音捕捉。
          </topic_description>
        </RECORD>
      `

    }
  },
  computed: {
    compiledSjgxyc1 () {
      return Marked(this.sjgxyc1, { sanitize: true })
    },
    compiledSjgxyc2 () {
      return Marked(this.sjgxyc2, { sanitize: true })
    },
    compiledSjgxyc3 () {
      return Marked(this.sjgxyc3, { sanitize: true })
    },
    compiledSjgxyc4 () {
      return Marked(this.sjgxyc4, { sanitize: true })
    },
    compiledSjgxyc5 () {
      return Marked(this.sjgxyc5, { sanitize: true })
    },
    compiledSjgxyc6 () {
      return Marked(this.sjgxyc6, { sanitize: true })
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
  p, li {
    font-size: 15px;
  }
  img {
    max-width: 900px;
  }
</style>
