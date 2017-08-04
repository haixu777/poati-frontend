<template lang="html">
  <div class="partner_company container" style="margin-bottom: 0;background: fff;margin-top: 30px;">
    <!-- 2017年大赛赞助单位  -->
    <div class="title_container container" style="margin-bottom:40px;">
      <h3 id="partner_title" style="font-size:28px;font-weight:700;padding: 0 25px 20px 25px;border-bottom:1px solid #009ee3;">2017年大赛赞助单位</h3>
    </div>
    <div class="partner_container" style="padding-bottom: 60px;">
      <span>
        <router-link to="/sponsor" style="font-size:20px;color:#f40;">虚席以待</router-link>
      </span>
      <template v-for="item in partner_2017">
        <div class="partner_item">
          <img :src="item.img" :alt="item.alt">
        </div>
      </template>
    </div>
    <!-- 2016年大赛独家赞助单位 -->
    <div class="title_container container" style="margin-bottom:40px;">
      <h3 id="partner_title" style="font-size:28px;font-weight:700;padding: 0 25px 20px 25px;border-bottom:1px solid #009ee3;">2016年大赛独家赞助单位</h3>
    </div>
    <div class="partner_container" style="padding-bottom: 60px;">
      <template v-for="item in partner_2016_unique">
        <div class="partner_item">
          <img :src="item.img" :alt="item.alt">
        </div>
      </template>
    </div>
    <!-- 2016年大赛服务器赞助单位 -->
    <div class="title_container container" style="margin-bottom:40px;">
      <h3 id="partner_title" style="font-size:28px;font-weight:700;padding: 0 25px 20px 25px;border-bottom:1px solid #009ee3;">2016年大赛服务器赞助单位</h3>
    </div>
    <div class="partner_container" style="padding-bottom: 60px;">
      <template v-for="item in partner_2016_server">
        <div class="partner_item">
          <img :src="item.img" :alt="item.alt">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      partner_2016_unique: [
        { img: require('assets/partner/png/360.png'), alt: '360' }
      ],
      partner_2016_server: [
        { img: require('assets/partner/png/shuguang.png'), alt: 'zhongkeshuguang' },
        { img: require('assets/partner/png/huawei.png'), alt: 'huawei' }
      ],
      partner_2017: [
      ]
    }
  }
}
</script>

<style lang="scss">
.partner_item {
  height: 108px;
  width: 300px;
  display: inline-block;
  margin-left: 28px;
}
</style>
