<template lang="html">
  <div class="help_container">
    <div class="help_nav">
      <div class="help_nav_item">
        <h5 :class="{ help_nav_title: true, active: toogleActive}">
          POATI平台
        </h5>
        <ul>
          <li v-for="item in navPoati">
            <router-link :to="'/help/'+item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
      <div class="help_nav_item">
        <h5 :class="{ help_nav_title: true, active: !toogleActive}">
          AboutUS
        </h5>
        <ul>
          <li v-for="item in navAboutUs">
            <router-link :to="'/help/'+item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="help_content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      toogleActive: (this.$router.currentRoute.name === 'poati' || this.$router.currentRoute.name === 'course'),
      navPoati: [
        { path: 'poati', name: '关于POATI' },
        { path: 'course', name: '参赛流程' }
      ],
      navAboutUs: [
        { path: 'about', name: '关于我们' },
        { path: 'contact', name: '联系我们' }
      ]
    }
  },
  watch: {
    $route (router) {
      // 导航active切换
      this.toogleActive = (router.name === 'poati' || router.name === 'course')
    }
  },
  mounted () {
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss">
.help_container {
  display: flex;
  display: -webkit-flex;
  width: 1120px;
  margin: 0 auto;
  .help_nav_title {
    font-size: 18px;
    font-weight: 400;
    padding-left: 35px;
    text-align: left;
    border-left: 5px solid #a0a0a0;
    &.active {
      border-left: 5px solid #5cadff;
      color: #5cadff;
    }
  }
  a {
    color: #a0a0a0;
    text-decoration: none;
    font-size: 14px;
    line-height: 24px;
    &.router-link-active {
      color: #5cadff;
    }
  }
  > div {
    background: #fff;
    border-radius: 5px;
    margin: 10px 0;
    border: 1px solid #dfe6ec;
  }
  .help_nav {
    width: 168px;
    margin-right: 18px;
    height: 400px;
    .help_nav_item {
      ul {
        padding-left: 50px;
        li {
          padding: 5px 0;
          list-style: none;
          text-align: left;
        }
      }
    }
  }
  .help_content {
    width: calc(100% - 168px);
    padding: 0px 70px;
    text-align: left;
    min-height: 600px;
  }
}
</style>
