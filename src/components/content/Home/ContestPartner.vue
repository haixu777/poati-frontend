<template lang="html">
  <div class="partner_company container" style="margin-bottom: 0;background: fff;">
    <div class="title_container container">
      <h3 id="partner_title">合作伙伴</h3>
    </div>
    <div class="partner_container">
      <template v-for="item in partner_img_list">
        <div class="partner_card">
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
      partner_img_list: [
        { img: require('../../../assets/partner/360.jpg'), alt: '360' },
        { img: require('../../../assets/partner/zhongkeshuguang.jpg'), alt: 'zhongkeshuguang' }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
