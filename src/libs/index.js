import Dialog from './dialog.vue'
import Button from './button.vue'
import Switch from './switch.vue'
import Icon from './icon.vue'
import Input from './input.vue'
import Radio from './radio/radio.vue'
import RadioGroup from './radio/radioGroup.vue'
function libs (Vue){
    Vue.component('tg-dialog',Dialog)
    Vue.component('tg-button',Button)
    Vue.component('tg-switch',Switch)
    Vue.component('tg-icon',Icon)
    Vue.component('tg-input',Input)
    Vue.component('tg-radio-group',RadioGroup)
    Vue.component('tg-radio',Radio)
}
export default libs