<template lang="html">
  <div class="schedule_container">
    <ul>
      <li v-for="item in scheduleList" :style="item.expire ? 'text-decoration:line-through' : ''">
        <span style="display:inline-block;width:100px;">{{ item.date }}</span>
        <span>{{ item.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scheduleList: [
        { date: '08月03日', text: '发布初赛任务，大赛报名', expire: false },
        { date: '09月01日', text: '开放比赛平台，发布初赛训练数据', expire: false },
        { date: '09月30日', text: '报名截止', expire: false },
        { date: '10月30日', text: '提交程序最终版，关闭比赛平台', expire: false },
        { date: '11月01日', text: '开始比赛结果评测', expire: false },
        { date: '11月05日', text: '召开比赛技术委员会和监督委员会会议，审核比赛结果', expire: false },
        { date: '11月06日', text: '公布比赛结果，发布决赛队伍名单及任务', expire: false },
        { date: '11月中旬', text: '开放比赛平台，发布决赛训练数据', expire: false },
        { date: '12月中旬', text: '决赛现场评测，并举办高峰论坛', expire: false }
      ]
    }
  }
}
</script>

<style lang="scss">
.schedule_container {
  font-size: 17px;
}
</style>
