<template lang="html">
  <div class="footer">
    <div class="container">
      <div class="footer_link">
        <h5>帮助</h5>
        <router-link :to="'/help'">联系我们</router-link> | 
        <router-link :to="'/help'">关于我们</router-link>
      </div>
      <div class="footer_copyright">
        <h5>版权信息</h5>
        <p>京ICP备16064680号</p>
      </div>
      <div class="footer_QRCode">
        <h5>关注我们</h5>
        <p>二维码区</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .footer {
    min-height: 120px;
    background: #324057;
    color: #a4aebd;
    .container {
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      p {
        color: #768193;
      }
      a {
        color: #768193;
        text-decoration: none;
      }
      > div {
        padding-top: 10px;
        min-width: 350px;
      }
    }
  }
</style>
