import Message from './message.vue'
import { createApp, h, nextTick, ref } from "vue";
const createMessage = ({ message, type, align, showClose }) => {
    const dom = document.createElement('div')
    const nodes = document.querySelectorAll('.message-content')
    dom.className = 'message-content'
    const id = 'message_' + new Date().getTime()
    dom.id = id
    const top = ref('')
    const deleteNode = (n) => {
        let messageNode = n.querySelector('.tg-message-box')
        const nodeTop = parseInt(messageNode.style.top)
        messageNode.style.top = (nodeTop - messageNode.offsetHeight - 16) + 'px'
    }
    const remove = () => {
        const nodes = document.querySelectorAll('.message-content')
        let index = 0
        nodes.forEach((n, i) => {
            if (n.getAttribute('id') === id) {
                index = i
                return
            }
        })
        nodes.forEach((n, i) => {
            if (i >= index) {
                deleteNode(n)
            }
        })
        nextTick(() => {
            dom.remove()
            instance.unmount()
        })
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
                top: top.value,
                align,
                showClose
            })
        }
    })
    const instance = messageApp()
    instance.mount(dom)
    document.body.append(dom)
}
const message = createMessage
export { message }