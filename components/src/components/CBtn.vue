<template>
  <div class="btn" @click="showMsg">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg?: string
}>()
const emits = defineEmits<{
  (e: 'confirm', msg: string): void
}>()

const showMsg = () => {
  emits('confirm', props.msg)
}
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  border: 1px solid;
  background-color: rgb(54, 162, 250);
  color: aliceblue;
  margin: 100px;
  cursor: pointer;
}
</style>