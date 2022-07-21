export * from './login';
export * from './uploadFile';

const files = require.context('../api', false, /\.ts$/);
const modules = {};
for (const key of files.keys()) {
    if (key === './index.ts')
        continue;

    const k = key.replace(/(\.\/|(\.js|\.ts|\.vue))/g, '');
    modules[k] = files(key).default ?? files(key)[k];
}

console.log('modules-->', modules);
export default modules;