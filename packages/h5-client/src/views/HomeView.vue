<template>
  <main>
    <CBtn :msg="'确定'" @confirm="onClick" />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { userApi } from "@tanln/apis";
import { arrUtil } from "@tanln/utils";
import { CBtn } from "@tanln/components";

const apiEffect = () => {
  userApi.getUser(123).then((resp) => {
    console.log(14, resp);
  });
  userApi.getUserByUid("id_123kashd").then((resp) => {
    console.log(17, resp);
  });
};

onMounted(() => {
  apiEffect();

  const names = ["aaa", "Trump", "Byden", "Putin"];
  console.log("index: ", arrUtil.findIndex("Trump", names));
  console.log("index: ", arrUtil.findIndex("bbb", names));
});

const onClick = (msg: string) => {
  alert(msg)
}
</script>
