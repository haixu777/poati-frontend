<template lang="html">
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane  v-for="item in expertCategory" :label="item" :name="item">
        <ul>
          <li v-for="item in expertList">
            <div class="expert_container clearfix">
              <div class="expert_left">
                <img :src="item.img" :alt="item.name">
              </div>
              <div class="expert_right">
                <p>{{ item.name }}</p>
                <p>{{ item.introdution }}</p>
              </div>
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeName: '全部',
      expertCategory: ['全部', '中科院士', '评审专家', '专业导师'],
      expertList: [
        { img: 'http://static.int-yt.com/img/ef6b505e-cc4e-4f41-9e03-3403bde7e92c.png', name: '黄龙涛', introdution: 'testalskdlaksdn' },
        { img: 'http://static.int-yt.com/img/ef6b505e-cc4e-4f41-9e03-3403bde7e92c.png', name: '黄龙涛', introdution: 'testalskdlaksdn' },
        { img: 'http://static.int-yt.com/img/ef6b505e-cc4e-4f41-9e03-3403bde7e92c.png', name: '黄龙涛', introdution: 'testalskdlaksdn' },
        { img: 'http://static.int-yt.com/img/ef6b505e-cc4e-4f41-9e03-3403bde7e92c.png', name: '黄龙涛', introdution: 'testalskdlaksdn' },
        { img: 'http://static.int-yt.com/img/ef6b505e-cc4e-4f41-9e03-3403bde7e92c.png', name: '黄龙涛', introdution: 'testalskdlaksdn' }
      ]
    }
  },
  methods: {
    handleClick: function (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style lang="scss">
  .container {
    ul {
      padding: 0;
      li {
        list-style: none;
        .expert_container {
          padding: 10px;
          border-bottom: 1px solid #eee;
          .expert_left {
            width: 10%;
            float: left;
          }
          .expert_right {
            width: 88%;
            float: right;
          }
        }
      }
    }
  }

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
