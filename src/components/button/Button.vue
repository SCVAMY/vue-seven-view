<template>
  <button
    class="s-button"
    :class="[size ? 's-button--' + size : '',type ? 's-button--' + type : '',{'is-disabled': disabled, 'is-loading': loading,'is-round': round, 'is-circle': circle}]"
    :disabled="disabled || loading"
    @click="($event)=>{$emit('click',$event)}"
  >
    <i v-if="loading" class="s-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'SButton'
})
class Button extends Vue {
  @Prop() disabled: boolean;
  @Prop() loading: boolean;
  @Prop() icon: string;
  @Prop({ default: 'medium' }) size: string;
  @Prop() round: boolean;
  @Prop() circle: boolean;
  @Prop() type: string;
}
export default Button;
</script>
