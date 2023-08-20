/**
 *
 * @param {object} obj  { name: '姓名', age: '年龄', sex: '性别'}
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
const table_obj = {
    name: "el-table",
    props: {
        'onclick':'()=>alert("clicked")'
    },
    children:[],
    is_self_close:false
}

const node = {
    name: "el-table",
    props: {},
    children:[],
    is_self_close:false,
    level: 0,
}

function to_dom(model){
    let str = ''
    const start_tag = `<${name}`
    function write_node(node){
        const str_props = obj_to_equal(props)
        const str_start_tag = `<${name} ${str_props}>`
        const str_end_tag = `<${name}/>`
        if(node.children?.length>0){

        }
        function write_start_tag(){

        }
        function write_end_tag(){

        }
        function write_self_close_tag(){

        }
    }
}

class Table_Model {
    model
}
