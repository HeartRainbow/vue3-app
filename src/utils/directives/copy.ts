import { ElMessage } from 'element-plus';

export default {
    mounted(el, { value }) {
        el.style.cursor = 'pointer';
        el.$value = value;
        el.handler = () => {
            if (!el.$value) {
                ElMessage.error('无复制内容');
                return;
            }
            const textarea = document.createElement('textarea');
            // 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
            textarea.readOnly = true;
            // textarea.style.position = 'absolute';
            // textarea.style.left = '-9999px';
            textarea.value = el.$value;
            document.body.appendChild(textarea);
            textarea.select();
            textarea.setSelectionRange(0, textarea.value.length);
            const result = document.execCommand('Copy');
            if (result) {
                ElMessage.success('复制成功');
            }
            document.body.removeChild(textarea);
        };
        el.addEventListener('click', el.handler);
    },
    componentUpdated(el, { value }) {
        el.$value = value;
    },
    unmounted(el) {
        el.removeEventListener('click', el.handler);
    },
};
