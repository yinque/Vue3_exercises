const tab_string =  `\
name 姓名
age 年龄
sex 性别
`

/**
 *
 * @param tab_string `\
 * name 姓名
 * age 年龄
 * sex 性别
 * `
 * @returns Object
 * { name: '姓名', age: '年龄', sex: '性别'}
 */
function tab_to_json(tab_string){
    const lines = tab_string.split('\n')
    const obj = Object();
    for(const line of lines){
        const [k,v] = line.split(/\s/)
        if(!k||!v){continue}
        obj[k]=v
    }
    return obj;
}

const tab_obj = tab_to_json(tab_string)
console.log(tab_obj)    // { name: '姓名', age: '年龄', sex: '性别'}

/**
 *
 * @param obj   eg: { name: '姓名', age: '年龄', sex: '性别'}
 * @returns {string}    eg: name="姓名" age="年龄" sex="性别"
 */
function obj_to_equal(obj){
    let str = ''
    let white_space = ' '
    const kv_array = Object.entries(obj).map(([k,v])=>{
        return `${k}="${v}"`
    })
    return kv_array.join(white_space)
}

const tab_equal = obj_to_equal(tab_obj)
console.log(tab_equal)  // name="姓名" age="年龄" sex="性别"
