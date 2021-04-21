<template>
  <div class="m-input-file" :style="inputFileStyle">
    <div
      v-if="!files.length && !imagePath && !findFileImagePath"
      class="m-input-file__content"
      :style="inputFileStyle"
      :class="[
        { 'm-input-file--disabled': disabled },
        { 'm-input-file__draging': isDrag }
      ]"
      @dragover.prevent="onDrag"
      @drop.prevent="dropFile"
      @dragleave.prevent="offDrag"
    >
      <label class="m-input-file__label">
        <MIcon icon-name="image" />
        <span class="m-input-file__text--placeholder">{{ placeholder }}</span>
        <input
          ref="file"
          type="file"
          :disabled="disabled"
          :accept="accept"
          @change="setUploadFile"
        />
      </label>
      <p v-if="errorMessages.length" class="m-input-file__text--error">
        {{ errorMessages[0] }}
      </p>
    </div>
    <div class="m-input-file__preview-item-wrapper">
      <div v-if="cropper" class="m-input-file__preview-crop-wrapper">
        <VueCropper
          ref="cropper"
          drag-mode="crop"
          :aspect-ratio="isAspectRatio.x / isAspectRatio.y"
          :src="imagePath ? imagePath : findFileImagePath"
          alt="Source Image"
        />
      </div>
      <div v-else-if="croppedImage" class="m-input-file__preview-cropped-image">
        <MImage :src="croppedImage" alt="Cropped Image" />
      </div>
      <div v-else-if="findFileImagePath || imagePath">
        <div
          v-for="(file, fileIndex) in files"
          :key="fileIndex"
          class="m-input-file__preview-item"
        >
          <MImage :src="findFileImagePath" alt="Upload Image" />
        </div>
        <div v-if="!findFileImagePath" class="m-input-file__preview-item">
          <MImage
            :src="imagePath"
            alt="Load Image"
            :style="{ width: imageWidth, height: imageHeight }"
          />
        </div>
      </div>
      <div v-if="cropper" class="m-input-file__button-wrapper">
        <MButton max-width="200px" type="standard" @click="cropImage">
          切り出し
        </MButton>
        <MButton
          max-width="200px"
          type="standard"
          @click.prevent="resetCropPosition"
        >
          リセット
        </MButton>
        <MButton max-width="200px" type="standard" @click="closeCropper">
          キャンセル
        </MButton>
      </div>
      <div
        v-else-if="files.length || imagePath"
        class="m-input-file__button-wrapper"
      >
        <MButton
          v-if="editable"
          max-width="200px"
          type="standard"
          @click="openCropper"
        >
          画像を編集する
        </MButton>
        <div class="m-input-file__file-delete" @click="onPreviewClose">
          <!-- TODO:Display dialog after design fix. -->
          <MLabel color="denim-light">
            <MIcon icon-name="trash-alt" />画像を削除する
          </MLabel>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MButton from '@/components/MButton/MButton.vue';
import MLabel from '@/components/MTypography/MLabel/MLabel.vue';
import MImage from '@/components/MImage/MImage.vue';
import MIcon from '@/components/MIcon/MIcon.vue';

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    MButton,
    MLabel,
    MImage,
    MIcon
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    limitSize: {
      validator: prop => typeof prop === 'number' || prop === null,
      default: null
    },
    allowType: {
      type: [String, Array],
      default: () => []
    },
    accept: {
      type: String,
      default: ''
    },
    unit: {
      type: String,
      default: 'MB'
    },
    maxHeight: {
      type: String,
      default: undefined
    },
    maxWidth: {
      type: String,
      default: undefined
    },
    minWidth: {
      type: String,
      default: undefined
    },
    minHeight: {
      type: String,
      default: undefined
    },
    height: {
      type: String,
      default: undefined
    },
    width: {
      type: String,
      default: undefined
    },
    imagePath: {
      type: String,
      default: undefined
    },
    imageWidth: {
      type: String,
      default: undefined
    },
    imageHeight: {
      type: String,
      default: undefined
    },
    disabled: {
      type: Boolean,
      default: false
    },
    aspectRatio: {
      type: [Object, String],
      default: { x: 1, y: 1 }
    }
  },
  data() {
    return {
      files: [],
      errorMessages: [],
      isDrag: false,
      byteSize: {
        KB: 1024,
        MB: 1048576
      },
      cropper: false,
      croppedImage: null
    };
  },
  computed: {
    isAspectRatio() {
      if (typeof this.checked === 'string') return '{ x: 1, y: 1 }';
      if (typeof this.checked === 'function') return this.aspectRatio();
      return { x: 1, y: 1 };
    },
    findFileImagePath() {
      let image;
      this.files.find(item => {
        if (item.image) {
          image = item.image;
        }
      });
      return image;
    },
    setlimitSize() {
      return this.limitSize * this.byteSize[this.unit];
    },
    inputFileStyle() {
      const style = {
        'max-width': this.maxWidth,
        'min-width': this.minWidth,
        'max-height': this.maxHeight,
        'min-height': this.minHeight,
        width: this.width,
        height: this.height
      };
      return this.customStyle ? { ...style, ...this.customStyle } : style;
    },
    editable() {
      return (
        (!!this.imagePath && this.imagePath.indexOf('data:') !== -1) ||
        !!this.findFileImagePath
      );
    }
  },
  methods: {
    async setUploadFile(event) {
      this.errorMessages = [];
      const files = event.target.files || event.dataTransfer.files;
      const file = files[0];
      if (this.checkFile(file)) {
        this.createImage(file);
        this.$emit('uploadFile', file);
      }
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = event => {
        const object = {
          image: event.target.result,
          name: file.name
        };
        object.image = event.target.result;
        object.name = file.name;
        this.files.push(object);
        this.$emit('crop', object.image);
      };
      reader.readAsDataURL(file);
    },
    onPreviewClose(item) {
      const index = this.files.indexOf(item);
      this.files.splice(index, 1);
      this.$emit('deleteImage');
    },
    onDrag() {
      this.isDrag = true;
    },
    offDrag() {
      this.isDrag = false;
    },
    dropFile(event) {
      this.setUploadFile(event);
      this.offDrag();
      this.$emit('crop', '');
    },
    checkFile(file) {
      let result = true;
      this.eroorMessages = [];
      // キャンセルしたら処理中断
      this.allowType.forEach((element, i) => {
        if (this.allowType.indexOf(file.type) === -1) {
          result = false;
          this.errorMessages.push(
            `アップロードできるのは${this.allowType[i]}ファイルです。`
          );
        } else if (this.allowType === []) {
          result = true;
        } else {
          result = true;
        }
      });
      if (this.files.length > 9) {
        this.errorMessages.push(
          `アップロードできるイメージファイルは10ファイルまでです。`
        );
        result = false;
        this.$emit('checkFile');
      }
      const fileSize = parseInt(file.size);
      if (fileSize > this.setlimitSize) {
        this.errorMessages.push(
          `アップロードできるファイルサイズは${this.limitSize}${this.unit}までです。`
        );
        result = false;
      } else if (this.limitSize === null) {
        result = true;
      }
      return result;
    },
    openCropper() {
      this.cropper = true;
    },
    closeCropper() {
      this.cropper = false;
    },
    cropImage() {
      this.croppedImage = this.$refs.cropper.getCroppedCanvas().toDataURL();
      this.closeCropper();
      this.$emit('crop', this.croppedImage);
    },
    resetCropPosition() {
      this.$refs.cropper.reset();
    }
  }
});
</script>

<style lang="scss" scoped>
.m-input-file {
  width: 100%;

  &__content {
    height: auto;
    text-align: center;
    background: $mina-white;
    border: 1px dashed $mina-indigo-lighter;
    box-sizing: border-box;
    border-radius: 4px;
  }

  &:hover {
    border-color: #c3c3c3;
  }
  &__label {
    display: block;
    padding: 112px 56px;
    color: $mina-indigo-lighter;

    &:hover {
      cursor: pointer;
    }

    & input {
      display: none;
    }
  }
  &__text {
    &--error {
      color: $mina-red;
    }
    &--placeholder {
      margin: 0 0 0 8px;
    }
  }
  &__draging {
    background-color: #dcdcdc;
    border: 1px dashed #bcbcbc;
  }
  &__button-wrapper {
    margin: 16px 0 0;
    display: flex;
    align-items: center;
  }
  &__file-delete {
    cursor: pointer;
    margin: 0 0 0 24px;

    &:hover {
      text-decoration: underline;
    }
  }

  &__preview {
    width: 100%;
    height: calc(372px * (9 / 16));
    overflow: hidden;
  }

  &__preview-crop-wrapper {
    display: flex;
    justify-content: center;
  }

  &__preview-cropped-image {
    display: grid;
    place-content: center;
  }

  &--disabled {
    @include inputTextDiabled;
  }
}
</style>
