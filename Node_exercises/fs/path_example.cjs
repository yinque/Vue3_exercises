const path = require('path');

// 样例路径
const FILE_PATH = './study_dir/d1/d1-1/f1-1-1.txt';

// 获取文件名
const basename = path.basename(FILE_PATH);
console.log({basename});  // 输出: { basename: 'f1-1-1.txt' }

// 获取目录名
const dirname = path.dirname(FILE_PATH);
console.log({dirname});  // 输出: { dirname: './study_dir/d1/d1-1' }

// 获取文件扩展名
const extname = path.extname(FILE_PATH);
console.log({extname});  // 输出: { extname: '.txt' }

// 拼接路径片段
const joinPath = path.join('/path', 'to', 'file.txt');
console.log(joinPath);  // 输出: \path\to\file.txt

// 标准化路径
const normalize = path.normalize(FILE_PATH);
console.log({normalize});  // 输出: { normalize: 'study_dir\\d1\\d1-1\\f1-1-1.txt' }

// 解析路径
const parse = path.parse(FILE_PATH);
console.log({parse});
/*
输出:
{
  parse: {
    root: '',
    dir: './study_dir/d1/d1-1',
    base: 'f1-1-1.txt',
    ext: '.txt',
    name: 'f1-1-1'
  }
}

*/

// 获取相对路径
const fromPath = '/path/to/start';
const toPath = '/path/to/target/file.txt';
const relativePath = path.relative(fromPath, toPath);
console.log('Relative Path:', relativePath);  // 输出: Relative Path: ..\target\file.txt

// 使用 POSIX 分隔符（正斜杠 /）
const posixPath = path.posix.join('path', 'to', 'file.txt');
console.log('POSIX Path:', posixPath);  // 输出: POSIX Path: path/to/file.txt

// 使用 Windows 分隔符（反斜杠 \）
const winPath = path.win32.join('path', 'to', 'file.txt');
console.log('Windows Path:', winPath);  // 输出: Windows Path: path\to\file.txt
