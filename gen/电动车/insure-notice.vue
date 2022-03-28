<template>
  <base-layout>
    <template #main>
      <div class="doc">
        <p class="p">投保须知</p>
        <p class="p"><span style="color: #101010">【产品介绍】</span></p>
        <p class="p"><span
            style="color: #101010">1.在平台上正式注册为用户、年龄为18-65周岁身体健康、职业类别为1-4类身体健康可正常工作的会员可作为被保险人参加本保险计划。 </span></p>
        <p class="p"><span style="color: #101010">2.本保险计划为团体保险计划，不向个人提供个人保单及发票，被保险人职业类别以出险时所从事的职业为准。</span></p>
        <p class="p"><span style="color: #101010">【如实告知】</span></p>
        <p class="p"><span style="color: #101010">1.如实告知：您应如实填写投保信息，并就我们提出的询问据实告知，否则我们有权利根据《中华人民共和国保险法》第十六条的规定解除保险合同且不承担赔偿责任：</span>
        </p>
        <p class="p"><span style="color: #101010">1）订立保险合同时，保险公司就保险标的或者被保险人的有关情况提出询问的，投保人应当如实告知。</span></p>
        <p class="p"><span
            style="color: #101010">2）投保人故意或者因重大过失未履行前款规定的如实告知义务，足以影响保险公司决定是否同意承保或者提高保险费率的，保险公司有权解除合同。</span></p>
        <p class="p"><span style="color: #101010">3）投保人故意不履行如实告知义务的，保险公司对于合同解除前发生的保险事故，不承担赔偿责任，并不退还保险费。</span></p>
        <p class="p"><span
            style="color: #101010">4）投保人因重大过失未履行如实告知义务，对保险事故的发生有严重影响的，保险公司对于合同解除前发生的保险事故，不承担赔偿责任，但退还保险费。</span></p>
        <p class="p"><span style="color: #101010">2.相关授权：如您投保此保险，视为您本人授权新华人寿可以从任何单位、组织和个人就有关保险事宜查询、索取与本人有关的资料和证明，作为审核本投保申请及评估相关理赔申请的依据。</span>
        </p>
        <p class="p"><span style="color: #101010">【其他信息】</span></p>
        <p class="p"><span style="color: #101010">1.我们严格遵守现行的关于个人信息、数据及隐私保护的法律法规，采取充分的技术手段和制度管理，保护您提供给我们的个人信息、数据和隐私不受到非法的泄露或披露给未获授权的第三方。</span>
        </p>
        <p class="p"><span style="color: #101010">2.您在购买产品过程中，如发现本公司有关人员有违法、违规行为，或认为自身权益受到侵犯，请您保留相关证据并向本公司投诉。</span></p>
      </div>
    </template>
  </base-layout>
</template>

1

<style lang="scss" scoped>
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
    padding: 15px 0 15px;
  }
}

.p {
  width: 100%;
  padding: 15px 0;
  font-size: 28px;
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
