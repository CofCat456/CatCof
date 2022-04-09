<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4 px-3">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label"
                  >或 上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  ref="fileInput"
                  @change="uploadFile"
                />
              </div>
              <img class="img-fluid" alt="" />
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5" v-if="tempProduct.images">
                <div
                  v-for="(image, key) in tempProduct.images"
                  class="mb-3 input-group"
                  :key="key"
                >
                  <input
                    type="url"
                    class="form-control form-control"
                    v-model="tempProduct.images[key]"
                    placeholder="請輸入連結"
                  />
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    @click="tempProduct.images.splice(key, 1)"
                  >
                    移除
                  </button>
                </div>
                <div
                  v-if="
                    tempProduct.images[tempProduct.images.length - 1] ||
                    !tempProduct.images.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempProduct.images.push('')"
                  >
                    新增圖片
                  </button>
                </div>
              </div>
            </div>
            <div class="col-sm-8 px-3">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="請輸入標題"
                  v-model="tempProduct.title"
                />
              </div>
              <div class="row">
                <div class="mb-3 col-md-6 px-2">
                  <label for="category" class="form-label">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    placeholder="請輸入分類"
                    v-model="tempProduct.category"
                  />
                </div>
                <div class="mb-3 col-md-6 px-2">
                  <label for="price" class="form-label">單位</label>
                  <input
                    type="text"
                    class="form-control"
                    id="unit"
                    placeholder="請輸入單位"
                    v-model="tempProduct.unit"
                  />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col">
                  <label for="origin_price" class="form-label">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    placeholder="請輸入原價"
                    v-model="tempProduct.origin_price"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="price" class="form-label">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="請輸入售價"
                    v-model="tempProduct.price"
                  />
                </div>
              </div>
              <hr />
              <div class="mb-3">
                <label for="description" class="form-label">產品簡介</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入產品描述"
                  v-model="tempProduct.description"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">商品附加內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="請輸入商品附加內容"
                  v-model="tempProduct.bonus"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="stitle" class="form-label">小標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="stitle"
                  placeholder="請輸入小標題"
                  v-model="tempProduct.stitle"
                />
              </div>
              <div class="mb-3">
                <label for="stitle" class="form-label">內容物</label>
                <input
                  type="text"
                  class="form-control"
                  id="content"
                  placeholder="請輸入內容物"
                  v-model="tempProduct.content"
                />
              </div>
              <div class="mb-3">
                <label for="stitle" class="form-label">運費文字</label>
                <input
                  type="text"
                  class="form-control"
                  id="freight"
                  placeholder="請輸入運費文字"
                  v-model="tempProduct.freight"
                />
              </div>
              <div class="mb-3">
                <label for="stext" class="form-label">產品內容</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="stext"
                  placeholder="請輸入商品附加內容"
                  v-model="tempProduct.stext"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="detail" class="form-label">多種咖啡細節</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="detail"
                  placeholder="請輸入多種咖啡細節"
                  v-model="tempProduct.detail"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="Element" class="form-label">混合成分</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="Element"
                  placeholder="請輸入混合成分"
                  v-model="tempProduct.Element"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="country" class="form-label">原產國</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="country"
                  placeholder="請輸入原產國"
                  v-model="tempProduct.country"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="area" class="form-label">產區</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="area"
                  placeholder="請輸入產區"
                  v-model="tempProduct.area"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="altitude" class="form-label">海拔</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="altitude"
                  placeholder="請輸入平均"
                  v-model="tempProduct.altitude"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="Variety" class="form-label">品種</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="Variety"
                  placeholder="請輸入品種"
                  v-model="tempProduct.Variety"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="Soli" class="form-label">土壤種類</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="Soli"
                  placeholder="請輸入品種"
                  v-model="tempProduct.Soli"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="refined" class="form-label">精煉</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="refined"
                  placeholder="請輸入精煉"
                  v-model="tempProduct.refined"
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="roast" class="form-label">烘培程度</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="roast"
                  placeholder="請輸入烘培程度"
                  v-model="tempProduct.roast"
                ></textarea>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col">
                  <label for="bitter" class="form-label">苦味</label>
                  <input
                    type="number"
                    class="form-control"
                    id="bitter"
                    placeholder="請輸入苦味程度"
                    v-model="tempProduct.bitter"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="sour" class="form-label">酸味</label>
                  <input
                    type="number"
                    class="form-control"
                    id="sour"
                    placeholder="請輸入酸味程度"
                    v-model="tempProduct.sour"
                  />
                </div>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col">
                  <label for="sweet" class="form-label">甜味</label>
                  <input
                    type="number"
                    class="form-control"
                    id="sweet"
                    placeholder="請輸入甜味程度"
                    v-model="tempProduct.sweet"
                  />
                </div>
                <div class="mb-3 col">
                  <label for="rich" class="form-label">濃郁</label>
                  <input
                    type="number"
                    class="form-control"
                    id="rich"
                    placeholder="請輸入濃郁程度"
                    v-model="tempProduct.rich"
                  />
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                    v-model="tempProduct.is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
span {
  color: white;
}
</style>

<script>
import ModalMixin from '@/mixins/ModalMixin';

export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      modal: {},
      tempProduct: {}
    };
  },
  methods: {
    uploadFile() {
      const uploadedFile = this.$refs.fileInput.files[0];
      console.dir(uploadedFile);
      const formData = new FormData();
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then((res) => {
        console.log(res.data);
        if (res.data) {
          this.tempProduct.imageUrl = res.data.imageUrl;
          console.log('測試資料', this.tempProduct);
        }
      });
    }
  },
  watch: {
    product() {
      this.tempProduct = this.product;
      // 多圖範例
      if (!this.tempProduct.images) {
        this.tempProduct.images = [];
      }
    }
  },
  mixins: [ModalMixin]
};
</script>
