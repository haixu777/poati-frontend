<template lang="html">
  <div class="">
    <h3>联系我们</h3>
    <p><span>地址</span>: &nbsp;&nbsp;&nbsp;北京市海淀区闵庄路甲89号</p>
    <p><span>邮箱</span>: &nbsp;&nbsp;&nbsp;<a href="mailto:poati@iie.ac.cn" style="color:#2c3e50;">poati@iie.ac.cn</a></p>
    <p><span>联系人</span>: &nbsp;&nbsp;&nbsp;林俊宇</p>
    <p><span>微信公众号</span>:<img :src="require('assets/gzh_qrcode.png')" class="gzh_contact" alt="gzh"></p>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
p {
  span {
    display: inline-block;
    width: 80px;
  }
}
.gzh_contact {
  vertical-align: text-top
}
</style>
