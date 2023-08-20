/*
微任务与宏任务测试
 */
console.log(".")
setTimeout(()=>{
    console.log(3)
    setTimeout(()=>{
        console.log(5)
    })
})
console.log(".")
new Promise((resolve, reject)=>{
    // 执行者函数立即执行
    console.log(1)
    resolve()
}).then(()=>{
    console.log(2)
    setTimeout(()=>{
        console.log(4)
    })
})
console.log(".")

/*
总结
微任务(micro task)
    promise
    async
    await
    process.nextTick(node)
    mutationObserver(html5新特性)
宏任务(macro task)
    script(整体代码)
    setTimeout
    setInterval
    setImmediate
    I/O
    UI render

每次调用以上方法时，传递的函数都会被放到对应的任务队列中（微任务放到微任务的事件循环队列，宏任务放到宏任务的时间循环队列）
执行时，先执行整体代码（宏任务），然后执行微任务清空队列，再执行宏任务清空队列，交替执行。
 */