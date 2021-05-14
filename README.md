# parse-word

### 思路说明
```
使用adm-zip对word文档进行解压，解压生成document.xml文件，读取xml文件内容。
使用正则匹配对应包含的文字与样式属性（详见代码）
```

### 目录说明
```
assets:存放待解析的word
backup:一些代码备份
config:生成vue文件的配置
extract:word解压目录（固定）
gen:vue文件生成目录
cli.js:主执行文件 
```
