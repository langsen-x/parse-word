<template>
  <cube-container>
    <div class="doc">
      <p class="p"><em>责任免除</em></p>
      <p class="p"><em> 因下列情形之一造成被保险人医疗费用支出的，保险人不承担给付保险金的责任：</em></p>
      <p class="p"><em>（一）被保险人在初次投保前或非续保前及等待期内确诊为恶性肿瘤；等待期内接受检查但在等待期后确诊恶性肿瘤的；</em></p>
      <p class="p"><em>（二）遗传性疾病，先天性畸形、变形或染色体异常（以世界卫生组织颁布的《疾病和有关健康问题的国际统计分类（ICD－10）》为准；</em></p>
      <p class="p"><em>（三）投保人、受益人对被保险人的故意杀害、故意伤害；</em></p>
      <p class="p"><em>（四）被保险人故意自伤、故意犯罪或者抗拒依法采取的刑事强制措施；</em></p>
      <p class="p"><em>（五）保险单中特别约定的除外疾病； </em></p>
      <p class="p"><em>（六）被保险人殴斗、醉酒；服用、吸食或注射毒品； </em></p>
      <p class="p"><em>（七）核爆炸、核辐射或核污染、化学污染； </em></p>
      <p class="p"><em>（八）接种预防恶性肿瘤的疫苗，进行基因测试，鉴定恶性肿瘤的遗传性，接受实验性医疗，以及采取未经科学或医学认可的医疗手段； </em></p>
      <p class="p"><em>（九）任何职业病、医疗事故引起的医疗费用；</em></p>
      <p class="p"><em>（十）感染艾滋病病毒或患艾滋病期间。</em></p>
      <p class="p"><em>未尽事宜，请参照保险人《太平财产保险有限公司恶性肿瘤住院医疗费用保险（互联网专属2021-A版）》（注册编号C00002632512021123166103）。</em></p>
      <p class="p"><em> </em></p>
    </div>
  </cube-container>
</template>

<script>
import CubeContainer from '@components/container/container'

export default {
  components: {
    CubeContainer,
  }
}
</script>

<style lang="less" scoped>
.doc {
  width: 100%;
  padding: 45px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.h1 {
  width: 100%;
  padding: 5px 0 0;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  word-break: break-all;

  &:first-of-type {
    padding-top: 15px;
  }

  &:last-of-type {
    padding-bottom: 35px;
  }
}

.h2 {
  width: 100%;
  padding: 35px 0 15px;
  font-size: 30px;
  line-height: 32px;
  text-align: center;

  &:first-of-type {
    padding: 15px 0 35px;
  }
}

.p {
  width: 100%;
  padding: 15px 0;
  font-size: 28px;
  font-weight: 400;
  color: #333333;
  line-height: 45px;
  text-align: justify;
  /*根据文档是否选择*/
  /*text-indent: 2em;*/
}

em {
  font-style: normal;
  font-weight: bold;
}
</style>
