/*
生成器自定义
 */
const myIterator = {
    data: ['A', 'B', 'C'],
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if (index < this.data.length) {
                    return {
                        value: this.data[index++],
                        done: false
                    };
                } else {
                    return {
                        done: true
                    };
                }
            }
        };
    }
};


// 使用for...of循环遍历迭代器
for (const item of myIterator) {
    console.log(item);
}