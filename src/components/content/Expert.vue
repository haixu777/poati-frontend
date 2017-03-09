<template lang="html">
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane  v-for="item in expertCategory" :label="item" :name="item">
        <div class="expert_flex_container">
          <template v-for="item in expertList">
            <div class="expert_flex_card" v-if="activeIndex == item.index">
              <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" alt="avatar" class="image">
                <div style="padding: 5px;">
                  <h4>{{ item.name }}</h4>
                  <div :class="{ bottom: true, bottom_br: item.name=='林俊宇' }">
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </el-card>
            </div>

            <div class="expert_flex_card" v-if="activeIndex == 0">
              <el-card :body-style="{ padding: '0px' }">
                <img src="http://element.eleme.io/static/hamburger.50e4091.png" alt="avatar" class="image">
                <div style="padding: 5px;">
                  <h4>{{ item.name }}</h4>
                  <div :class="{ bottom: true, bottom_br: item.name=='林俊宇' }">
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </el-card>
            </div>
          </template>
        </div>
        <!--
        <ul>
          <template v-for="item in expertList">
            <li v-if="item.index === activeIndex" class="expert_container">
              <el-row :gutter="20">
                <el-col :span="8" class="expert_left">
                  <div class="expert_avator_container">
                    <img :src="item.img" :alt="item.name">
                  </div>
                </el-col>
                <el-col :span="16" class="expert_right">
                  <h4>{{ item.name }}</h4>
                  <h5 style="padding: 0 10px; border-left: 3px solid #20a0ff;">{{ (item.title?item.title+'、':'') + expertCategory[item.index] }}</h5>
                  <p>{{ item.introdution }}</p>
                </el-col>
              </el-row>
            </li>

            <li v-if="activeIndex === 0" class="expert_container">
              <el-row :gutter="20">
                <el-col :span="8" class="expert_left">
                  <div class="expert_avator_container">
                    <img :src="item.img" :alt="item.name">
                  </div>
                </el-col>
                <el-col :span="16" class="expert_right">
                  <h4>{{ item.name }}</h4>
                  <h5 style="padding: 0 10px; border-left: 3px solid #20a0ff;">{{ (item.title?item.title+'、':'') + expertCategory[item.index] }}</h5>
                  <p>{{ item.introdution }}</p>
                </el-col>
              </el-row>
            </li>
          </template>
        </ul>
        -->

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      activeName: '全部',
      activeIndex: 0,
      expertCategory: ['全部', '技术委员会主席', '技术委员会委员'],
      expertList: [
        { avatar: '', name: '张钹', title: '中国科学院院士、清华大学教授', index: 1 },
        { avatar: '', name: '高文', title: '中国工程院院士、北京大学教授', index: 1 },
        { avatar: '', name: '吴朝晖', title: '浙江大学校长、教授', index: 1 },
        { avatar: '', name: '李涓子', title: '清华大学、教授', index: 1 },
        { avatar: '', name: '周明', title: '微软亚洲研究院、研究员', index: 2 },
        { avatar: '', name: '赵军', title: '中国科学院自动化所、研究员', index: 2 },
        { avatar: '', name: '刘挺', title: '哈尔滨工业大学、教授', index: 2 },
        { avatar: '', name: '王斌', title: '中国科学院信息工程研究所、研究员', index: 2 },
        { avatar: '', name: '陈华钧', title: '浙江大学、教授', index: 2 },
        { avatar: '', name: '漆桂林', title: '东南大学、教授', index: 2 },
        { avatar: '', name: '沈阳', title: '清华大学、教授', index: 2 },
        { avatar: '', name: '于海涛', title: '腾讯公司信息安全部、总经理', index: 2 },
        { avatar: '', name: '施水才', title: '北京拓尔思信息技术股份有限公司、CEO', index: 2 },
        { avatar: '', name: '杜跃进', title: '阿里巴巴安全部、技术副总裁（拟邀请）', index: 2 },
        { avatar: '', name: '林俊宇', title: '中国科学院信息工程研究所', index: 2 }
      ]
    }
  },
  methods: {
    handleClick: function (tab, event) {
      this.activeIndex = Number(tab.index)
    }
  },
  mounted () {
    store.commit('changeTitle', '技术委员会')
  }
}
</script>

<style lang="scss" scoped>
  .expert_flex_container {
    padding-left: 20px;
    text-align: left;
    .expert_flex_card {
      display: inline-block;
      width: 255px;
      height: 330px;
      margin: 10px;
      h4 {
        text-align: center;
        color: rgb(29, 140, 224);
      }
      .image {
        width: 100%;
        display: block;
      }
      .bottom {
        text-align: center;
      }
      .bottom_br {
        padding-bottom: 20px;
      }
    }
  }
/*
  .container {
    ul {
      list-style: none;
      padding-left: 0;
      .expert_container {
        background: #fff;
        margin: 10px 0;
        padding: 10px;
        padding-right: 20px;
        border-radius: 5px;
        border: 1px solid #dfe6ec;
        .expert_left {
          .expert_avator_container {
            width: 200px;
            height: 200px;
            margin: 0 auto;
            img {
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 8px solid rgb(234, 235, 236);
            }
          }
        }
        .expert_right {
          text-align: left;
          padding-top: 20px;
        }
      }
    }
  }
  */

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
