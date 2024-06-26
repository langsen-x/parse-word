<template>
    <view class="doc">
        <p class="h1">中国平安财产保险股份有限公司</p>
        <p class="h1">平安监护人责任保险附加被保险人保险条款</p>
        <p class="h1">注册号为： C00001730922020042700691</p>
        <p class="p">第一条 本附加保险合同须附加于监护人责任保险合同(以下简称“主保险合同”) 。主保险合同所附条款、投保单、保险单、保险凭证以及批单等，凡与本附加保险合同相关者，均为本附加保险合同的构成部分。凡涉及本附加保险合同约定，均应采用书面形式。</p>
        <p class="p">若主保险合同与本附加保险合同的条款互有冲突，则以本附加保险合同的条款为准。本附加保险合同未尽事宜，以主保险合同的条款规定为准。</p>
        <p class="p">第二条 兹经投保人、保险人双方同意，主保险合同载明的被监护人可视为附加被保险人。</p>
    </view>
</template>

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
