import Dialog from './dialog.vue'
import Button from './button.vue'
import Switch from './switch.vue'
import Icon from './icon.vue'
import Input from './input.vue'
function libs (Vue){
    Vue.component('tg-dialog',Dialog)
    Vue.component('tg-button',Button)
    Vue.component('tg-switch',Switch)
    Vue.component('tg-icon',Icon)
    Vue.component('tg-input',Input)
}
export default libs