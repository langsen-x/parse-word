// 文档自带的编号无法解析
const path = require('path')

const dir = 'pasds'
const cnName = '平安食品安全责任保险条款'
const enName = 'insure-clause-shize'
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
// const titleText = []
// const subTitleText = []


const titleText = ['中国平安财产保险股份有限公司', '平安食品安全责任保险条款', '注册号为：C00001730912018050210172']
const subTitleText = ['总则', '保险责任', '责任免除', '赔偿限额与免赔额（率）', '保险期间', '保险费', '保险人义务', '投保人、被保险人义务', '赔偿处理', '争议处理和法律适用', '其他事项', '释义']

// 没有设置为''
const script = ''

/*const script = `<script>
import BaseContainer from '@components/base-container/base-container'

export default {
  components: {
    BaseContainer,
  },
}
</script>`*/

const style = `<style lang="scss" scoped>
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
            text-indent: 2em;
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
