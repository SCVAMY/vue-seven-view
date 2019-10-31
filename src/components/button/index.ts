import Button from './Button.vue';

console.log(Button);
// @ts-ignore
Button.install = function(Vue){
  Vue.component(Button.name, Button);
}

export default Button;
