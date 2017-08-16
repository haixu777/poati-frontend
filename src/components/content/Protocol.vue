<template lang="html">
  <div class="sponsor_container _container clearfix">
    大赛协议
  </div>
</template>

<script>
import store from '../../store'
export default {
  mounted () {
    store.commit('changeTitle', '大赛协议')
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss">
</style>
