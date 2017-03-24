<template lang="html">
  <div class="container">
    <div class="yearPick_container">
      <span style="padding: 0 10px; border-left: 3px solid #20a0ff;">年份选择</span>
      <el-select v-model="yearPick" placeholder="请选择" style="width: 90px;" @change="handleYearPick">
        <el-option :label="2017" :value="2017"></el-option>
        <el-option :label="2016" :value="2016"></el-option>
      </el-select>
    </div>
    <template v-for="item in contestList['year_'+yearPick]">
      <div class="contest_item_container">
        <img :src="handleStatus(item.status).img" alt="contest_tag" style="position: absolute;left: 20px;top: -6px;">
        <el-row><el-col :span="4" :offset="16">比赛状态</el-col><el-col :span="4">比赛时间</el-col></el-row>
        <el-row>
          <el-col :span="4">
            <div class="" style="padding-left: 30px;">
              <router-link :to="'/contest'+item.path" style="text-decoration: none;">
                <h4 style="display: inline;">{{ item.title }}</h4>
              </router-link>
            </div>
          </el-col>
          <el-col :span="4" :offset="12">
            <span :style="handleStatus(item.status).color+';font-size: 18px;font-weight: 400;'">{{ handleStatus(item.status).text }}</span>
          </el-col>
          <el-col :span="4">
            {{ item.time }}
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <div class="" style="padding: 15px 30px 0 30px;line-height: 20px;font-size: 16px;">
              <span style="font-weight: 500">比赛简介：</span>{{ item.introdution }}
              <p style="text-align: right;">
                <router-link :to="'/contest'+item.path" style="text-decoration: none;">
                  <el-button type="primary" class="btn-sm">查看详情</el-button>
                </router-link>
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </template>
    <!--
    <table class="table" id="contest_table_container">
      <thead>
        <tr>
          <th></th>
          <th>比赛简介</th>
          <th>比赛状态</th>
          <th>比赛时间</th>
          <th>比赛地点</th>
        </tr>
      </thead>
      <tbody class=".table-striped">
        <template v-for="item in contestList['year_'+yearPick]">
          <tr>
            <td>
              <img src="../../assets/sina_logo.png" alt="sina">
            </td>
            <td>
              <router-link :to="'/contest'+item.path" style="text-decoration: none;">
                <h4 style="display: inline;">{{ item.title }}</h4>
              </router-link>
              <p>{{ item.introdution }}</p>
            </td>
            <td>
              <router-link :to="'/contest'+item.path">
                <button type="button" name="button" :class="item.status?'btn btn-warning':'btn btn-success'" @click="handleClick(item.title)">{{ item.status?'已经结束':'立即报名' }}</button>
              </router-link>
              <span :style="handleContestStatusStyle(item.status)+';font-size: 18px;font-weight: 400;'">{{ handleContestStatusText(item.status) }}</span>
            </td>
            <td>{{ item.time }}</td>
            <td>{{ item.location }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    -->
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
          { logo: '', path: '/2017/gjccq', title: '关键词抽取', introdution: '给定一组互联网新闻文档，参赛者需要设计一个关键词抽取系统，抽取每篇文档的关键词。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/wbfl', title: '文本分类', introdution: '文本分类任务是对一组新闻文档和一组微博文档进行自动分类。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园2017', status: 0 },
          { logo: '', path: '/2017/sjybfx', title: '事件样本发现', introdution: '给定事件名称和该事件下的4-5篇新闻报道，从全部语料中发现描述该事件的相关样本。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgjyssb', title: '事件关键元素识别', introdution: '给定新闻事件样本，抽取其中的基本实体，包括时间、地点、参与人物和参与组织。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgxcq', title: '事件关系抽取', introdution: '从新闻文档中提取相应新闻事件的相关参数。本任务提供每一篇新闻文档对应的新闻事件及关 键元素集合，需要识别出事件的类别，以及该事件类别下每一个参数对应的基本实体。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgxyc', title: '社交关系预测', introdution: '本题目给出某局部社交网络的结构，并给出1万个账号节点及部分关注关联关系，判断给出的两个用户之间是否存在关注关系。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/yhhx', title: '用户画像', introdution: '参赛队伍利用给定的新浪微博数据（包括用户个人信息、用户行为信息、用户微博文本以及用户粉丝列表，详见数据格式部分），进行微博用户画像。', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', status: 0 }
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
    handleStatus (status) {
      if (status === 0) {
        return {
          text: '即将开始',
          color: 'color: #F7BA2A',
          img: require('assets/start.png')
        }
      } else if (status === 1) {
        return {
          text: '进行中',
          color: 'color: #339900',
          img: require('assets/process.png')
        }
      } else if (status === -1) {
        return {
          text: '已结束',
          color: 'color: #f50213',
          img: require('assets/end.png')
        }
      }
    }
  },
  mounted: function () {
    store.commit('changeTitle', '邀请赛')
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss" scoped>
  .container {
    min-width: 1170px;
  }
  .yearPick_container {
    width: 100%;
    margin-top: 15px;
    text-align: left;
    padding-bottom: 10px;
    border-bottom: 1px solid #d1dbe5;
  }

  .contest_item_container {
    text-align: left;
    position: relative;
    background: #fff;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid #dfe6ec;
    .el-row {
      font-size: 15px;
      border-bottom: 1px solid #dfe6ec;
      min-height: 55px;
      line-height: 55px;
      color: #666;
    }
  }
</style>
