<template lang="html">
  <div class="_container">
    <div class="experts_container clearfix">
      <div class="title">
        <h4>比赛指导委员会联合主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertUnionChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛技术委员会主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertCommitteeChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛技术委员会委员</h4>
      </div>
      <div class="experts_item" v-for="item in expertMembers">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛组织委员会主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertOrgChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛组织委员会成员</h4>
      </div>
      <div class="experts_item" v-for="item in expertsOrgMember">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛评测主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertsTestChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛评测委员会委员</h4>
      </div>
      <div class="experts_item" v-for="item in expertsTestMember">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛监督委员会主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertsInspectChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛监督委员会委员</h4>
      </div>
      <div class="experts_item" v-for="item in expertsInspectMember">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
      <div class="title clearfix">
        <h4>比赛宣传主席</h4>
      </div>
      <div class="experts_item" v-for="item in expertsProChairman">
        <div class="experts_avatar">
          <img :src="item.avatar" alt="" style="">
        </div>
        <div class="experts_desc">
          <span style="color:rgb(29, 140, 224);font-weight:600;">{{ item.name }}</span>
          <span style="margin-left:20px;">{{ item.title }}</span>
        </div>
      </div>
    </div>



    <el-tabs v-model="activeName" @tab-click="handleClick" v-if="false">
      <el-tab-pane  v-for="item in expertCategory" :label="item" :name="item">
        <div class="expert_flex_container">
          <template v-for="item in expertList">
            <div class="expert_flex_card" v-if="activeIndex == item.index">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.avatar" alt="avatar" class="image">
                <div style="padding: 5px;">
                  <h4>{{ item.name }}</h4>
                  <div :class="{ bottom: true, bottom_br: item.name=='林俊宇' }">
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </el-card>
            </div>

            <div class="expert_flex_card" v-if="false">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="item.avatar" alt="avatar" class="image">
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

    <div class="expert_flex_container" v-if="false">
      <h4>比赛指导委员会联合主席</h4>
      <div class="expert_flex_card" v-for="item in expertUnionChairman">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.avatar" alt="avatar" class="image">
          <div style="padding: 5px;">
            <h4>{{ item.name }}</h4>
            <div :class="{ bottom: true }">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
      <h4>比赛主席</h4>
      <div class="expert_flex_card" v-for="item in expertChairman">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.avatar" alt="avatar" class="image">
          <div style="padding: 5px;">
            <h4>{{ item.name }}</h4>
            <div :class="{ bottom: true }">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
      <h4>比赛技术委员会主席</h4>
      <div class="expert_flex_card" v-for="item in expertCommitteeChairman">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.avatar" alt="avatar" class="image">
          <div style="padding: 5px;">
            <h4>{{ item.name }}</h4>
            <div :class="{ bottom: true }">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </el-card>
      </div>
      <h4>比赛技术委员会委员</h4>
      <div class="expert_flex_card" v-for="item in expertMembers">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.avatar" alt="avatar" class="image">
          <div style="padding: 5px;">
            <h4>{{ item.name }}</h4>
            <div :class="{ bottom: true }">
              <p>{{ item.title }}</p>
            </div>
          </div>
        </el-card>
      </div>

    </div>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
      activeName: '比赛指导委员会联合主席',
      activeIndex: 0,
      expertCategory: [
        '比赛指导委员会联合主席',
        '比赛主席',
        '比赛技术委员会主席',
        '比赛技术委员会委员',
        '比赛组织委员会主席',
        '比赛组织委员会成员',
        '比赛评测主席',
        '比赛评测委员会委员',
        '比赛监督委员会主席',
        '比赛监督委员会委员',
        '比赛宣传主席'
      ],
      expertList: [
        { avatar: require('assets/experts/ZhangBo@.jpg'), name: '张钹', title: '中国科学院院士 | 清华大学教授', index: 0 },
        // { avatar: require('assets/experts/GaoWen@.jpg'), name: '高文', title: '中国工程院院士 | 北京大学教授', index: 1 },
        { avatar: require('assets/experts/WuChaoHui@.jpg'), name: '吴朝晖', title: '浙江大学校长 | 教授', index: 0 },
        { avatar: require('assets/experts/MengDan@.jpg'), name: '孟丹', title: '中国科学院信息工程研究所 | 所长', index: 1 },
        { avatar: require('assets/experts/LiJuanZi.jpg'), name: '李涓子', title: '清华大学 | 教授', index: 2 },
        { avatar: require('assets/experts/zhouMing@.jpg'), name: '周明', title: '微软亚洲研究院 | 研究员', index: 3 },
        { avatar: require('assets/experts/ZhaoJun.jpg'), name: '赵军', title: '中国科学院自动化所 | 研究员', index: 3 },
        { avatar: require('assets/experts/LiuTing.jpg'), name: '刘挺', title: '哈尔滨工业大学 | 教授', index: 3 },
        { avatar: require('assets/experts/WangBin.jpg'), name: '王斌', title: '中国科学院信息工程研究所 | 研究员', index: 3 },
        { avatar: require('assets/experts/ChenHuaJun@.jpg'), name: '陈华钧', title: '浙江大学 | 教授', index: 3 },
        { avatar: require('assets/experts/QiGuiLin@.jpg'), name: '漆桂林', title: '东南大学 | 教授', index: 3 },
        { avatar: require('assets/experts/ShenYang@.jpg'), name: '沈阳', title: '清华大学 | 教授', index: 3 },
        { avatar: require('assets/experts/YuHaiTao.jpg'), name: '于海涛', title: '腾讯公司信息安全部 | 总经理', index: 3 },
        { avatar: require('assets/experts/ShiShuiCai@.jpg'), name: '施水才', title: '北京拓尔思信息技术股份有限公司 | CEO', index: 3 },
        { avatar: require('assets/experts/ShiShuiCai@.jpg'), name: '张华平', title: '北京理工大学 | 副教授', index: 3 }
        // { avatar: require('assets/experts/DuYueJin@.jpg'), name: '杜跃进', title: '阿里巴巴安全部 | 技术副总裁（拟邀请）', index: 2 }
        // { avatar: require('assets/experts/LinJunYu.jpg'), name: '林俊宇', title: '中国科学院信息工程研究所', index: 2 }
      ],
      expertUnionChairman: [
        { avatar: require('assets/experts_80_110/zhangbo.jpg'), name: '张钹', title: '中国科学院院士 | 清华大学教授', index: 1 },
        { avatar: require('assets/experts_80_110/wuchaohui.jpg'), name: '吴朝晖', title: '浙江大学 | 校长', index: 1 }
      ],
      expertChairman: [
        { avatar: require('assets/experts_80_110/mengdan.jpg'), name: '孟丹', title: '中国科学院信息工程研究所 | 所长', index: 2 }
      ],
      expertCommitteeChairman: [
        { avatar: require('assets/experts_80_110/LiJuanZi.jpg'), name: '李涓子', title: '清华大学 | 教授', index: 3 }
      ],
      expertMembers: [
        { avatar: require('assets/experts_80_110/zhouming.jpg'), name: '周明', title: '微软亚洲研究院 | 研究员', index: 4 },
        { avatar: require('assets/experts_80_110/liuting.jpg'), name: '刘挺', title: '哈尔滨工业大学 | 教授', index: 4 },
        { avatar: require('assets/experts_80_110/ZhaoJun.jpg'), name: '赵军', title: '中国科学院自动化所 | 研究员', index: 4 },
        { avatar: require('assets/experts_80_110/WangBin.jpg'), name: '王斌', title: '中国科学院信息工程研究所 | 研究员', index: 4 },
        { avatar: require('assets/experts_80_110/chenhuajun.jpg'), name: '陈华钧', title: '浙江大学 | 教授', index: 4 },
        { avatar: require('assets/experts_80_110/qiguilin.jpg'), name: '漆桂林', title: '东南大学 | 教授', index: 4 },
        { avatar: require('assets/experts_80_110/shenyang.jpg'), name: '沈阳', title: '清华大学 | 教授', index: 4 },
        { avatar: require('assets/experts_80_110/YuHaiTao.jpg'), name: '于海涛', title: '腾讯公司信息安全部 | 总经理', index: 4 },
        { avatar: require('assets/experts_80_110/shishuicai.jpg'), name: '施水才', title: '北京拓尔思信息技术股份有限公司 | CEO', index: 4 },
        { avatar: require('assets/experts_80_110/zhanghuaping.jpg'), name: '张华平', title: '北京理工大学 | 副教授', index: 3 }
      ],
      expertOrgChairman: [
        { avatar: require('assets/experts_80_110/hanjizhong.jpg'), name: '韩冀中', title: '中国科学院信息工程研究所 | 网络空间技术实验室执行主任', index: 3 }
      ],
      expertsOrgMember: [
        { avatar: require('assets/experts_80_110/liuwantao.jpg'), name: '刘万涛', title: '中国科学院信息工程研究所', index: 3 },
        { avatar: require('assets/experts_80_110/daijiao.jpg'), name: '戴  娇', title: '中国科学院信息工程研究所', index: 3 },
        { avatar: require('assets/experts_80_110/zhouwei.jpg'), name: '周  薇', title: '中国科学院信息工程研究所', index: 3 }
      ],
      expertsTestChairman: [
        { avatar: require('assets/experts_80_110/husonglin.jpg'), name: '虎嵩林', title: '中国科学院信息工程研究所 | 网络空间技术实验室 | 研究员', index: 3 }
      ],
      expertsTestMember: [
        { avatar: require('assets/experts_80_110/liukang.jpg'), name: '刘  康', title: '中国科学院自动化研究所', index: 3 },
        { avatar: require('assets/experts_80_110/hanxianpei.jpg'), name: '韩先培', title: '中国科学院软件所', index: 3 },
        { avatar: require('assets/experts_80_110/liuzhiyuan.jpg'), name: '刘知远', title: '清华大学', index: 3 },
        { avatar: require('assets/experts_80_110/wanhuaiyu.jpg'), name: '万怀宇', title: '北京交通大学', index: 3 },
        { avatar: require('assets/experts_80_110/zangliangjun.jpg'), name: '臧良俊', title: '中国科学院信息工程研究所', index: 3 },
        { avatar: require('assets/experts_80_110/huanglongtao.jpg'), name: '黄龙涛', title: '中国科学院信息工程研究所', index: 3 }
      ],
      expertsInspectChairman: [
        { avatar: require('assets/experts_80_110/liuting.jpg'), name: '刘 挺', title: '哈尔滨工业大学 | 教授', index: 3 },
        { avatar: require('assets/experts_80_110/wangweiping.jpg'), name: '王伟平', title: '中国科学院信息工程研究所 | 研究员', index: 3 }
      ],
      expertsInspectMember: [
        { avatar: require('assets/experts_80_110/tangjie.jpg'), name: '唐 杰', title: '清华大学', index: 3 },
        { avatar: require('assets/experts_80_110/linzheng.jpg'), name: '林 政', title: '中国科学院信息工程研究所', index: 3 }
      ],
      expertsProChairman: [
        { avatar: require('assets/experts_80_110/wanghaofen.jpg'), name: '王昊奋', title: '深圳狗尾草智能科技有限公司', index: 3 },
        { avatar: require('assets/experts_80_110/linjunyu.jpg'), name: '林俊宇', title: '中国科学院信息工程研究所', index: 3 }
      ]
    }
  },
  methods: {
    handleClick: function (tab, event) {
      this.activeIndex = Number(tab.index)
    }
  },
  mounted () {
    store.commit('changeTitle', '大赛组织机构')
    document.documentElement.scrollTop = document.body.scrollTop = 0
  }
}
</script>

<style lang="scss" scoped>
  .experts_container {
    min-width: 1280px;
    min-height: 790px;
    background: #fff;
    text-align: left;
    border-radius: 5px;
    border: 1px solid #dfe6ec;
    margin: 10px auto;
    font-size: 15px;
    padding: 10px;
    font-weight: 400;
    .title {
      display: block;
      width: 100%;
      text-align: left;
    }
    .experts_item {
      float: left;
      display: inline-block;
      text-align: left;
      width: 600px;
      position: relative;
      // background: #fff;
      // border-radius: 5px;
      margin: 0 14px;
      padding: 5px;
      // border: 1px solid #dfe6ec;
      .experts_avatar {
        display: inline-block;
        border: 1px solid #eee;
        width: 80px;
        height: 110px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .experts_desc {
      margin-left: 20px;
      display: inline-block;
    }
  }
  .container {
    min-width: 1172px;
  }
  .expert_flex_container {
    padding-left: 20px;
    text-align: left;
    h4 {
      margin-left: 10px;
    }
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
        width: 253px;
        height: 254px;
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
  .expertList {
    background: #fff;
    border-radius: 5px;
    border: 1px solid #dfe6ec;
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
