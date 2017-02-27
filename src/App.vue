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
  *{
    font-family: '微软雅黑';
    line-height: 1;
}
body{font-family:"Microsoft YaHei", "微软雅黑", Arial, sans-serif;}
body,div,p,h1,h2,h3,h4,h5,h6,ul,ol,li,dl,dd,dt,img,form{ padding:0px; margin:0px; border:0; font-size:12px;}
h1,h2,h3,h4,h5,h6 { font-size:12px; font-weight:100;}
select{ padding:0px; margin:0px; overflow:scroll;}
td,tr,td { font-size:12px;}
ul,ol li{ list-style:none;}
input { padding:0px; margin:0px;}
.left { float:left;}
.right { float:right;}
.clear { clear:both; font-size:0px; height:0px; overflow:hidden;}
a:link, a:visited, a:hover,a:focus{ text-decoration:none;}
a:focus{ outline:none;}
a{
    text-decoration:none;
    blr:expression(this.onFocus=this.blur());
    color: #000;
}

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