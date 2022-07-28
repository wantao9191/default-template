import { createApp, h, reactive } from 'vue'
import MessageBox from './messageBox.vue'

const createMessage = ({
    title,
    content,
    confirmButtonText,
    cancelButtonText,
    instance,
    type,
    beforeClose,
    inputValue,
    inputPattern,
    inputPlaceholder,
    errorMessage,
}) => {
    const dom = document.createElement('div')
    const insObject = {
        cancelLoading: false,
        confirmLoading: false,
    }

    if (type === 'prompt') { insObject.inputValue = inputValue || '', insObject.isError = false }
    const ins = reactive(insObject)
    const remove = () => {
        dom.remove()
        instance.unmount()
        instance = null
    }

    const close = (action = 'cancel', callback, value) => {
        if (action === 'confirm' && type === 'prompt' && inputPattern) {
            if (!inputPattern.test(value)) {
                ins.isError = true
                return
            } else {
                ins.isError = false
            }
        }
        callback && callback({ value })
        remove()
    }
    const confirmApp = ({ ...arg }) => createApp({
        render() {
            return h(MessageBox, {
                title,
                content,
                type,
                confirmButtonText,
                cancelButtonText,
                cancelLoading: ins.cancelLoading,
                confirmLoading: ins.confirmLoading,
                isError: ins.isError,
                inputValue,
                inputPlaceholder,
                errorMessage,
                'onUpdate:inputValue': value => ins.inputValue = value,
                onConfirm: () => { beforeClose ? beforeClose('confirm', ins, close) : close('confirm', arg.resolve, ins.inputValue) },
                onCancel: () => { beforeClose ? beforeClose('cancel', ins, close) : close('cancel', arg.reject) },
                onClose: () => { beforeClose ? beforeClose('close', ins, close) : close('close', arg.reject) }
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
    return createMessage({ content, title, type: 'alert', ...options })
}
const confirm = (content, title, options) => {
    return createMessage({ content, title, type: 'confirm', ...options })
}
const prompt = (content, title, options) => {
    return createMessage({ content, title, type: 'prompt', ...options })
}
const messageBox = {
    alert, confirm, prompt
}
export { messageBox }