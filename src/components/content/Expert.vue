<template lang="html">
  <div class="container">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane  v-for="item in expertCategory" :label="item" :name="item">
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
      expertCategory: ['全部', '中科院士', '评审专家', '专业导师'],
      expertList: [
        { img: 'http://static.int-yt.com/img/ef6b505e-cc4e-4f41-9e03-3403bde7e92c.png', name: '梅宏', title: '阿里巴巴集团副总裁、教授', introdution: '中国科学院院士、发展中国家科学院院士、上海交通大学副校长、国际电机电子工程学会会士（IEEE Fellow)。现任国家863计划“十二五”信息技术领域先进计算技术主题专家组组长，中国计算机学会系统软件专业委员会主任，中国软件行业协会副理事长，全国信息技术标准化技术委员会SOA分技术委员会主任，全国信标委大数据标准工作组组长，国务院学位委员会计算机科学与技术学科评议组成员，教育部科学技术委员会委员。', index: 1 },
        { img: 'http://static.int-yt.com/img/55496c97-68b2-49a0-8275-4a44964bf09d.png', name: '黄龙涛', title: '中国科学院计算技术研究所副研究员', introdution: '车品觉，畅销书《决战大数据》作者，多年来致力于研究大数据和互联网的发展趋势。现任阿里巴巴集团副总裁 、数据委员会会长，并担任中国信息协会大数据分会副会长、中国计算数学学会第九届理事、清华大学教育指导委员、中国科学院大学专家委员会委员、上海交通大学客座教授等职。', index: 1 },
        { img: 'http://static.int-yt.com/img/6384cc6d-a19c-45f4-822d-7f3ac451cf48.png', name: '黄龙涛', title: '太原理工大学计算机学院教授', introdution: '中国科学技术大学计算机学院教授，国家杰出青年基金获得者。现任校学术委员会委员、计算机学院副院长、语音及语言信息处理国家工程实验室副主任，中国计算机学会大数据专家委员会委员。多次担任KDD、ICDM、SDM等数据挖掘领域顶级国际学术会议程序委员，担任2014年全国数据挖掘会议程序委员会主席、2015年中国计算机大会（CNCC 2015）程序委员会共同主席、2015年全国大数据会议程序委员会主席等。', index: 2 },
        { img: 'http://static.wid.org.cn/img/4d0b04b1-fdb7-4944-99d9-aab707eea0e5.jpg', name: '黄龙涛', title: '', introdution: '中国计算机学会大数据专家委员会委员，美国华盛顿大学计算机系终身教授。研究领域为数据挖掘、机器学习、优化算法及其在医疗、电信大数据应用等。在TKDE、JAIR、AIJ、ICML、KDD、IJCAI、AAAI等国际期刊和会议上发表论文120余篇。获KDD(2014)、AAAI (2010)、ICTAI(2005)、ICMLC(2004)等会议最佳论文奖。曾获美国微软青年教授奖(2007)和美国能源部杰出青年教授奖（2006)。', index: 3 },
        { img: 'http://static.int-yt.com/img/48b63ffc-95b7-4d0f-a529-41a02739fe56.png', name: '黄龙涛', title: '工业和信息化部软件与集成电路促进中心云计算研究中心主任', introdution: '中国科学院计算技术研究所研究员、博士生导师、中科院网络数据科学与技术重点实验室主任，国家杰出青年基金获得者。兼任中国计算机学会大数据专委会秘书长，中国中文信息学会常务理事。两次获得国家科技进步二等奖，多次获得省部级及行业学会的科技奖，获授权发明专利十余项。获第十二届中国青年科技奖、中国计算机学会青年科学家奖、中国科学院青年科学家奖、中创软件人才奖，并入选国家百千万人才工程，获得“有突出贡献中青年专家”称号。', index: 2 }
      ]
    }
  },
  methods: {
    handleClick: function (tab, event) {
      this.activeIndex = tab.index
      console.log(tab, event)
    }
  },
  mounted () {
    store.commit('changeTitle', '专家')
  }
}
</script>

<style lang="scss" scoped>
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

  .clearfix {
    overflow: auto;
    _height: 1%;
  }
</style>
