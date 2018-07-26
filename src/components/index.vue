<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>
                                <li v-for="(item,index) in catelist" :key="item.id">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{item.title}}</span>
                                        <p>
                                            <span v-for="(subitem, i) in item.subcates" :key="subitem.id">
                                                {{subitem.title}}&nbsp;
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{item.title}}</a>
                                            </dt>
                                            <dd>
                                                <a v-for="(subitem, i) in item.subcates" :key="subitem.id" href="/goods/43.html">{{subitem.title}}</a>
                                                
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <el-carousel height="341px" indicator-position="outside">
                            <el-carousel-item v-for="(item, index) in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->
                    <div class="left-220">
                        <ul class="side-img-list">
                            <li v-for="(item, index) in toplist" :key="item.id">
                                <div class="img-box">
                                    <label>{{index+1}}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{item.title}}</a>
                                    <span>{{item.add_time | cutTime}}</span>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="section" v-for="(item, index) in goodlist">
            <div class="main-tit">
                <h2>{{item.catetitle}}</h2>
                <p>
                    <a v-for="(subitem, i) in item.level2catelist" href="/goods/43.html">{{subitem.subcatetitle}}</a>
                    <!-- <a href="/goods/43.html">摄影摄像</a> -->
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(subitem, i) in item.datas">
                            <a href="#/site/goodsinfo/87" class="">
                                <div class="img-box">
                                    <img v-lazy="subitem.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{subitem.artTitle}}</h3>
                                    <p class="price">
                                        <b>{{subitem.sell_price}}</b>元</p>
                                    <p>
                                        <strong>库存 {{subitem.stock_quantity}}</strong>
                                        <span>市场价：
                                            <s>{{subitem.market_price}}</s>
                                        </span>
                                    </p>
                                </div>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      catelist: [],
      sliderlist: [],
      toplist: [],
      goodlist: []
    };
  },
  filters: {
    cutTime(value) {
      //   return value.slice(0,10);
      return moment(value).format("YYYY-MM-DD");
    }
  },
  //   页面即将加载
  beforeMount() {
    axios
      .get("http://47.106.148.205:8899/site/goods/gettopdata/goods")
      .then(response => {
        // handle success
        // console.log(response);
        this.catelist = response.data.message.catelist;
        this.sliderlist = response.data.message.sliderlist;
        this.toplist = response.data.message.toplist;
        // console.log(this);
      })
      .catch(error => {
        // handle error
        console.log(error);
      });
      axios
      .get("http://47.106.148.205:8899/site/goods/getgoodsgroup")
      .then(response=>{
          console.log(response);
        this.goodlist = response.data.message;
        console.log(this.goodlist);
      }).catch(error=>{
          console.log(error);
      })
  }
  //   页面加载完成后
  //   Mounted() {
  //     axios
  //       .get("http://47.106.148.205:8899/site/goods/gettopdata/goods")
  //       .then((response)=> {
  //         // handle success
  //         // console.log(response);
  //         this.catelist= response.data.message.catelist;
  //         this.sliderlist= response.data.message.sliderlist;
  //         this.toplist= response.data.message.toplist;
  //         console.log(this);
  //       })
  //       .catch((error)=> {
  //         // handle error
  //         console.log(error);
  //       })

  //   }
};
</script>
<style scoped>
.el-carousel__item img {
    width: 100%;
    height: 100%;
}
</style>


