<template>
  <ElConfigProvider>
    <RouterView />
  </ElConfigProvider>
</template>

<script>
import { ElConfigProvider } from 'element-plus'

export default {
  name: 'App',
  components: {
    ElConfigProvider
  }
}
</script>