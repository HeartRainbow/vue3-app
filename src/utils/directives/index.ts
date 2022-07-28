const files = require.context('../directives', false, /\.ts$/);
const directives = {};

for (const key of files.keys()) {
    if (key === './index.ts')
        continue;

    const k = key.replace(/(\.\/|(\.js|\.ts|\.vue))/g, '');
    directives[k] = files(key).default ?? files(key)[k];
}

export default {
    install(app) {
      Object.keys(directives).forEach((key) => {
        app.directive(key, directives[key])
      });
    }
}