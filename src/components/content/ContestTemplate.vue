<template lang="html">
  <div class="abc">
    <router-view></router-view>
  </div>
</template>

<script>
import store from '../../store'

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
    },
    backToContest: function () {
      let urls = location.href.split('/')
      localStorage.setItem('yearPick', urls[urls.length - 2])
    }
  },
  mounted: function () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss">
  .contest_details_container {
    padding-bottom: 20px;
    .container_left {
      float: left;
      width: 12%;
      background: #f8fafe;
      min-height: 500px;
      ul {
        padding: 0;
        li {
          list-style: none;
          display: block;
          padding: 10px;
          a {
            color: #666;
            text-decoration: none;
          }
        }
        .active {
          background: #fff;
          a {
            color: #666;
          }
        }
      }
    }
    .container_right {
      float: left;
      background: #fff;
      width: 88%;
      padding: 0 40px;
      min-height: 500px;
      > div {
      }
      .zhaolin {
        width: 700px;
        height: 350px;
      }
    }

    .introdution {
      text-align: left;
      padding-top: 20px;
      p {
        text-indent: 2rem;
      }
      img {
        display: block;
        margin: 0 auto;
      }
    }

    .panel {
      text-align: left;
    }

    .breadcrumb {
      margin: 10px 0;
      padding: 15px;
      background: #fff;
    }
  }
</style>
