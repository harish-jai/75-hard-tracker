export default (await import('vue')).defineComponent({
    data() {
        return {
            tasks: [
                { name: 'Workout', completed: false },
                { name: 'Drink 1 gallon of water', completed: false },
                { name: 'Read 10 pages', completed: false },
                { name: 'Take progress picture', completed: false }
            ]
        };
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [task, index] of __VLS_getVForSourceType((__VLS_ctx.tasks))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
            key: ((index)),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
            type: ("checkbox"),
        });
        (task.completed);
        (task.name);
    }
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
