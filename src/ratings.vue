<template>
  <div id="app">
    <vheader></vheader>
    <div class="tab">
      <div class="tab-item">
        <a href="#" v-link="{path:'/goods'}">商品</a>
      </div>
      <div class="tab-item">
        <a href="#" v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a href="#" v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import vheader from './comp/header.vue';
export default {
  components:{
    "vheader":vheader
  }
}
</script>

<style>
  a{
    color: #000;
    text-decoration: none;
  }
  .tab{
    display: flex;
  }
  .tab .tab-item{
    flex: 1;
    text-align: center;
    line-height: 40px;

  }
  .tab .tab-item{
    color: #778593;
  }
</style>
