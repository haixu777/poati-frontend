<template lang="html">
  <div class="content clearfix">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .clearfix {
    overflow: auto;
    _height: 1%;
  }
  .content {
    min-height: 800px;
    background: #F3F6F9;
  }
</style>
