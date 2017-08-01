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
        <el-row><el-col :span="3" :offset="17">比赛状态</el-col><el-col :span="4">比赛时间</el-col></el-row>
        <el-row>
          <el-col :span="5">
            <div class="" style="padding-left: 30px;">
              <router-link :to="'/contest'+item.path" style="text-decoration: none;">
                <h4 style="display: inline;">{{ item.title }}</h4>
              </router-link>
            </div>
          </el-col>
          <el-col :span="3" :offset="12">
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
          { logo: '', path: '/2016/shrsb', title: '说话人识别', introdution: '本项评测的对象为有害音频中的说话人检测技术，即检测测试音频库中是否存在目 标说话人的音频。', time: '2016/11/1 - 2016/11/3', location: '北京益园2016', status: -1 },
          { logo: '', path: '/2016/ypdb', title: '音频对比', introdution: '本次评测的对象为音频比对技术，即给定音频样本，从海量待检索数据库中筛选出 与音频样本一致或包含部分音频样本片段的音频文件。', time: '2016/11/1 - 2016/11/3', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/yygjcjc', title: '语音关键词检测', introdution: '本项评测的对象为有害音频特定关键词检测技术，即检测给定音频内容中是否存在 有害信息相关的关键词。', time: '2016/11/1 - 2016/11/3', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/spkbjc', title: '视频拷贝检测', introdution: '给定待检测视频数据集与若干视频样本，逐一检测待检数据中是 否存在给定的视频样本或片段。', time: '2016/11/1 - 2016/11/3', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/tdspsb', title: '特定视频识别', introdution: '本项评测的对象为特定视频识别技术，即给定待识别视频数据集和若干类别 定义，逐一判断待识别数据属于每个类别的概率。', time: '2016/11/1 - 2016/11/3', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/spwbgjcjc', title: '视频文本关键词检测', introdution: '给出待检测视频数据集和若干关键词，逐一检测待检数据中是否存在给定关键词。 测试文字为中文，包括简体与繁体。', time: '2016/11/1 - 2016/11/3', location: '北京益园', status: -1 },
          { logo: '', path: '/2016/rlsb', title: '人脸识别', introdution: '本项评测的对象任务是:给定的一组目标人物图像，在待测试的视频中判断 是否出现目标人物，以及目标人物出现的位置。', time: '2016/11/1 - 2016/11/3', location: '北京益园', status: -1 }
        ],
        year_2017: [
          { logo: '', path: '/2017/gjccq', title: '关键词抽取', introdution: '给定一组新闻文档，从每一篇文档中抽取出与该文档主题最相关的一些词或者短语。', time: '2017/09/01 - 2017/09/17', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/wbfl', title: '文本分类', introdution: '给定一组未经分词的文本文档，对每一篇文档指定唯一类别。按文本类型分为两个子任务：新闻报道分类和短文本分类。', time: '2017/09/01 - 2017/09/17', location: '北京益园2017', status: 0 },
          { logo: '', path: '/2017/sjybfx', title: '事件样本发现', introdution: '本任务的目标是从给定语料中查找与指定事件对应的新闻语料。', time: '2017/09/01 - 2017/09/17', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgjyssb', title: '事件关键元素识别', introdution: '本任务的目标是从给定语料中抽取出描述指定事件的关键元素。', time: '2017/09/01 - 2017/09/17', location: '北京益园', status: 0 },
          // { logo: '', path: '/2017/sjgxcq', title: '事件关系抽取', introdution: '从新闻文档中提取相应新闻事件的相关参数。本任务提供每一篇新闻文档对应的新闻事件及关 键元素集合，需要识别出事件的类别，以及该事件类别下每一个参数对应的基本实体。', time: '2017/09/01 - 2017/09/17', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/sjgxyc', title: '社交关系预测', introdution: '本任务的目标是根据社交网络用户的基本信息、发布消息内容、回复消息内容、关注主题、用户间的社交关系（包括回帖、点赞、评论等），预测用户之间可能建立的关注关系。', time: '2017/09/01 - 2017/09/17', location: '北京益园', status: 0 },
          { logo: '', path: '/2017/yhhx', title: '用户画像', introdution: '给定一批社交网络用户数据，包括用户个人信息、用户行为信息、用户社交网络文本以及用户粉丝列表等，预测社交网络用户的四类属性标签。', time: '2017/09/01 - 2017/09/17', location: '北京益园', status: 0 }
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
    store.commit('changeTitle', '邀请赛介绍')
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
