import SButton from './Button.vue';

// @ts-ignore
SButton.install = function(Vue){
  Vue.component(SButton.name, SButton);
}

export default SButton;
