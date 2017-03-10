<template lang="html">
  <div class="container help_container">
    <h4 class="title">关于我们</h4>
    <p>中科院信工所网络空间技术实验室面向国家战略需求，基于云计算和大数据、数据挖掘和机器学习、知识图谱技术解决网络与信息安全问题。实验室人员近年来在SIGMOD、 VLDB、 ICDE、OOPSLA、 ICDCS等国际顶级会议以及IEEE/ACMTransactions等国际权威期刊上发表数十篇高水平学术论文，并承担了多项国家重大项目，课题经费充足。</p>
    <p>目前还有少量2017年推免生名额，欢迎广大优秀应届本科生申请，并于10月15日24:00前把相关信息反馈给联系人（见文章结尾部分）。同时欢迎广大考生报考2017年硕士、博士学位研究生。</p>
    <h5>研究方向</h5>
    <p>网络空间技术实验室旨在面向互联网+时代的大数据处理战略需求，研究大数据的存储与管理、分布式计算与并行处理、网络信息内容挖掘分析、多媒体分析以及网络空间安全的前瞻性、基础性技术，开发自主可控的技术平台，并在国家重大任务和重点行业互联网+发展中进行应用。</p>
    <h5>&nbsp;&nbsp;1.大数据存储</h5>
    <p>致力于研究解决企业级大数据处理中的性能优化与可靠性问题。</p>
    <p>在智能电网的大规模数据处理需求的牵引下，提出了企业级大数据处理问题，研究形成了多维索引DFGIndex、SQL-MapReduce翻译方法QMapper、支持更新的混合存储模型DualTable，并在电网完成了成功应用。该工作发表于数据库顶级会议PVLDB 2014，ICDE 2015，SIGMOD 2015上。</p>
    <h5>&nbsp;&nbsp;2.分布式计算</h5>
    <p>致力于研究解决大规模分布式系统软件开发中的共性关键问题，解决大规模分布式系统的结构、通信和路由优化问题。</p>
    <p>针对服务质量敏感的自动组合问题，提出了一种新的标记图模型及相应的最短有向无环图搜索算法，并成功应用到了服务组合以及API推荐领域。相关学术论文发表在ICSE、ICWS、IEEE Trans on Service Computing上。提出了网络环境中基于事件的服务发现方法和基于社交与概念网络的事件路由方法，提出并解决了分布式消息系统移动客户端事务保障问题及其协议和算法。相关论文发表在OOPSLA 2010，ICDCS 09上。</p>
    <h5>&nbsp;&nbsp;3.多媒体分析</h5>
    <p>致力于解决大数据时代多媒体内容的分析与安全问题，包括但不限于多媒体内容检索、理解及多媒体舆情分析等。针对国家多媒体安全的重大需求，提出了融合快速检测与综合分析的音视频及图文内容分析整体框架，并成功应用于国家重大系统中。针对视频及图像中场景文字的检测与识别问题，提出了融合超分辨率与笔画宽度变换的文字检测新方法，提出了基于特征压缩与重排序的变形场景文字识别方法。相关工作发表于IEEE/ACM TON、ACM MM、ICME等CCF-A/B类等著名期刊和会议上，并获得ACCV IWRR 2014最佳论文奖。</p>
    <h5>&nbsp;&nbsp;4.信息内容挖掘</h5>
    <p>致力于研究解决舆情分析等互联网信息内容安全问题。</p>
    <p>针对互联网舆情监测、预警等问题，探索知识推理和统计学习相结合的技术路线，研究基于知识图谱的网络舆情分析方法。目前已承担了国家相关部门的多个重大任务，并取得了初步成效。</p>
    <h5>&nbsp;&nbsp;5.网络空间安全</h5>
    <p>致力于研究解决漏洞挖掘、网络与系统脆弱性分析与风险评估方法、智能终端安全、恶意代码分析与防范、入侵检测和取证、网络攻防、网络安全体系结构等问题。</p>
    <h4 class="title">联系我们</h4>
    <p>地址: 北京市海淀区闵庄路甲89号</p>
    <p>邮箱: linjunyu@iie.ac.cn</p>
  </div>
</template>

<script>
import store from '../../store'
export default {
  data () {
    return {
    }
  },
  mounted () {
    store.commit('changeTitle', '帮助')
  }
}
</script>

<style lang="scss">
  .help_container {
    min-height: 790px;
    background: #fff;
    text-align: left;
    border-radius: 5px;
    border: 1px solid #dfe6ec;
    margin: 10px 0;
    font-size: 14px;
    h5 {
      font-size: 15px;
    }
    .title {
      padding: 0 10px;
      border-left: 3px solid #20a0ff;
    }
    img {
      width: 500px;
      height: 300px;
    }
    p {
      text-indent: 2.5rem;
    }
  }
</style>
