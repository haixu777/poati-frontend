<template lang="html">
  <div class="newest_news clearfix">
    <div class="title_container container">
      <h3>最新动态</h3>
      <router-link :to="'/news'">
        <button type="button" name="button" class="btn btn-sm btn-primary">更多资讯</button>
      </router-link>
    </div>
    <div class="newest_news_container">
      <div class="news_item container clearfix">
        <template v-for="item in newest_news_list">
          <div class="news_details">
            <div class="news_item_left">
              <img :src="item.avatar" alt="">
            </div>
            <div class="news_item_right">
              <a :href="'/news/details/'+item.id" target="_blank">
                <h5 style="font-weight: 800; margin-top: 0;">{{ item.time + ' ' + item.title }}</h5>
              </a>
              <p>{{ utils.cutString(item.desc, 90) }}</p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
const utils = require('../../../../utils/util')
export default {
  data () {
    return {
      newest_news_list: [],
      utils: utils
    }
  },
  methods: {
    handleFetchNewestNewsFromServer () {
      this.$http.get('news/fetchNewest.do')
        .then((d) => {
          this.newest_news_list = d.body.newsList
          this.newest_news_list.forEach(function (item) {
            item.time = utils.formatTime(item.time, false)
          })
        })
    }
  },
  mounted () {
    this.handleFetchNewestNewsFromServer()
  }
}
</script>

<style lang="css">
</style>
