<template>
  <cube-container>
    <div class="doc">
      <p class="p"><em>本保单分项责任保险金额以保单载明的为准，质子重离子医疗保险金和恶心肿瘤医疗保险金的年度累计保额为300万元 , 其中质子重离子医疗保险金限额为100万元 。</em></p>
      <p class="p"><em>本产品针对首次投保或非续保保单，等待期为90天，续保无等待期。</em></p>
      <p class="p"><em>本保单免赔额为0元。</em></p>
      <p class="p"><em>本保单对被保险人在上海质子重离子医院接受质子重离子治疗所支付的医疗费用按照100%比例赔付，床位费以1500元/天为限。</em>不承担被保险人在上海质子重离子医院接受化学疗法、肿瘤免疫疗法、肿瘤内分泌疗法和肿瘤靶向疗法所产生的治疗费用。
      </p>
      <p class="p"><em>（1）若被保险人以参加基本医疗保险身份投保，并以基本医疗保险身份就诊并结算，赔付比例为100%；（2）若被保险人以参加基本医疗保险身份投保，但未以基本医疗保险身份就诊并结算，赔付比例为60%；（3）若被保险人未以参加基本医疗保险身份投保并结算，赔付比例为100%。</em>
      </p>
      <p class="p"><em>本产品恶性肿瘤住院津贴医疗保险金给付标准为：100元/天，无免赔天数，每次住院最高给付不超过90天，全年累计给付不超过180天。</em></p>
      <p class="p"><em>恶性肿瘤医疗保险金和质子重离子医疗保险金的保险责任均不包含本合同约定的医院或指定医疗机构的医生开具的当前治疗必需的药品处方中所列无法在本合同约定的医院或指定医疗机构内获得的药品、任何医用材料或者其他任何医疗项目。</em>
      </p>
      <p class="p"><em>本保单不承保以下高风险职业人员：地下、井下、山洞作业、木材加工、建筑工地现场施工、采矿业/采盐业/油业的人员；或焊接工、冲床工、磨工、镗工、钻床工、拉床工、锯床工、剪床工、铣床工、铸造工、车床工；或与有毒、有害、腐蚀气体或物质接触的任何职业；或与电力电压有关的任何职业；或爆破人员或烟火加工人员等。若被保险人目前专职或兼职从事以上所列的职业发生保险事故，本公司不承担赔偿或给付保险金的责任。</em>
      </p>
      <p class="p">本保单不设犹豫期，保单生效后投保人要求解除本合同，保险人根据以下计算公式退还未满期净保费：</p>
      <p class="p">若选择一次性缴付保险费，未满期净保费=净保费×（1-m/n），其中，m为已生效天数，n为保险期间的天数，经过日期不足一日的按一日计算。</p>
      <p class="p">若选择分期缴付保险费，未满期净保费=当期净保费×（1-m/n）,其中，m为当期已生效天数，n为当期天数，经过日期不足一日的按一日计算。</p>
      <p class="p">在您要求解除本合同的保单年度内，如果我们已给付过任何保险金，则不退还未满期净保费。</p>
      <p class="p">
        本产品为不保证续保产品。保险期间届满，投保人需要重新向保险公司申请投保本产品，并经保险人同意，交纳保险费，获得新的保险合同。如果投保人未按照约定重新向保险公司申请投保本产品并交纳保险费，或保险人审核不同意重新投保的，则本保险合同在保险期间届满时终止。</p>
      <p class="p">
        绿色服务通道说明：若等待期后罹患恶性肿瘤（重大疾病），可拨打太平官方客服电话95589，免费申请以下一项或多项恶性肿瘤绿色通道就医服务，包括二次诊断（1次）、住院安排（1次）、手术安排（1次）、全程就医陪同、恶性肿瘤住院医疗费用垫付服务。</p>
      <p class="p">本产品适用条款为《太平财产保险有限公司恶性肿瘤住院医疗费用保险（互联网专属2021-A版）》（注册编号C00002632512021123166103），未尽事宜请以条款为准。</p>
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
