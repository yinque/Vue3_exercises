/*
async fs example
 */
const fs = require('fs')
const path = require('path')

const WORKING_DIR = "./study_dir/"
const FILE_NAME = 'f1.txt'
const DIR_NAME = 'd1'

// 切换工作目录
process.chdir(WORKING_DIR)
// 读取文件夹下的目录与文件名
const files = fs.readdirSync("./")
console.log("目录下的文件与文件夹名为:",files)


// 读取文件中内容，使用utf-8解码
const text = fs.readFileSync(FILE_NAME,'utf-8')
console.log({text})

// 读取文件信息
console.log("file info")
const file_info = fs.statSync(FILE_NAME)
console.log("是否是文件:"+file_info.isFile())

console.log("dir info")
const dir_info = fs.statSync(DIR_NAME)
console.log("是否是文件:"+dir_info.isFile())

function traverse_file(dir){
    const file_list = [];
    function _traverse_file(dir){
        for (const file of fs.readdirSync(dir)){
            if(fs.statSync(path.join(dir,file)).isFile()){
                file_list.push({
                    file_name: file,
                    file_name_no_extension: path.parse(file).name,
                    relative_path: path.relative('./', dir),
                })
                /* example
                  {
                    file_name: 'f1-1-1.txt',
                    file_name_no_extension: 'f1-1-1',
                    relative_path: 'd1\\d1-1'
                  },
                 */
            }else{
                _traverse_file(path.join(dir,file))
            }
        }
    }
    _traverse_file(dir)
    return file_list
}

console.log("===遍历文件===")
const file_list = traverse_file("./")
console.log(file_list)
