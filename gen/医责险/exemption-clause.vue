<template>
  <view class="doc">
    <p class="p"><em>责任免除</em></p>
    <p class="p"><em>一、存在下列情形的，保险人不负责赔偿：</em></p>
    <p class="p"><em> （一）被保险人不具有医师执业证书或从事与其执业资格不符的诊疗活动，或执业证书被吊销，医师资格被注销或暂停执业期间仍继续进行诊疗活动的；</em></p>
    <p class="p"><em> （二）被保险人使用未经卫生行政部门批准使用的药品、消毒药剂和医疗器械的；</em></p>
    <p class="p"><em>（三）被保险人进行未经医疗机构批准或未征得患者本人或其家属同意的试验性医疗活动；</em></p>
    <p class="p"><em>（四）患者或者其近亲属不配合医疗机构进行符合诊疗规范的诊疗，被保险人没有过错的；</em></p>
    <p class="p"><em>（五）被保险人在抢救生命垂危的患者等紧急情况下已经尽到合理诊疗义务；</em></p>
    <p class="p"><em>（六）限于当时的医疗水平难以诊疗。</em></p>
    <p class="p"><em>二、下列原因造成的损失、费用和责任，保险人不负责赔偿：</em></p>
    <p class="p"><em>（一）投保人、被保险人或医疗机构的故意行为、犯罪行为和非执业行为；</em></p>
    <p class="p"><em> （二）战争、敌对行为、军事行动、武装冲突,恐怖活动、罢工、骚乱、暴动，及盗窃、抢劫；</em></p>
    <p class="p"><em> （三）核反应、核子辐射和放射性污染，但使用放射器材治疗发生的赔偿责任，不在此限；</em></p>
    <p class="p"><em>（四）自然灾害；</em></p>
    <p class="p"><em>（五）火灾、爆炸等意外事故；</em></p>
    <p class="p"><em>（六）因药品、消毒药剂、医疗器械的缺陷，或者输入不合格血液，或药品不良反应；</em></p>
    <p class="p"><em>（七）投保人、被保险人在投保之前已经知道或可以合理预见的索赔情况。</em></p>
    <p class="p"><em>三、下列损失、费用和责任，保险人也不负责赔偿：</em></p>
    <p class="p"><em>（一）被保险人的人身伤亡； </em></p>
    <p class="p"><em> （二）罚款、罚金或惩罚性赔偿；</em></p>
    <p class="p"><em>（三）被保险人根据与患方签订的协议应承担的责任，但即使没有这种协议，被保险人依法仍应承担的责任不在此限；</em></p>
    <p class="p"><em>（四）间接损失；</em></p>
    <p class="p"><em>（五）财产损失；</em></p>
    <p class="p"><em>（六）精神损害赔偿；</em></p>
    <p class="p"><em>（七）本保险单载明的免赔额或按免赔率计算的免赔额。</em></p>
  </view>
</template>

<style scoped lang="scss">
.doc {
  width: 100%;
  padding: upx(45) upx(40);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.h1 {
  width: 100%;
  padding: upx(5) 0 0;
  font-size: upx(36);
  line-height: upx(45);
  text-align: center;

  &:first-of-type {
    padding-top: upx(15);
  }

  &:last-of-type {
    padding-bottom: upx(35);
  }
}

.h2 {
  width: 100%;
  padding: upx(35) 0 upx(15);
  font-size: upx(30);
  line-height: upx(32);
  text-align: center;

  &:first-of-type {
    padding: upx(15) 0 upx(15);
  }
}

.p {
  width: 100%;
  padding: upx(15) 0;
  font-size: upx(28);
  line-height: upx(45);
  text-align: justify;
  /*根据文档是否选择*/
  /*text-indent: 2em;*/
}

em {
  font-style: normal;
  font-weight: bold;
}
</style>
