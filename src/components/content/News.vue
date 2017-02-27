<template lang="html">
  <div class="news_container container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="邀请赛" name="contest">
        <template v-for="item in newsList">
          <div class="item_container clearfix">
            <el-row>
              <el-col :span="24">
                <h4 class="item_titile">{{ item.title }}</h4>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="7">
                <div class="item_container_left clearfix">
                  <img :src="item.avator" alt="avator">
                </div>
              </el-col>
              <el-col :span="17">
                <div class="item_container_right">
                  <el-row>
                    <p>{{ 'date: ' + item.time }}</p>
                  </el-row>
                  <el-row>
                    <p>{{ item.desc }}</p>
                  </el-row>
                  <el-row style="text-align: right;">
                    <router-link :to="'/news/details/'+item.id">
                      <el-button class="btn-sm" type="primary" @click="toNewsDetail(item.id)">查看详情</el-button>
                    </router-link>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </template>
      </el-tab-pane>
      <el-tab-pane label="资讯" name="info">资讯</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      activeName: 'contest',
      newsList: [
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '那块僵尸那达科家阿森纳达科撒', time: '2017-3-1', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '那块僵尸那达科家阿森纳达科撒', time: '2017-2-28', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '那块僵尸那达科家阿森纳达科撒', time: '2017-2-13', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '那块僵尸那达科家阿森纳达科撒', time: '2017-2-1', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' },
        { id: 1, title: '第一届全国网络舆情（音视频）分析技术邀请赛视频回顾', desc: '那块僵尸那达科家阿森纳达科撒', time: '2017-1-15', avator: 'http://static.wid.org.cn/img/8c4864a3-f261-4ce1-a05e-c5062747b8d3.jpg' }
      ]
    }
  },
  methods: {
    handleClick () {
    },
    toNewsDetail () {
      console.log('news')
    }
  },
  mounted () {
    store.commit('changeTitle', '新闻')
  }
}
</script>

<style lang="scss">
  .news_container {
    .item_container {
      background: #fff;
      border-radius: 5px;
      margin: 10px 0;
      border: 1px solid #dfe6ec;
      padding: 0 50px 10px 50px;
      .item_container_left {
        width: 230px;
        height: 138px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .item_container_right {
        text-align: left;
      }
    }
  }

  #el-tabs {
    margin: 0
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
