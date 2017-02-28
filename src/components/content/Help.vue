<template lang="html">
  <div class="container help_container">
    help
    <div class="help_container_left">
    </div>
    <div class="help_container_right">
    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
    }
  },
  mounted () {
    store.commit('changeTitle', '帮助')
  }
}
</script>

<style lang="scss" scoped>
  .help_container_left {
    float: left;
    width: 10%;
  }
  .help_container_right {
    float: right;
    width: 88%;
  }
</style>
