import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"	//导入默认的css，技术好可以自己写css

// const default_option = {
//     text: "This is a toast",
//     duration: 3000,
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//         get background(){
//             return generateRandomGradient()
//         }
//     }
// }
const default_option = {
    text: "This is a toast",
    duration: 3000,
}

export function showToast(options=default_option){
    if(typeof options=="string"){
        const text = options;
        options=default_option;
        options.text = text;
    }
    if(!options.text){
        const text = JSON.stringify(options)
        options = default_option
        options.text = text
    }
    Toastify(options).showToast();
}