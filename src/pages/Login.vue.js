import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
export default (await import('vue')).defineComponent({
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        async login() {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
                console.log("Logged in as:", userCredential.user);
                this.$router.push("/home");
            }
            catch (error) {
                console.error("Error logging in:", error.message);
                alert("Login failed. Please check your email and password.");
            }
        },
        goToRegister() {
            this.$router.push("/register");
        },
    },
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("login") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
        ...{ onSubmit: (__VLS_ctx.login) },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("email"),
        placeholder: ("Email"),
        required: (true),
    });
    (__VLS_ctx.email);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({
        type: ("password"),
        placeholder: ("Password"),
        required: (true),
    });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        type: ("submit"),
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({
        ...{ onClick: (__VLS_ctx.goToRegister) },
        href: ("#"),
    });
    ['login',];
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
