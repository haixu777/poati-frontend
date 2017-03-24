<template lang="html">
  <div class="contest-rank_container">
    <div class="container">
      <h3>比赛排行</h3>
      <div class="">
        <div class="bg_title">
        </div>
        <div class="bg_content">
          <div class="rank_title">
            <img :src="require('assets/rank1.png')" alt="">
            <img :src="require('assets/rank2.png')" alt="">
            <img :src="require('assets/rank3.png')" alt="">
          </div>
          <template v-for="(item, index) in 7">
            <div class="rank_contest_item">
              <span v-for="(item, index) in 3" class="contest_team_item">
                <img :src="require('assets/logo.png')" alt="">
                <div class="" style="padding: 0 20px;width: 100%;word-break:break-all;">
                  <span style="font-size: 12px;">达科的孟是的的啊</span>
                </div>
              </span>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    test () {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .contest-rank_container {
    background: #fff;
    padding-bottom: 20px !important;
    margin-bottom: 0 !important;
    h3 {
      font-size: 20px;
      font-weight: 500;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .container {
      .bg_title {
        width: 1126px;
        height: 195px;
        background-image: url('../../../assets/rank_01.png');
      }
      .bg_content {
        position: relative;
        width: 1066px;
        margin-left: 30px;
        color: #fff;
        background-image: url('../../../assets/rank_02.png');
        text-align: left;
        .rank_title {
          position: absolute;
          left: -100px;
          img {
            display: block;
            margin: 35px 0;
          }
          img:first-child {
            margin-top: 30px;
          }
          img:last-child {
            margin-top: 45px;
          }
        }
        .rank_contest_item {
          width: 142px;
          margin-left: 9px;
          display: inline-block;
          text-align: center;
          .contest_team_item {
            width: 100%;
            margin: 10px 0 15px 0;
            display: block;
            img {
              width: 60px;
              height: 60px;
              border-radius: 50%;
              border: 4px solid #bfbfbf;
              background: #fff;
            }
          }
        }
      }
    }
  }
</style>
