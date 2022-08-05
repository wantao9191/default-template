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
const tgDialog = Vue => {
    Vue.component('tg-dialog', Dialog)
}
const tgButton = Vue => {
    Vue.component('tg-button', Button)
}
const tgSwitch = Vue => {
    Vue.component('tg-switch', Switch)
}
const tgIcon = Vue => {
    Vue.component('tg-icon', Icon)
}
const tgInput = Vue => {
    Vue.component('tg-input', Input)
}
const tgRadioGroup = Vue => {
    Vue.component('tg-radio-group', RadioGroup)
}
const tgRadio = Vue => {
    Vue.component('tg-radio', Radio)
}
const tgCheckboxGroup = Vue => {
    Vue.component('tg-checkbox-group', CheckboxGroup)
}
const tgCheckbox = Vue => {
    Vue.component('tg-checkbox', Checkbox)
}
const tgSelect = Vue => {
    Vue.component('tg-select', Select)
}
const tgOption = Vue => {
    Vue.component('tg-option', Option)
}
const tgDatePicker = Vue => {
    Vue.component('tg-date-picker', DatePicker)
}
const tgToolTip = Vue => {
    Vue.component('tg-tooltip', ToolTip)
}
const tgTimePicker = Vue => {
    Vue.component('tg-time-picker', TimePicker)
}
const tgTimeSelect = Vue => {
    Vue.component('tg-time-select', TimeSelect)
}
const tgTabs = Vue => {
    Vue.component('tg-tabs', Tabs)
}
const tgTabsPane = Vue => {
    Vue.component('tg-tabs-pane', TabsPane)
}
export { tgDialog, tgTabsPane, tgTabs, tgTimeSelect, tgTimePicker, tgToolTip, tgDatePicker, tgOption, tgSelect, tgCheckbox, tgCheckboxGroup, tgRadio, tgRadioGroup, tgInput, tgIcon, tgSwitch, tgButton, Dialog, Button, Switch, Icon, Input, Radio, RadioGroup, Checkbox, CheckboxGroup, Select, Option, DatePicker, ToolTip, TimePicker, TimeSelect, Tabs, TabsPane, message, messageBox }

function install(Vue) {
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
export default { install }