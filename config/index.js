// 文档自带的编号无法解析
const path = require('path')

const dir = 'qmyx'
// const cnName = '特别约定-惠军服务中心-防癌险-修改'
const cnName = '【锦州-南昌方案】-零工经济合作伙伴协议-线上融合版-202201(1)'
const enName = 'protocol'
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
const titleText = []
const subTitleText = []

// const titleText = ['太平财产保险有限公司', '恶性肿瘤住院医疗费用保险（互联网专属2021-A版)条款']
// const subTitleText = ['总则', '保险责任', '责任免除', '保险金额', '保险期间', '不保证续保合同', '保险人义务', '投保人、被保险人义务', '投保人、被保险人义务', '保险金申请与给付', '争议处理和法律适用', '其他事项', '释义']

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

/*const style = `<style lang="less" scoped>
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
            /!*根据文档是否选择*!/
            /!*text-indent: 2em;*!/
        }

        em {
            font-style: normal;
            font-weight: bold;
        }
    </style>`*/

const style = `<style lang="less" scoped>
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
    </style>`

module.exports = {
    docxPath,
    outputPath,
    className,
    script,
    style,
    titleText,
    subTitleText
}
