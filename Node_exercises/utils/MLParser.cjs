class MLNode{
    type="" //start-tag | end-tag | empty-tag
    name=""
    start=0
    end=0
    children=[]
    constructor(obj) {
        Object.assign(obj)
    }
    appendChild(c){
        this.children.push(c)
    }
}

function assertTagType(str=""){
    str = str.trim()
    if (str.startsWith("/")){
        return "end-tag"
    }else if(str.endsWith("/")){
        return "empty-tag"
    }else{
        return "start-tag"
    }
}

function parseML(mlString){
    // const tag_reg = /<(\/?([a-zA-Z- ":@=\u4e00-\u9fff\t\n\r]+?)\/?)>/g; //白名单法
    const tag_reg = /<(\/?([^>]+?)\/?)>/g; //黑名单法
    const matches = mlString.matchAll(tag_reg)
    const tag_array = []

    for(const m of matches){
        const inner_str = m[1]
        const tag_bodies = m[2].split(/\s+/)
        const tag_name = tag_bodies[0]
        const props = {}
        for(let i = 1;i<tag_bodies.length;i++){
            const [k,v] = tag_bodies[i].split("=")
            props[k] = v;
        }
        const full_tag = m[0]
        tag_array.push({
            type: assertTagType(inner_str),
            name: tag_name,
            index: m.index,
            props
        })
    }
    console.log(tag_array)
    for(const tag of tag_array){

    }
    if("start-tag"===assertTagType(inner_str)){
        indent++;
    }else if("end-tag"===assertTagType(inner_str)){
        indent--
    }else{

    }
    const root = new MLNode({
        name: "root",
        start: 0,
        end: mlString.length,
        children: []
    })
}

function formatML(mlString){
    // const tag_reg = /<(\/?([a-zA-Z- ":@=\u4e00-\u9fff\t\n\r]+?)\/?)>/g; //白名单法
    const tag_reg = /<(\/?([^>]+?)\/?)>/g; //黑名单法
    mlString = mlString.replaceAll(/\s+/g," ")
    console.log(mlString)
}

module.exports = {
    parseML,
    formatML
}