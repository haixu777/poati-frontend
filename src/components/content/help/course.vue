<template lang="html">
  <div class="course_container">
    <h3>参赛流程</h3>
    <div class="course_content">
      <div class="course_icon">
        <img :src="require('assets/course.png')" alt="course">
      </div>
      <div class="course_content_right">
        <ol>
          <li v-for="item, index in courseList">
            <h5 class="course_title">{{ (index+1) + '. ' + item.title }}</h5>
            <p style="color:#5a5a5a;">{{ item.text }}</p>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      courseList: [
        { title: '报名参赛', text: '注册——登陆，填写队伍的基本信息，在首页点击“注册”，注册成功后，登陆界面完善团队的相关信息，提交通过资格审查后，收到报名确认和比赛信息的参赛邮件。' },
        { title: '准备工作', text: '登陆系统，按照操作下载本次大赛的训练数据集对模型进行调参优化。' },
        { title: '提交结果', text: '参赛队伍在大赛指定的提交结果时间内提交最终程序，大赛评测委员会工作人员将进行结果评测，并组织技术委员会成员对提交的评测结果进行审核，审核通过后公布决赛入围团队和决赛题目' },
        { title: '现场决赛', text: '决赛队伍在决赛前按照决赛要求对模型进行调参优化，现场提交最终程序并公布决赛成绩。' }
      ]
    }
  }
}
</script>

<style lang="scss" scope>
.course_container {
  .course_content {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    margin-top: 20px;
    .course_icon {
      width: 68px;
      height: 486px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .course_content_right {
      width: calc(100% - 70px);
      .course_title {
        font-size: 18px;
        font-weight: 700;
        color: #5a5a5a;
      }
      li {
        list-style: none;
        margin-bottom: 70px;
      }
    }
  }
}
</style>
