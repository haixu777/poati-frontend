<template lang="html">
  <div class="container help_container">
    <h4 class="title">关于我们</h4>
    <p>关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们关于我们</p>
    <h4 class="title">联系我们</h4>
    <p>地址: 北京市海淀区闵庄路甲89号</p>
    <p>电话: 18611111111</p>
    <p>邮箱: test@iie.ac.cn</p>
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

<style lang="scss">
  .help_container {
    height: 790px;
    background: #fff;
    text-align: left;
    border-radius: 5px;
    border: 1px solid #dfe6ec;
    margin-top: 10px;
    .title {
      padding: 0 10px;
      border-left: 3px solid #20a0ff;
    }
    img {
      width: 500px;
      height: 300px;
    }
    p {
      text-indent: 2.5rem;
    }
  }
</style>
