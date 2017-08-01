<template lang="html">
  <div class="newest_contest" style="padding-bottom:60px;border-bottom:5px solid #13ce66;">
    <div class="title_container _container" style="margin-top:50px;margin-bottom:70px;">
      <h3 style="font-size:28px;font-weight:700;padding: 0 25px 20px 25px;border-bottom:1px solid #009ee3;">竞赛题目</h3>
      <router-link :to="'/contest'">
        <button type="button" name="button" class="btn btn-primary">更多信息</button>
      </router-link>
    </div>
    <div class="_container">
      <el-row type="flex" justify="center" style="margin-top:30px;">
        <el-col :span="0" v-for="item,index in newest_contest_list">
          <el-card :body-style="{ padding: '0px' }" style="margin: 0 80px;">
            <div style="padding-top: 10px;">
              <span style="text-align: center;width: 100%;display: inline-block;font-size:16px;font-weight:600;">{{ item.title }}</span>
              <img :src="item.img" class="image">
              <div class="bottom">
                <router-link :to="'/contest/2017/'+item.path">
                  <el-button type="text" class="button">查看详情</el-button>
                </router-link>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" style="margin-top:20px;">
        <el-col :span="0" v-for="item,index in newest_contest_list2">
          <el-card :body-style="{ padding: '0px' }" style="margin: 0 80px;">
            <div style="padding-top: 10px;">
              <span style="text-align:center;width:100%;display:inline-block;font-size:16px;font-weight:600;">{{ item.title }}</span>
              <img :src="item.img" class="image">
              <div class="bottom">
                <router-link :to="'/contest/2017/'+item.path">
                  <el-button type="text" class="button">查看详情</el-button>
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
        { path: 'sjybfx', img: require('assets/contest/sjybfx.jpg'), title: '事件样本发现', time: '2017-3-1 ～ 2017-3-15' }
      ],
      newest_contest_list2: [
        { path: 'sjgjyssb', img: require('assets/contest/sjgjyssb.jpg'), title: '事件关键元素识别', time: '2017-3-1 ～ 2017-3-15' },
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
