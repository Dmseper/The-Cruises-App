<template>
  <button class="button button--primary">Submit</button>

</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';


export default defineComponent({
  name: 'AppButton',
  props: {
    type: {
      type: String as PropType <'primary' | 'secondary'>,
      default: ''
    },
    textSize: {
      type: String as PropType <'largeText'>,
      default: ''
    }
  }
});
</script>

<style scoped lang="scss">
/* Блок "button" */
.button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Модификатор "button primary" */
.primary {
  background-color: #007bff;
}

/* Модификатор "button secondary" */
.secondary {
  background-color: #6c757d;
}

/* Элемент "button text" */
.largeText {
  font-size: 24px
}
</style>
