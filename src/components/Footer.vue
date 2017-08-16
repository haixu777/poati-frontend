<template lang="html">
  <div class="footer">
    <div class="container">
      <div class="footer_link">
        <!-- <router-link :to="'/help'">联系我们</router-link> | -->
        <router-link :to="'/help'">联系我们</router-link>
      </div>
      <img :src="require('../assets/logo.png')" alt="logo" class="footer_logo">
      <div class="copyright">
        京ICP备16064680号
      </div>
    </div>
    <!--
    <div class="container">
      <div class="footer_link">
        <h5 style="margin-bottom: 20px;">帮助</h5>
        <router-link :to="'/help'">联系我们</router-link> |
        <router-link :to="'/help'">关于我们</router-link>
      </div>
      <div class="footer_copyright">
        <h5 style="margin-bottom: 20px;">版权信息</h5>
        <p>京ICP备16064680号</p>
      </div>
      <div class="footer_QRCode">
        <h5>关注我们</h5>
        <img src="../assets/QR_code.jpeg" alt="qr_code" style="width: 50px;height: 50px;">
      <el-tooltip placement="top" effect="light">
        <div slot="content" class="footer-tooltip">
          <div class="footer-popover-title" style="border-bottom: 1px solid #d1dbe5; text-align: center;">网络舆情</div>
          <img src="../assets/QR_code.jpg" alt="qr_code" style="width: 90px; height: 90px;">
        </div>
        <img src="../assets/wechat.png" alt="" style="width: 50px;height: 50px;">
      </el-tooltip>
      </div>
    </div>
  -->
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .footer {
    height: 60px;
    background: #324057;
    color: #a4aebd;
    line-height: 59px;
    min-width: 1280px;
    .footer_link {
      float: left;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
    .footer_logo {
      margin: 0 auto;
    }
    .copyright {
      float: right;
    }
  }
  /*
  .footer {
    min-height: 120px;
    background: #324057;
    color: #a4aebd;
    .container {
      display: flex;
      display: -webkit-flex;
      justify-content: space-around;
      padding-top: 10px;
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
  */
</style>
