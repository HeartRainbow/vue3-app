import { getInjections } from './utils';

export function install(vue: any) {
    vue.mixin({
        beforeCreate() {
            const injections = getInjections(this.$options);
            
            if (injections) {
                console.log('injections>>>>>>>=', injections);
                injections.forEach((r, propertyName) => {
                    this[propertyName] = r();
                });
            }
        }
    });
}
