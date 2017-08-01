<template lang="html">
  <div class="news_container container">
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
      <!-- <el-tab-pane label="邀请赛" name="contest"> -->
        <template v-for="item in newsList">
          <div class="item_container clearfix">
            <el-row>
              <el-col :span="24">
                <!-- <router-link :to="'/news/details/'+item.id" style="text-decoration: none;">
                  <h4 class="item_titile" style="text-align: left; padding-left: 25.5rem">{{ item.title }}</h4>
                </router-link> -->
                <a :href="'/news/details/'+item.id" target="_blank">
                  <h4 class="item_titile" style="text-align: left; padding-left: 25.5rem">{{ item.title }}</h4>
                </a>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="7">
                <div class="item_container_left">
                  <img :src="item.avatar" alt="avator">
                </div>
              </el-col>
              <el-col :span="17">
                <div class="item_container_right">
                  <el-row>
                    <p>{{ '发布时间: ' + item.time }}</p>
                  </el-row>
                  <el-row>
                    <p>{{ item.desc }}</p>
                  </el-row>
                  <el-row style="text-align: right;">
                    <a :href="'/news/details/'+item.id" target="_blank">
                      <el-button class="btn-sm" type="primary">查看详情</el-button>
                    </a>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
        </template>
      <!-- </el-tab-pane> -->
      <!-- <el-tab-pane label="资讯" name="info">资讯</el-tab-pane> -->
    <!-- </el-tabs> -->
  </div>
</template>

<script>
import store from '../../store'
const utils = require('../../../utils/util')
export default {
  data () {
    return {
      activeName: 'contest',
      newsList: [
      ]
    }
  },
  methods: {
    handleClick () {
    },
    fetchNewsListFromServer () {
      this.$http.get('news/fetchList.do')
        .then((d) => {
          if (d.body.success) {
            this.newsList = d.body.newsList
            this.newsList.forEach(function (item) {
              item.time = utils.formatTime(item.time)
            })
          }
        })
    }
  },
  mounted () {
    store.commit('changeTitle', '往届回顾')
    this.fetchNewsListFromServer()
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss" scoped>
  .news_container {
    min-width: 1172px;
    .item_container {
      background: #fff;
      border-radius: 5px;
      margin: 10px 0;
      border: 1px solid #dfe6ec;
      padding: 0 50px 10px 50px;
      a {
        text-decoration: none;
      }
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
