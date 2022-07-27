import { createApp, h } from 'vue'
import MessageBox from './messageBox.vue'
const createMessage = ({ title, content, confirmButtonText, cancelButtonText, instance, type, beforeClose }) => {
    const dom = document.createElement('div')
    const ins = {
        cancelLoading: false,
        confirmLoading: false
    }
    const proxyIns = new Proxy(ins,{
        get:(target,attr)=>{
            console.log(target,attr)
            return  target[attr]
            
        },
        set:(target,attr,value)=>{
            console.log(target,attr,value)
        }
    })
    const remove = () => {
        dom.remove()
        instance.unmount()
        instance = null
    }

    const close = (callback) => {
        callback && callback()
        remove()
    }
    const confirmApp = ({ ...arg }) => createApp({
        render() {
            return h(MessageBox, {
                title, content, type, confirmButtonText, cancelButtonText,
                onConfirm: () => { beforeClose ? beforeClose('confirm', proxyIns, close) : close(arg.resolve) },
                onCancel: () => { beforeClose ? beforeClose('cancel', proxyIns, close) : close(arg.reject) },
                onClose: () => { beforeClose ? beforeClose('close', null, close) : close(arg.reject) }
            })
        }
    })
   
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ins.confirmLoading = true
        }, 1000);
        instance = confirmApp({ resolve, reject })
        instance.mount(dom)
        document.body.append(dom)
    })
}
const alert = (content, title, options) => {
    return createMessage({ content, title, ...options })
}
const messageBox = {
    alert
}
export { messageBox }