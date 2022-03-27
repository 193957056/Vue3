<template>
  <div class="container2">
    <h2> 作者：周杰伦  <button @click="followFn">{{loading?'loading...':'关注'}}</button> </h2>
  </div>
</template>
<script>
import {followMixin} from './mixins.js'
export default {
  name: 'son',
  mixins:[followMixin]
  
}
</script>
<style scoped lang="less"></style>