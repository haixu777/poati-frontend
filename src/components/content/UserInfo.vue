<template lang="html">
  <div class="container" v-if="isAdministrator">
    administrator
  </div>
  <div class="container" v-else>
    <div class="info_left_container">
      <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
      </el-menu>
    </div>
    <div class="info_right_container">
      userinfo
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      isAdministrator: false
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

<style lang="scss" scoped>
  .info_left_container {
    width: 12%;
    float: left;
  }
  .info_right_container {
    width: 86%;
    float: right;
    height: 600px;
    border: 1px solid #eee;
  }
</style>
