/* __placeholder__ */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ref } from "vue";
import { vHovertime } from "@v-anything/directives";
import HoverMe from "./components/HoverMe.vue";
import HighlightMe from "./components/HighlightMe.vue";
var _a = await import('vue'), defineProps = _a.defineProps, defineSlots = _a.defineSlots, defineEmits = _a.defineEmits, defineExpose = _a.defineExpose, defineModel = _a.defineModel, defineOptions = _a.defineOptions, withDefaults = _a.withDefaults;
var visibility = ref(true);
var hovertimeList = ref([]);
var totalTime = ref(0);
var mouseLeaveCallback = function (time) {
    hovertimeList.value.push(time);
};
var unmountedCallback = function (time) {
    totalTime.value = time;
};
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
    if (__VLS_ctx.visibility) {
        // @ts-ignore
        [HoverMe, HoverMe,];
        // @ts-ignore
        var __VLS_0 = __VLS_asFunctionalComponent(HoverMe, new HoverMe({}));
        var __VLS_1_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
        ({}({}));
        __VLS_directiveFunction(__VLS_ctx.vHovertime)(({
            mouseLeaveCallback: __VLS_ctx.mouseLeaveCallback,
            unmountedCallback: __VLS_ctx.unmountedCallback,
        }));
        // @ts-ignore
        [visibility, vHovertime, mouseLeaveCallback, unmountedCallback,];
        var __VLS_4 = __VLS_pickFunctionalComponentCtx(HoverMe, __VLS_1_1);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: function () {
            var _a = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                _a[_i] = arguments[_i];
            }
            var $event = _a[0];
            __VLS_ctx.visibility = !__VLS_ctx.visibility;
            // @ts-ignore
            [visibility, visibility,];
        } }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.hovertimeList)); _i < _a.length; _i++) {
        var _b = _a[_i], item = _b[0], index = _b[1];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
        ("duration ".concat(index, ": ").concat(item, " ms"));
        // @ts-ignore
        [hovertimeList,];
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.totalTime);
    // @ts-ignore
    [totalTime,];
    // @ts-ignore
    [HighlightMe, HighlightMe,];
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(HighlightMe, new HighlightMe({}));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_5), false));
    ({}({}));
    var __VLS_9 = __VLS_pickFunctionalComponentCtx(HighlightMe, __VLS_6);
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
                vHovertime: vHovertime,
                HoverMe: HoverMe,
                HighlightMe: HighlightMe,
                visibility: visibility,
                hovertimeList: hovertimeList,
                totalTime: totalTime,
                mouseLeaveCallback: mouseLeaveCallback,
                unmountedCallback: unmountedCallback,
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
