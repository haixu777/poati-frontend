<template lang="html">
  <div class="user_container container" style="padding: 20px 0;">
    <div class="info_left_container">
      <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark" @open="handleOpen" @close="handleClose" :router="true">
        <el-menu-item index="1"  :route="{path: '/user/profile'}"><i class="el-icon-document"></i>团队信息</el-menu-item>
        <!-- <el-menu-item index="2"  :route="{path: '/user/project'}"><i class="el-icon-setting"></i>任务管理</el-menu-item> -->
        <el-menu-item index="3"  :route="{path: '/user/result'}"><i class="el-icon-message"></i>测评结果</el-menu-item>
      </el-menu>
    </div>
    <div class="info_right_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import store from '../../../store'
export default {
  data () {
    return {
    }
  },
  methods: {
    fetchUserInfoFromServer () {
      console.log('fetchUserInfoFromServer')
    },
    handleOpen () {

    },
    handleClose () {

    }
  },
  mounted: function () {
    store.commit('changeTitle', '')
    this.fetchUserInfoFromServer()
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss">
  .user_container {
    min-width: 1172px;
  }
  .info_left_container {
    width: 12%;
    float: left;
  }
  .info_right_container {
    width: 86%;
    float: right;
  }
</style>
