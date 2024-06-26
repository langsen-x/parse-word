// 文档自带的编号无法解析
const path = require('path')

const dir = 't3wg'
const cnName = '投保须知-T3网约车司机误工险0607'
const enName = 'insure-notice'
// const docxPath = path.resolve(__dirname, `../assets/${cnName}.docx`) // 源文档
const docxPath = path.resolve(__dirname, `../assets/${dir}/${cnName}.docx`) // 源文档
const outputPath = path.resolve(__dirname, `../gen/${dir}/${enName}.vue`) // 输出vue文件

const className = {
    doc: 'doc',
    title: 'h1',
    subTitle: 'h2',
    text: 'p'
}

// 没有设置为[]
const titleText = ['投保须知']
const subTitleText = []

// const titleText = [
//     '中国大地财产保险股份有限公司营业中断保险（B款）条款',
//     '（注册号：C00001030612020052900821）',
//     '中国大地财产保险股份有限公司企财险附加碰撞、倾覆保险条款',
//     '（注册号：C00001030622020061200511）',
//     '中国大地财产保险股份有限公司企财险附加法定传染病营业中断损失保险条款',
//     '（注册号：C00001030622020022700172）',
//     '中国大地财产保险股份有限公司个人住院津贴医疗保险（互联网专属）条款',
//     '（注册号：C00001032512022062306261）'
// ]
// const subTitleText = [
//     '总则', '责任免除', '保险金额', '保险人义务', '投保人与被保险人义务', '争议处理', '其他事项',
//     '保险责任', '责任免除', '保险金额与赔偿限额', '保险期间与最大赔偿期', '免赔额与免赔期 ', '赔偿处理', '其他事项', '释义',
//     '总则', '保险责任', '责任免除', '不保证续保', '保险人义务', '投保人、被保险人义务', '保险合同的变更与解除', '争议处理与法律适用', '释义',
// ]

// 没有设置为''
const script = ''

// const script = `<script>
// import CubeContainer from '@components/container/container'

// export default {
//   components: {
//     CubeContainer,
//   }
// }
// </script>`

// const style = `<style lang="less" scoped>
//         .doc {
//            width: 100%;
//            padding: 45px 40px;
//            box-sizing: border-box;
//            display: flex;
//            flex-direction: column;
//            justify-content: center;
//            align-items: center;
//         }
//
//         .h1 {
//             width: 100%;
//             padding: 5px 0 0;
//             font-size: 36px;
//             line-height: 45px;
//             text-align: center;
//             word-break: break-all;
//
//              &:first-of-type {
//                 padding-top: 15px;
//              }
//
//              &:last-of-type {
//                 padding-bottom: 35px;
//              }
//         }
//
//         .h2 {
//             width: 100%;
//             padding: 35px 0 15px;
//             font-size: 30px;
//             line-height: 32px;
//             text-align: center;
//
//             &:first-of-type {
//                 padding: 15px 0 35px;
//             }
//         }
//
//         .p {
//             width: 100%;
//             padding: 15px 0;
//             font-size: 28px;
//             font-weight: 400;
//             color: #333333;
//             line-height: 45px;
//             text-align: justify;
//             /*根据文档是否选择*/
//             /*text-indent: 2em;*/
//         }
//
//         em {
//             font-style: normal;
//             font-weight: bold;
//         }
//     </style>`
const style = `<style lang="scss" scoped>
        @import "common-clause";
    </style>`

/*const style = `<style lang="less" scoped>
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
  /!*根据文档是否选择*!/
  /!*text-indent: 2em;*!/
}

em {
  font-style: normal;
  font-weight: bold;
}
    </style>`*/

module.exports = {
    docxPath,
    outputPath,
    className,
    script,
    style,
    titleText,
    subTitleText
}
