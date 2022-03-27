<template>
  <div class="container1">
    <h1> 作者：周杰伦  <a href="javascript:;" @click="followFn">{{loading?'正在请求。。。':'关注'}}</a> </h1>
    <hr>
    <son />
  </div>
</template>
<script>
import son from './son.vue'
import {followMixin} from './mixins.js'
export default {
  name: 'App',
  components: {
    son
  },
  mixins:[followMixin]
}
</script>