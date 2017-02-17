<template lang="html">
  <div class="container contest_details_container">
  <el-breadcrumb separator="/" class="breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }">
      <a href="javascipt:;" @click="backToHome()">回到首页</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item :to="{ path: '/contest' }">
      <a href="javascipt:;">比赛列表</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>比赛详情</el-breadcrumb-item>
  </el-breadcrumb>
    <div class="container_left">
      <ul>
        <template v-for="item in detailsList">
          <li @click="handleTabClick(item.text)" :class="activeName==item.text?'active':''"><a href="javascript:;">{{ item.text }}</a></li>
        </template>
      </ul>
    </div>
    <div class="container_right">
      <div class="" v-html="activeContestInfo.title">
      </div>
      <div class="introdution" v-show="activeName=='比赛介绍'" v-html="activeContestInfo.introdution">
        比赛介绍
      </div>
      <div class="introdution" v-show="activeName=='比赛规则'" v-html="activeContestInfo.rule">
        比赛规则
      </div>
      <div class="introdution" v-show="activeName=='比赛数据'" v-html="activeContestInfo.data">
        比赛数据
      </div>
      <div class="introdution" v-show="activeName=='评分标准'" v-html="activeContestInfo.rate">
        评分标准
      </div>
      <div class="introdution" v-show="activeName=='提交要求'" v-html="activeContestInfo.standard">
        提交要求
      </div>
    </div>
    <el-button type="info">报名</el-button>
  </div>
</template>

<script>
import store from '../../store'
import contestDetailsInfo from '../../../mock/data.json'

export default {
  data () {
    return {
      activeName: '比赛介绍',
      activeContest: '',
      activeContestInfo: {},
      detailsList: [
        { text: '比赛介绍' },
        { text: '比赛规则' },
        { text: '比赛数据' },
        { text: '评分标准' },
        { text: '提交要求' }
      ]
    }
  },
  methods: {
    handleTabClick: function (activeText) {
      this.activeName = activeText
    },
    backToHome: function () {
      store.commit('changeTitle', '首页')
    }
  },
  mounted: function () {
    this.activeContest = location.href.split('/')[4]
    this.activeContestInfo = contestDetailsInfo.contestDetails[this.activeContest]
  }
}
</script>

<style lang="scss">
  .contest_details_container {
    .container_left {
      float: left;
      width: 10%;
      ul {
        padding: 0;
        li {
          list-style: none;
          display: block;
          border: 1px solid #337ab7;
          padding: 10px;
          a {
            text-decoration: none;
          }
        }
        .active {
          background: #337ab7;
          a {
            color: #fff;
          }
        }
      }
    }
    .container_right {
      float: right;
      width: 88%;
      > div {
      }
    }

    .panel {
      text-align: left;
    }

    .breadcrumb {
      margin: 10px 0;
      background: #fff;
    }
  }
</style>
