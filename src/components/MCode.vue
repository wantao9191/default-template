<script>
import { h } from "vue";
export default {
    props: { value: { type: String, default: '' } },
    setup(props, context) {
        return () => props.value.split(',').map(v => {
            v = v.split('&')
            return h('span', { class: `code-tag ${v.length > 1 ? 'code-script-' + v[0] : ''}` }, v.length > 1 ? v[1] : v[0])
        })
    },
}
</script>
<style lang="scss" scoped>
</style>