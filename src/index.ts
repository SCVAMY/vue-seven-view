import * as components from './components';

const install = function(Vue, opts: any = {}) {
  require('./style.scss');
  for (let component in components) {
    const com = components[component];
    Vue.component(com.options ? com.options.name : com.name, com);
  }
};

if (typeof window !== 'undefined' && window['Vue']) {
  install(window['Vue']);
}

export default {
  install
};
