import Dialog from './dialog.vue'
import Button from './button.vue'
import Switch from './switch.vue'
import Icon from './icon.vue'
import Input from './input.vue'
import Radio from './radio/radio.vue'
import RadioGroup from './radio/radioGroup.vue'
import Checkbox from './checkbox/checkbox.vue'
import CheckboxGroup from './checkbox/checkboxGroup.vue'
import Select from './select/select.vue'
import Option from './select/option.vue'
import DatePicker from './date/datePicker.vue'
import ToolTip from './tooltip.vue'
import TimePicker from "./timePicker.vue";
import TimeSelect from "./timeSelect.vue";
import Tabs from "./tabs/tabs.vue";
import TabsPane from "./tabs/tabsPane.vue";
import { messageBox } from "./messageBox/messageBox.js";
import { message } from "./message/message.js";
function libs(Vue) {
    Vue.component('tg-dialog', Dialog)
    Vue.component('tg-button', Button)
    Vue.component('tg-switch', Switch)
    Vue.component('tg-icon', Icon)
    Vue.component('tg-input', Input)
    Vue.component('tg-radio-group', RadioGroup)
    Vue.component('tg-radio', Radio)
    Vue.component('tg-checkbox-group', CheckboxGroup)
    Vue.component('tg-checkbox', Checkbox)
    Vue.component('tg-select', Select)
    Vue.component('tg-option', Option)
    Vue.component('tg-date-picker', DatePicker)
    Vue.component('tg-tooltip', ToolTip)
    Vue.component('tg-time-picker', TimePicker)
    Vue.component('tg-time-select', TimeSelect)
    Vue.component('tg-tabs', Tabs)
    Vue.component('tg-tabs-pane', TabsPane)
}
export { libs, messageBox, message } 