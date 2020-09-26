<template>
  <div class="row q-mb-sm">
    <q-input outlined
             ref="name"
             @focus="testFocus"
             class="col"
             :value="name"
             @input="$emit('update:name',$event)"
             :rules="[val => !!val || 'Field is required']"
             v-select-all
             label="Task name">
      <template v-slot:append>
        <q-icon v-if="name"
                name="close"
                @click="$emit('update:name','')"
                class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>
<script>
import { selectAll } from 'src/directives/directive-select-all.js'
export default {
  props: ['name'],
  directives: {
    selectAll
  },
  methods: {
    testFocus () {
      console.log('test');
    },
  }
}
</script>
<style lang="sass" scoped>
</style>