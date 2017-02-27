<template lang="html">
  <div class="news_container container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="邀请赛" name="contest">
        <template v-for="item in newsList">
          <div class="item_container clearfix">
            <el-row>
              <el-col :span="24">
                <h4 class="item_titile">{{ item.title }}</h4>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="7">
                <div class="item_container_left clearfix">
                  <img :src="item.avator" alt="avator">
                </div>
              </el-col>
              <el-col :span="17">
                <div class="item_container_right">
                  <el-row>
                    <p>{{ 'date: ' + item.time }}</p>
                  </el-row>
                  <el-row>
                    <p>{{ item.desc }}</p>
                  </el-row>
                  <el-row style="text-align: right;">
                    <router-link :to="'/news/details/'+item.id">
                      <el-button class="btn-sm" type="primary" @click="toNewsDetail(item.id)">查看详情</el-button>
                    </router-link>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="资讯" name="info">资讯</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      activeName: 'contest',
      newsList: [
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '随着互联网技术的飞速发展，多媒体成为信息技术领域发展最快、最活跃的媒体介质，日益成为信息传播的主要载体。多媒体涉及的领域甚为广泛，在诸多行业中得到广泛应用，目前，多媒体技术作为信息技术领域的一个热点，尤其针对音视频技术的研究已受到了广泛的关注，在多媒体技术应用领域已取得了长足的进步。', time: '2017-3-1', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '第一届全国网络舆情（音视频）分析技术邀请赛聚焦网络音视频的智能分析技术，旨在促进前沿技术的应用创新。本届邀请赛由中国科学院信息工程研究所主办、网络空间技术实验室承办，国家互联网信息办公室网络数据与技术局和国家自然科学基金委信息科学部担任指导单位。中国工程院高文院士、方滨兴院士和浙江大学吴朝晖校长担任比赛指导委员会的联合主席，10余位“千人”、“杰青”、“优青”等高层次专家组成技术委员会，对比赛全程进行监督、指导和评估。赛事组委会从来自全国的141支报名队伍中遴选出32支优秀团队参与现场竞技。', time: '2017-2-28', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '10月31日，各参赛团队陆续来到赛场完成注册，其中高校18支，科研院所5支以及互联网企业9支。笠日，网络空间技术实验室韩冀中主任主持召开了启动仪式，郭涛副局长、刘克处长、邹维副所长和黄庆明教授按动启动球，宣布比赛正式开始。各参赛团队即刻开展了待测系统的调试和部署工作。', time: '2017-2-13', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '11月2日和3日，各参赛队伍在32位赛事工作人员的紧密配合下，先后完成音频比对、说话人识别、特定视频识别、视频近似拷贝检测、语音关键字检测、视频文本关键字检测、人脸识别以及流媒体检测8个项目的现场竞技，每个赛项的赛程均为8小时，紧张而有序，邀请赛现场工作委员会和参赛队员积极沟通，解答疑问，保证各赛项的顺利进行。邀请赛通过科学的赛事选题、严密的赛程组织、公平公正的评判裁决让各参赛团队充分发挥技术优势，展现各自实力水平。邀请赛既是技术验证与创新培育的平台，也是经验分享和技术切磋的舞台。音视频领域产、学、研三方面最优秀的团队齐聚邀请赛，为国内音视频团队提供了交流和学习的机会，挖掘优秀团队，培育先进技术，提高科技创新水平。', time: '2017-2-1', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '11月4日邀请赛工作委员会成员和技术委员会成员召开工作会议，对比赛结果进行评议，确认获奖名单。11月5日，大赛组织委员会借网络多媒体智能高端论坛之机，隆重揭晓邀请赛结果榜单，为脱颖而出的参赛团队举行颁奖典礼。论坛围绕新兴网络多媒体应用和人工智能的最新发展，邀请到高文院士做大会特邀报告，香港中文大学汤晓鸥教授、360公司首席科学家颜水成先生、爱奇艺首席科学家王涛先生、阿里巴巴集团视频云总经理蔡华先生、武汉大学陈震中教授、清华大学沈阳教授、北京大学彭宇新教授做论坛报告。专家们针对相关核心问题及关键技术进行研讨，为未来网络多媒体智能分析技术的发展方向提供指引。', time: '2017-1-15', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' }
      ]
    }
  },
  methods: {
    handleClick () {
    },
    toNewsDetail () {
      console.log('news')
    }
  },
  mounted () {
    store.commit('changeTitle', '新闻')
  }
}
</script>

<style lang="scss">
  .news_container {
    .item_container {
      background: #fff;
      border-radius: 5px;
      margin: 10px 0;
      border: 1px solid #dfe6ec;
      padding: 0 50px 10px 50px;
      .item_container_left {
        width: 230px;
        height: 138px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item_container_right {
        text-align: left;
      }
    }
  }

  #el-tabs {
    margin: 0
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
