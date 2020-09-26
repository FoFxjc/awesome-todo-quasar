<template>
  <q-banner inline-actions
            dense
            :class="bgColor"
            class="list-header text-white text-center">
    <span class="text-bold text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>
<script>

export default {
  props: ['bgColor']

}
</script>
<style lang="scss" scoped>
.list-header {
  border-top-left-radius: 5px;
  border-top-left-radius: 5px;
}
</style>