<template lang="html">
  <div class="expert_recommend">
    <div class="title_container container">
      <h3>专家报告</h3>
      <router-link :to="'/expert'">
        <button type="button" name="button" class="btn btn-sm btn-primary">更多专家</button>
      </router-link>
    </div>
    <div class="expert_recommend_container container">
      <el-row :gutter="20" type="flex" justify="space-around">
        <template v-for="item in expertList">
          <el-col :span="4" style="padding: 0;">
            <el-row>
              <img :src="item.avatar" :alt="item.name">
            </el-row>
            <el-row style="padding: 0 10px;">
              <h5 style="color: #1D8CE0;">{{ item.name }}</h5>
              <p>{{ item.title }}</p>
            </el-row>
          </el-col>
        </template>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      expertList: [
        { avatar: 'http://static.int-yt.com/img/6384cc6d-a19c-45f4-822d-7f3ac451cf48.png', name: '陈恩红', title: '中国科学技术大学计算机学院副院长、教授' },
        { avatar: 'http://static.int-yt.com/img/97b59fb9-d5ea-4d66-928c-07924e9be5be.png', name: '车品觉', title: '阿里巴巴集团副总裁' },
        { avatar: 'http://static.int-yt.com/img/d4580279-f518-42eb-8a35-aac7fa688fc2.png', name: '陈恩红', title: '中国科学技术大学计算机学院副院长、教授' },
        { avatar: 'http://static.int-yt.com/img/57180b3b-30eb-483a-ac07-8261d88f0e71.png', name: '卜佳俊', title: '浙江大学软件学院教授' },
        { avatar: 'http://static.wid.org.cn/img/4ab81219-f243-44cf-99d1-a8e94625c425.jpg', name: '陈恩红', title: '中国科学技术大学计算机学院副院长、教授' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="css">
</style>
