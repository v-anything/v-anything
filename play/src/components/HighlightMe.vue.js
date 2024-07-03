/* __placeholder__ */
import { vHighlight } from "@v-anything/directives/dist";
import { ref } from "vue";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var text = ref();
setTimeout(function () {
    text.value =
        "这是一段简体中文文本。单车欲问边，属国过居延。征蓬出汉塞，归雁入胡天。大漠孤烟直，长河落日圆。萧关逢候骑，都护在燕然。";
}, 200);
var __VLS_fnComponent = (await import('vue')).defineComponent({});
var __VLS_functionalComponentProps;
var __VLS_modelEmitsType = {};
function __VLS_template() {
    var __VLS_ctx;
    /* Components */
    var __VLS_otherComponents;
    var __VLS_own;
    var __VLS_localComponents;
    var __VLS_components;
    var __VLS_styleScopedClasses;
    var __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_directiveFunction(__VLS_ctx.vHighlight)(({
        keywords: ['中文', '长河', '落日'],
        options: {
            styleMap: {
                中文: {
                    color: 'white',
                    backgroundColor: 'purple',
                },
                长河: {
                    color: 'blue',
                    textDecoration: 'underline',
                },
                落日: {
                    color: 'red',
                },
            },
        },
    }));
    (__VLS_ctx.text);
    // @ts-ignore
    [vHighlight, text,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_directiveFunction(__VLS_ctx.vHighlight)(({
        keywords: ['is', 'English', 'man'],
        options: {
            defaultDecoration: {
                color: 'red',
                backgroundColor: 'green',
            },
        },
    }));
    // @ts-ignore
    [vHighlight,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    var __VLS_componentsOption = {};
    var __VLS_name;
    var __VLS_defineComponent;
    var __VLS_internalComponent = __VLS_defineComponent({
        setup: function () {
            return {
                vHighlight: vHighlight,
                text: text,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
;
