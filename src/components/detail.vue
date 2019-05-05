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
              <div class="pic-box"></div>
              <div class="goods-spec">
                <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
                <p class="subtitle">双800万摄像头，八核，安卓智能手机）荣耀6plus</p>
                <div class="spec-box">
                  <dl>
                    <dt>货号</dt>
                    <dd id="commodityGoodsNo">SD9102356032</dd>
                  </dl>
                  <dl>
                    <dt>市场价</dt>
                    <dd>
                      <s id="commodityMarketPrice">¥2499</s>
                    </dd>
                  </dl>
                  <dl>
                    <dt>销售价</dt>
                    <dd>
                      <em id="commoditySellPrice" class="price">¥2195</em>
                    </dd>
                  </dl>
                </div>
                <div class="spec-box">
                  <dl>
                    <dt>购买数量</dt>
                    <dd>
                      <div class="stock-box">
                        <div class="el-input-number el-input-number--small">
                          <span role="button" class="el-input-number__decrease is-disabled">
                            <i class="el-icon-minus"></i>
                          </span>
                          <span role="button" class="el-input-number__increase">
                            <i class="el-icon-plus"></i>
                          </span>
                          <div class="el-input el-input--small">
                            <!---->
                            <input
                              autocomplete="off"
                              size="small"
                              type="text"
                              rows="2"
                              max="60"
                              min="1"
                              validateevent="true"
                              class="el-input__inner"
                              role="spinbutton"
                              aria-valuemax="60"
                              aria-valuemin="1"
                              aria-valuenow="1"
                              aria-disabled="false"
                            >
                            <!---->
                            <!---->
                            <!---->
                          </div>
                        </div>
                      </div>
                      <span class="stock-txt">
                        库存
                        <em id="commodityStockNum">60</em>件
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
                    <a href="javascript:;" class="selected">商品介绍</a>
                  </li>
                  <li>
                    <a href="javascript:;">商品评论</a>
                  </li>
                </ul>
              </div>
              <div class="tab-content entry" style="display: block;" v-html="goodsinfo"></div>
              <div class="tab-content" style="display: block;">
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
                    <p v-show='commentList.length==0'
                      style="margin: 5px 0px 15px 69px; line-height: 42px; text-align: center; border: 1px solid rgb(247, 247, 247);"
                    >暂无评论，快来抢沙发吧！</p>
                    <li v-for='(value,index) in commentList' :key='index'>
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
      goodsinfo: "",
      comment: "",
      pageIndex: 1,
      pageSize: 10,
      totalpage: 10,
      commentList: []
    };
  },
  methods: {
    addcomment() {
      if (this.comment == "") {
        this.$message("哥们写点东西");
        return;
      }
      this.$axios
        .post(
          `/site/validate/comment/post/goods/${
            this.$route.params.id
          }`,
          { commenttxt: this.comment }
        )
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message({
              message: "恭喜你，评论成功",
              type: "success"
            });
          }

          this.comment = "";
          this.pageIndex=1;
          this.getcomments()
        });
    },
    getcomments(){
        this.$axios.get(`/site/comment/getbypage/goods/${this.$route.params.id}?pageIndex=${this.pageIndex}&pageSize=${this.pageSize}`).then(res=>{
            console.log(res)
            this.commentList=res.data.message;
            this.totalpage=res.data.totalcount
            console.log(res.data.totalcount)
        })
    },
    handleSizeChange(val) {
        this.pageIndex=val
        this.getcomments()
      console.log(val);
    },
    handleCurrentChange(val) {
        this.pageSize=val
        this.getcomments()
      console.log(val);
    }
  },
  created() {
      this.getcomments()
    const id = this.$route.params.id;
    this.$axios
      .get(`/site/goods/getgoodsinfo/${id}`)
      .then(res => {
        // console.log(res);
        this.goodsList = res.data.message.hotgoodslist;
        this.goodsinfo = res.data.message.goodsinfo.content;
      });
  },
  filters: {
    formatTime(value) {
      return moment(value).format("YYYY年MM月DD日");
    }
  }
};
</script>

<style>
</style>
