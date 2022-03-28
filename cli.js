const admZip = require('adm-zip')
const path = require('path')
const fs = require('fs')
const {docxPath, outputPath, className, script, style, titleText, subTitleText} = require('./config/index.js')

const extractPath = path.resolve(__dirname, './extract')
// 每次执行删除目录
{
    delFileAndFolder(extractPath)

    function delFileAndFolder(path) {
        let files = []
        if (fs.existsSync(path)) {
            files = fs.readdirSync(path)
            files.forEach(function (file, index) {
                let curPath = path + '/' + file
                if (fs.statSync(curPath).isDirectory()) { // 如果是目录，递归
                    delFileAndFolder(curPath)
                } else { // 是文件，删除
                    fs.unlinkSync(curPath)
                }
            })
            fs.rmdirSync(path)
        }
    }
}

const zip = new admZip(docxPath)
zip.extractAllTo(extractPath, true)
let contentXml = zip.readAsText('word/document.xml', 'utf-8')

let resultList = []
let matchedWp = contentXml.match(/<w:p.*?>.*?<\/w:p>/gi)
//继续匹配每个<w:p></w:p>里面的<w:t>,这里必须判断matchedWp存在否则报错
if (matchedWp) {
    matchedWp.forEach(function (wpItem) {
        let matchedWr = wpItem.match(/<w:r.*?>.*?<\/w:r>/gi)
        // console.log('matchedWr:', matchedWr)

        // 每一个wr只有一个wrpr和一个wt
        if (matchedWr) {
            let finalText = '' // 加上标签的文字内容
            let originText = '' // 未加标签的原始文字内容
            matchedWr.forEach(wrItem => {
                let text = '' // 文字内容
                let isBold = wrItem.search('<w:b/>') !== -1 // 是否加粗
                let isItalics = wrItem.search('<w:i/>') !== -1 // 是否斜体
                let isColor = wrItem.search('<w:color') !== -1 // 是否有颜色
                let italicsLabel = ''
                let boldLabel = ''
                let colLabel = ''

                let matchedWt = wrItem.match(/(<w:t>.*?<\/w:t>)|(<w:t xml:space="preserve">.*?<\/w:t>)|(<w:ts.[^>]*?>.*?<\/w:t>)/gi)
                // console.log('matchedWt:', matchedWt)
                if (matchedWt) {
                    matchedWt.forEach(wtItem => {
                        // 如果不是<w:t xml:space="preserve">格式
                        if (wtItem.indexOf('xml:space') === -1) {
                            text += wtItem.slice(5, -6)
                        } else {
                            text += wtItem.slice(26, -6)
                        }
                    })
                }
                if (text) {
                    originText = originText + text
                    if (isColor) {
                        let matchedItem = wrItem.match(/<w:color.*?\/>/gi)
                        let colVal = ''
                        // console.log('matchedItem:', matchedItem)
                        matchedItem.forEach(colItem => {
                            const iLen = colItem.length
                            colVal = colItem.slice(0, iLen - 3).slice(16, 22)
                        })
                        if (colVal !== '000000' && colVal !== 'auto') {
                            // console.log('colVal:', colVal)
                            colLabel = `<span style="color: #${colVal}"></span>`
                            // console.log('colLabel:', colLabel)
                            let colLen = colLabel.length
                            text = colLabel.slice(-colLen, -7) + text + colLabel.slice(-7)
                            // console.log('text:', text)
                        }
                    }
                    if (isItalics) {
                        italicsLabel = `<i></i>`
                        text = italicsLabel.slice(0, 3) + text + italicsLabel.slice(3)
                    }
                    if (isBold) {
                        boldLabel = `<em></em>`
                        text = boldLabel.slice(0, 4) + text + boldLabel.slice(4)
                    }
                    finalText = finalText + text
                }
            })
            if (finalText) {
                if (titleText.includes(originText)) {
                    finalText = `<h1 class="${className.title}">${finalText}</h1>`
                } else if (subTitleText.includes(originText)) {
                    finalText = `<h2 class="${className.subTitle}">${finalText}</h2>`
                } else {
                    finalText = `<p class="${className.text}">${finalText}</p>`
                }
                // 字体加粗如果存在</em><em>证明肯定一行有重复
                finalText = finalText.replace(/<\/em><em>/g, '')
            }
            resultList.push(finalText)
        }
    })
}
// console.log('resultList:', resultList.join(''))
let temp = genTemplate(resultList.join(''))
fs.writeFile(outputPath, temp, (err) => {
    if (err) {
        console.log('写入失败：', err)
    }
})

function genTemplate(data) {
    if (script) {
        return `<template><cube-container><div class="${className.doc}">\n${data}\n</div></cube-container></template>\n\n${script}\n\n${style}`
        // return `<template><base-layout><template #main><div class="${className.doc}">\n${data}\n</div></template></base-layout></template>\n\n${script}\n\n${style}`
    } else {
        return `<template><div class="${className.doc}">\n${data}\n</div></template>\n\n${style}`
    }
}
