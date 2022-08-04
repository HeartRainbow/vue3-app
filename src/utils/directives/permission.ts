import store from '../../store';

export default {
   mounted(el: Element, { value }) {
      let bool = store.getters.btnPermission[value];
      !bool && (el.parentNode as any).removeChild(el);
   }
};
