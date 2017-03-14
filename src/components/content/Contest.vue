<template lang="html">
  <div class="container">
    <div class="yearPick_container">
      <span style="padding: 0 10px; border-left: 3px solid #20a0ff;">年份选择</span>
      <el-select v-model="yearPick" placeholder="请选择" style="width: 90px;" @change="handleYearPick">
        <el-option :label="2017" :value="2017"></el-option>
        <el-option :label="2016" :value="2016"></el-option>
      </el-select>
    </div>
    <table class="table" id="contest_table_container">
      <thead>
        <tr>
          <!-- <th></th> -->
          <th>比赛简介</th>
          <th>比赛状态</th>
          <th>比赛时间</th>
          <!-- <th>比赛地点</th>  -->
        </tr>
      </thead>
      <tbody class=".table-striped">
        <template v-for="item in contestList['year_'+yearPick]">
          <tr>
            <!-- <td>
              <img src="../../assets/sina_logo.png" alt="sina">
            </td> -->
            <td>
              <router-link :to="'/contest'+item.path" style="text-decoration: none;">
                <h4 style="display: inline;">{{ item.title }}</h4>
              </router-link>
              <p>{{ item.introdution }}</p>
            </td>
            <td>
              <!-- <router-link :to="'/contest'+item.path">
                <button type="button" name="button" :class="item.status?'btn btn-warning':'btn btn-success'" @click="handleClick(item.title)">{{ item.status?'已经结束':'立即报名' }}</button>
              </router-link> -->
              <span :style="handleContestStatusStyle(item.status)+';font-size: 18px;font-weight: 400;'">{{ handleContestStatusText(item.status) }}</span>
            </td>
            <td>{{ item.time }}</td>
            <!-- <td>{{ item.location }}</td> -->
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      contestList: {
        year_2016: [
          { logo: '', path: '/2016/shrsb', title: '说话人识别', introdution: '2016行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园2016', status: -1 },
          { logo: '', path: '/2016/ypdb', title: '音频对比', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/yygjcjc', title: '语音关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/spkbjc', title: '视频拷贝检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/tdspsb', title: '特定视频识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/spwbgjcjc', title: '视频文本关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/rlsb', title: '人脸识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: -1 }
        ],
        year_2017: [
          { logo: '', path: '/2017/wbfl', title: '文本分类', introdution: '文本分类是指计算机按照预先定义的主题类别,为文档集合中的每个文档确定一个类别。它是文本挖掘的一个重要内容。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园2017', status: 0 },
          { logo: '', path: '/2017/gjccq', title: '关键词抽取', introdution: '本赛题提供新浪专题新闻文档，参赛者需要设计一个关键词抽取系统，抽取每篇文档的关键词。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjybfx', title: '事件样本发现', introdution: '给定事件名称和该事件下的4-5篇新闻报道，从全部语料中发现描述该事件的相关样本。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgjyssb', title: '事件关键元素识别', introdution: '给定新闻事件样本，抽取其中的基本实体，包括时间、地点、参与人物和参与组织。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgxcq', title: '事件关系抽取', introdution: '本任务的主要目标是从众多的新闻文档中提取相关事件的关键参数。在前两个任务（事件样本发现、事件关键元素识别）中，已经...', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/yhhx', title: '用户画像', introdution: '参赛队伍利用给定的新浪微博数据（包括用户个人信息、用户行为信息、用户微博文本以及用户粉丝列表，详见数据格式部分），进行微博用户画像。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgxyc', title: '社交关系预测', introdution: '本题目给出某局部社交网络的结构，并给出1万个账号节点及部分关注关联关系，判断给出的两个用户之间是否存在关注关系。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 }
        ]
      },
      yearPick: localStorage.getItem('yearPick') || 2017
    }
  },
  components: {
  },
  methods: {
    handleClick: function (text) {
    },
    handleYearPick (year) {
      localStorage.setItem('yearPick', year)
    },
    handleContestStatusText (status) {
      if (status === 0) {
        return '即将开始'
      } else if (status === 1) {
        return '进行中'
      } else if (status === -1) {
        return '已结束'
      }
    },
    handleContestStatusStyle (status) {
      if (status === 0) {
        return 'color: #F7BA2A'
      } else if (status === 1) {
        return 'color: #339900'
      } else if (status === -1) {
        return 'color: #f50213'
      }
    }
  },
  mounted: function () {
    store.commit('changeTitle', '邀请赛')
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss">
  .yearPick_container {
    width: 100%;
    margin-top: 15px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #d1dbe5;
  }

  #contest_table_container {
    thead tr th {
      text-align: center;
    }
    tbody tr {
      td {
        max-width: 150px;
        vertical-align: middle;
      }
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
</style>
