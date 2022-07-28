import { createApp, h, reactive } from 'vue'
import MessageBox from './messageBox.vue'

const createMessage = ({ title, content, confirmButtonText, cancelButtonText, instance, type, beforeClose }) => {
    const dom = document.createElement('div')
    const ins = reactive({
        cancelLoading: false,
        confirmLoading: false,
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
                title, content, type, confirmButtonText, cancelButtonText, cancelLoading: ins.cancelLoading, confirmLoading: ins.confirmLoading,
                onConfirm: () => { beforeClose ? beforeClose('confirm', ins, close) : close(arg.resolve) },
                onCancel: () => { beforeClose ? beforeClose('cancel', ins, close) : close(arg.reject) },
                onClose: () => { beforeClose ? beforeClose('close', ins, close) : close(arg.reject) }
            })
        }
    })
    return new Promise((resolve, reject) => {
        instance = confirmApp({ resolve, reject })
        instance.mount(dom)
        document.body.append(dom)
    })
}
const alert = (content, title, options) => {
    return createMessage({ content, title,type:'alert', ...options })
}
const confirm = (content, title, options) => {
    return createMessage({ content, title,type:'confirm', ...options })
}
const messageBox = {
    alert,confirm
}
export { messageBox }