// 文档自带的编号无法解析
const path = require('path')

const cnName = '网销和电子保单使用-人身保险投保提示书'
const enName = 'insure-tip'
const docxPath = path.resolve(__dirname, `../assets/${cnName}.docx`) // 源文档
const outputPath = path.resolve(__dirname, `../gen/${enName}.vue`) // 输出vue文件

const className = {
    doc: 'doc',
    title: 'h1',
    subTitle: 'h2',
    text: 'p'
}

// 没有设置为[]
const titleText = ['人身保险投保提示书']
const subTitleText = []

// const titleText = ['太平财产保险有限公司', '住院医疗费用保险(2021-D版)条款']
// const subTitleText = ['总则', '保险责任', '责任免除']

// 没有设置为''
// const script = ''

const script = `<script>
import CubeContainer from '@components/container/container'

export default {
  components: {
    CubeContainer,
  },
}
</script>`

const style = `<style lang="less" scoped>
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
