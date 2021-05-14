const admZip = require('adm-zip')
const path = require('path')
const fs = require('fs')


const zip = new admZip(path.resolve(__dirname, './assets/test.docx'))
let contentXml
// const xml_path = path.resolve(__dirname, './extract/word/document.xml')
// fs.access(xml_path, err => {
//     if (!err) {
//         console.log('xml文件存在')
//     } else {
//         console.log('xml文件不存在')
//         //将该docx解压到指定文件夹extract下
//         zip.extractAllTo(path.resolve(__dirname, './extract'), true)
//     }
// })
zip.extractAllTo(path.resolve(__dirname, './extract'), true)
contentXml = zip.readAsText('word/document.xml', 'utf-8')

let resultList = []
let matchedWP = contentXml.match(/<w:p.*?>.*?<\/w:p>/gi)
//继续匹配每个<w:p></w:p>里面的<w:t>,这里必须判断matchedWP存在否则报错
if (matchedWP) {
    matchedWP.forEach(function (wpItem) {
        console.log('wpItem:', wpItem)
        //注意这里<w:t>的匹配，有可能是<w:t xml:space="preserve">这种格式，需要特殊处理
        let matchedWT = wpItem.match(/(<w:t>.*?<\/w:t>)|(<w:ts.[^>]*?>.*?<\/w:t>)/gi)
        let textContent = ''
        let labelContent = ''
        if (matchedWT) {
            matchedWT.forEach(function (wtItem) {
                //如果不是<w:t xml:space="preserve">格式
                if (wtItem.indexOf('xml:space') === -1) {
                    textContent += wtItem.slice(5, -6)
                } else {
                    textContent += wtItem.slice(26, -6)
                }
            })
            labelContent = `<p>${textContent}</p>`
            resultList.push(labelContent)
        }
    })
}
console.log('resultList:', resultList.join(''))
