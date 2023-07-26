const MLParser = require("./MLParser.cjs")
const mlString = `
<el-table>
    <el-column label="名字"
               props="name"
               @click="hanleClick">
    </el-column>
    <el-column label="年龄"
               props="age"
               :v-model="text">
    </el-column>
    <el-column label="性别"
               props="sex"
               随机属性="233">
    </el-column>
</el-table>
`
// const obj = MLParser.parseML(mlString)
// console.log(obj)

MLParser.formatML(mlString)