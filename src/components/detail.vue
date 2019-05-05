<template>
  <div>
    <div class="section">
      <div class="location">
        <span>当前位置：</span>
        <a href="/index.html">首页</a> &gt;
        <a href="/goods.html">购物商城</a> &gt;
        <a href="/goods/42/1.html">商品详情</a>
      </div>
    </div>
    <div class="section">
      <div class="wrapper clearfix">
        <div class="wrap-box">
          <div class="left-925">
            <div class="goods-box clearfix">
              <div class="pic-box">
                <el-carousel height="330px" width="390px">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.original_path" alt>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="goods-spec">
                <h1>{{goodsinfo.title}}</h1>
                <p class="subtitle">{{goodsinfo.sub_title}}</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">{{goodsinfo.goods_no}}</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥{{goodsinfo.market_price}}</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥{{goodsinfo.sell_price}}</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <el-input-number
                          v-model="num"
                          :min="1"
                          :max="goodsinfo.stock_quantity"
                          label="描述文字"
                        ></el-input-number>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">{{goodsinfo.stock_quantity}}</em>件
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dd>
                      <div id="buyButton" class="btn-buy">
                        <button onclick="cartAdd(this,'/',1,'/shopping.html');" class="buy">立即购买</button>
                        <button onclick="cartAdd(this,'/',0,'/cart.html');" class="add">加入购物车</button>
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div id="goodsTabs" class="goods-tab bg-wrap">
              <div
                id="tabHead"
                class="tab-head"
                style="position: static; top: 517px; width: 925px;"
              >
                <ul>
                  <li>
                    <a href="javascript:;" @click='isDesc=!isDesc' :class="{selected:isDesc}">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;" @click='isDesc=!isDesc' :class="{selected:!isDesc}"> 商品评论</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" style="display: block;" v-html="goodsinfoContent" v-show='isDesc'></div>
              <div class="tab-content" style="display: block;" v-show='!isDesc'>
                <div class="comment-box">
                  <div id="commentForm" name="commentForm" class="form-box">
                    <div class="avatar-box">
                      <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                      <div class="editor">
                        <textarea
                          v-model.trim="comment"
                          id="txtContent"
                          name="txtContent"
                          sucmsg=" "
                          data-type="*10-1000"
                          nullmsg="请填写评论内容！"
                        ></textarea>
                        <span class="Validform_checktip"></span>
                      </div>
                      <div class="subcon">
                        <input
                          id="btnSubmit"
                          name="submit"
                          type="submit"
                          value="提交评论"
                          class="submit"
                          @click="addcomment"
                        >
                        <span class="Validform_checktip"></span>
                      </div>
                    </div>
                  </div>
                  <ul id="commentList" class="list-box">
                    <p
                      v-show="commentList.length==0"
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for="(value,index) in commentList" :key="index">
                      <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                      </div>
                      <div class="inner-box">
                        <div class="info">
                          <span>{{ value.user_name }}</span>
                          <span>{{ value.reply_time }}</span>
                        </div>
                        <p>{{ value.content }}</p>
                      </div>
                    </li>
                  </ul>
                  <div class="page-box" style="margin: 5px 0px 0px 62px;">
                    <div id="pagination" class="digg">
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageIndex"
                        :page-sizes="[5, 10, 15, 20]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="totalpage"
                      ></el-pagination>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="left-220">
            <div class="bg-wrap nobg">
              <div class="sidebar-box">
                <h4>推荐商品</h4>
                <ul class="side-img-list">
                  <li v-for="(value,index) in goodsList" :key="index">
                    <div class="img-box">
                      <a href="#/site/goodsinfo/90" class>
                        <img :src="value.img_url">
                      </a>
                    </div>
                    <div class="txt-box">
                      <a href="#/site/goodsinfo/90" class>{{ value.title }}</a>
                      <span>{{ value.add_time | formatTime }}</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import moment from "moment";
export default {
  name: "detail",
  data() {
    return {
      goodsList: [],
      goodsinfo: {},
      comment: "",
      pageIndex: 1,
      pageSize: 10,
      totalpage: 10,
      commentList: [],
      imgList: [],
      goodsinfoContent: "",
      num:'',
      isDesc:true
    };
  },
  methods: {
    addcomment() {
      if (this.comment == "") {
        this.$message("哥们写点东西");
        return;
      }
      this.$axios
        .post(`/site/validate/comment/post/goods/${this.$route.params.id}`, {
          commenttxt: this.comment
        })
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message({
              message: "恭喜你，评论成功",
              type: "success"
            });
          }

          this.comment = "";
          this.pageIndex = 1;
          this.getcomments();
        });
    },
    getcomments() {
      this.$axios
        .get(
          `/site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${
            this.pageIndex
          }&pageSize=${this.pageSize}`
        )
        .then(res => {
          console.log(res);
          this.commentList = res.data.message;
          this.totalpage = res.data.totalcount;
          console.log(res.data.totalcount);
        });
    },
    handleSizeChange(val) {
      this.pageIndex = val;
      this.getcomments();
      console.log(val);
    },
    handleCurrentChange(val) {
      this.pageSize = val;
      this.getcomments();
      console.log(val);
    }
  },
  created() {
    this.getcomments();
    const id = this.$route.params.id;
    this.$axios.get(`/site/goods/getgoodsinfo/${id}`).then(res => {
      console.log(res);
      this.goodsList = res.data.message.hotgoodslist;
      this.goodsinfoContent = res.data.message.goodsinfo.content;
      this.goodsinfo = res.data.message.goodsinfo;
      this.imgList = res.data.message.imglist;
    });
  }
  // filters: {
  //   formatTime(value) {
  //     return moment(value).format("YYYY年MM月DD日");
  //   }
  // }
};
</script>

<style>
.el-carousel__container {
  width: 390px;
}
.el-carousel__container img {
  width: 390px;
}
</style>
