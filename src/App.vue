<template>
  <div id="app" msg='ccc'>
    <vheader :seller="seller"></vheader>
    <div class="tab">
      <div class="tab-item">
        <a href="#" v-link="{path:'/goods'}">商家</a>
      </div>
      <div class="tab-item">
        <a href="#" v-link="{path:'/ratings'}">评价</a>
      </div>
      <div class="tab-item">
        <a href="#" v-link="{path:'/seller'}">商家</a>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
    <h1>{{score}}</h1>
  </div>
</template>

<script>
import vheader from './comp/header.vue';
import ratings from './comp/ratings.vue';
import vdata from './data.js';
export default {
  components:{
    "vheader":vheader
  },
  data:function () {
    return {
      seller:vdata.seller,
      goods:vdata.goods,
      ratings:vdata.ratings
    }
  }

}
</script>

<style>
  a{
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
  .tab .tab-item a{
    color: #505559;
    font-size: 14px;

  }
  .tab .tab-item a.v-link-active{
    color: #F30E11;
  }
</style>