<template lang="html">
  <div class="container">
    <div class="yearPick_container">
      <span style="padding: 0 10px; border-left: 3px solid #20a0ff;">年份选择</span>
      <el-select v-model="yearPick" placeholder="请选择" style="width: 90px;">
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
                <h5 style="display: inline;">{{ item.title }}</h5>
              </router-link>
              <p>{{ item.introdution }}</p>
            </td>
            <td>
              <!-- <router-link :to="'/contest'+item.path">
                <button type="button" name="button" :class="item.reach_deadLine?'btn btn-warning':'btn btn-success'" @click="handleClick(item.title)">{{ item.reach_deadLine?'已经结束':'立即报名' }}</button>
              </router-link> -->
              <span :style="(item.reach_deadLine?'color: #f50213;':'color: #339900;')+'font-size: 18px;font-weight: 400;'">{{ item.reach_deadLine?'已结束':'进行中' }}</span>
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
          { logo: '', path: '/2016/shrsb', title: '说话人识别', introdution: '2016行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园2016', reach_deadLine: true },
          { logo: '', path: '/2016/ypdb', title: '音频对比', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: false },
          { logo: '', path: '/2016/yygjcjc', title: '语音关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
          { logo: '', path: '/2016/spkbjc', title: '视频拷贝检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
          { logo: '', path: '/2016/tdspsb', title: '特定视频识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: false },
          { logo: '', path: '/2016/spwbgjcjc', title: '视频文本关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
          { logo: '', path: '/2016/rlsb', title: '人脸识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true }
        ],
        year_2017: [
          { logo: '', path: '/2017/shrsb', title: '说话人识别', introdution: '2017行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园2017', reach_deadLine: true },
          { logo: '', path: '/2017/ypdb', title: '音频对比', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: false },
          { logo: '', path: '/2017/yygjcjc', title: '语音关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
          { logo: '', path: '/2017/spkbjc', title: '视频拷贝检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
          { logo: '', path: '/2017/tdspsb', title: '特定视频识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: false },
          { logo: '', path: '/2017/spwbgjcjc', title: '视频文本关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
          { logo: '', path: '/2017/rlsb', title: '人脸识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true }
        ]
      },
      yearPick: localStorage.getItem('yearPick') || 2016
    }
  },
  components: {
  },
  methods: {
    handleClick: function (text) {
    }
  },
  mounted: function () {
    store.commit('changeTitle', '竞赛')
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
