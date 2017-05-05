<template lang="html">
  <div class="newest_contest">
    <div class="title_container container">
      <h3>最新竞赛</h3>
      <router-link :to="'/contest'">
        <button type="button" name="button" class="btn btn-sm btn-primary">更多竞赛</button>
      </router-link>
    </div>
    <div class="container">
      <el-row type="flex" justify="center" :gutter="15">
        <el-col :span="0" v-for="item,index in newest_contest_list">
          <el-card :body-style="{ padding: '0px' }">
            <div style="padding-top: 10px;">
              <span style="text-align: center;width: 100%;display: inline-block;">{{ item.title }}</span>
              <img :src="item.img" class="image">
              <div class="bottom">
                <router-link :to="'/contest/2017/'+item.path">
                  <el-button type="text" class="button">立即参赛</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newest_contest_list: [
        { path: 'gjccq', img: require('assets/contest/gjccq.jpg'), title: '关键词抽取', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'wbfl', img: require('assets/contest/wbfl.jpg'), title: '文本分类', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'sjybfx', img: require('assets/contest/sjybfx.jpg'), title: '事件样本发现', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'sjgjyssb', img: require('assets/contest/sjgjyssb.jpg'), title: '事件关键元素识别', time: '2017-3-1 ～ 2017-3-15' },
        // { path: 'sjgxcq', img: require('assets/contest/sjgxcq.jpg'), title: '事件关系抽取', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'sjgxyc', img: require('assets/contest/sjgxyc.jpg'), title: '社交关系预测', time: '2017-3-1 ～ 2017-3-15' },
        { path: 'yhhx', img: require('assets/contest/yhhx.jpg'), title: '用户画像', time: '2017-3-1 ～ 2017-3-15' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
