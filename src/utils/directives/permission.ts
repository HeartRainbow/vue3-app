export default {
     mounted(el, { instance, value }, vnode) {
        let btnPermissionValue = value;
        console.log(instance);
        console.log(vnode);
        
        let bool = vnode.context.$store.state.btnPermission[btnPermissionValue];
        !bool && el.parentNode.removeChild(el);
     },
    // // 当传进来的值更新的时候触发
    // componentUpdated(el, { value }) {

    // },
    // // 指令与元素解绑的时候，移除事件绑定
    // unmounted(el) {

    // },
};
