import Button from './Button.vue';
import './style/button.scss';

console.log(Button);
// @ts-ignore
Button.install = function(Vue) {
  // @ts-ignore
  Vue.component(Button.options.name, Button);
};

export default Button;