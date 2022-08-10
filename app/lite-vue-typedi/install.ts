import { getInjections } from './utils';

export function install(vue: any) {
    vue.mixin({
        beforeCreate() {
            const injections = getInjections(this.$options);
            if (injections) {
                // 组件创建之前注入方法
                injections.forEach((r, propertyName) => {
                    this[propertyName] = r();
                });
            }
        }
    });
}
