import Message from './message.vue'
import { createApp, h, nextTick, ref } from "vue";
const createMessage = ({ message, type }) => {
    const dom = document.createElement('div')
    const nodes = document.querySelectorAll('.message-content')
    dom.className = 'message-content'
    dom.id = 'message_' + (nodes.length + 1)
    const top = ref('')
    const remove = () => {
        const nodes = document.querySelectorAll('.message-content')
        nodes.forEach((n, i) => {
            let messageNode = n.querySelector('.tg-message-box')
            const length = i+1
            const nodeTop = parseInt(messageNode.style.top)
            messageNode.style.top = (nodeTop - messageNode.offsetHeight - 16) + 'px'
        })
        nextTick(() => {
            dom.remove()
            instance.unmount()
        })
    }
    const close = (callback) => {
        callback && callback()
        remove()
    }
    const messageApp = () => createApp({
        render() {
            let offset = 20
            nodes.forEach(n => {
                offset += n.querySelector('.tg-message-wrap').offsetHeight + 16
            })
            top.value = offset
            return h(Message, {
                message,
                type,
                onClose: remove,
                top: top.value
            })
        }
    })
    const instance = messageApp()
    instance.mount(dom)
    document.body.append(dom)
}
const message = createMessage
export { message }