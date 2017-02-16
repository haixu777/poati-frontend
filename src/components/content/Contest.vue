<template lang="html">
  <div class="container">
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
        <template v-for="item in contestList">
          <tr>
            <td>
              <img src="../../assets/sina_logo.png" alt="sina">
            </td>
            <td>
              <h5>{{ item.title }}</h5>
              <p>{{ item.introdution }}</p>
            </td>
            <td>
              <router-link :to="'/contest'+item.path">
                <button type="button" name="button" :class="item.reach_deadLine?'btn btn-warning':'btn btn-success'" @click="handleClick(item.title)">{{ item.reach_deadLine?'已经结束':'立即报名' }}</button>
              </router-link>
            </td>
            <td>{{ item.time }}</td>
            <td>{{ item.location }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contestList: [
        { logo: '', path: '/shrsb', title: '说话人识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
        { logo: '', path: '/ypdb', title: '音频对比', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: false },
        { logo: '', path: '/yygjcjc', title: '语音关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
        { logo: '', path: '/spkbjc', title: '视频拷贝检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
        { logo: '', path: '/tdspsb', title: '特定视频识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: false },
        { logo: '', path: '/spwbgjcjc', title: '视频文本关键词检测', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true },
        { logo: '', path: '/rlsb', title: '人脸识别', introdution: '行人属性精细化识别是智能监控技术的重要组成部分。本赛题提供监控场景下多张带有标注信息的行人图像，要', time: '2017-4-12 ~ 2017-5-10', location: '北京益园', reach_deadLine: true }
      ]
    }
  },
  components: {
  },
  methods: {
    handleClick: function (text) {
    }
  },
  mounted: function () {
  }
}
</script>

<style lang="scss">
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
