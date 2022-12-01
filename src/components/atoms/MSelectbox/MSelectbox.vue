<template>
  <div
    v-click-outside="closeSelectList"
    class="m-selectbox"
    :style="{ 'min-width': minWidth }"
  >
    <div
      class="m-selectbox__form"
      @keydown.space="clickSelectbox"
      @click="clickSelectbox"
    >
      <MInputText
        type="standard"
        readonly
        autocomplete="off"
        :placeholder="placeholder"
        class="m-selectbox__form-input"
        :value="setSelectedValue"
        :disabled="inputDisabled"
        tabindex="0"
        key="selectbox"
        @keydown="keydownSelectbox"
      />
      <div class="m-selectbox__icon">
        <MIcon icon icon-name="angle-down" color="ink-lighter" />
      </div>
    </div>
    <div v-show="showSelectList" class="m-selectbox__list">
      <button
        v-for="(item, index) in selectList"
        :key="index"
        :disabled="buttonDisabled"
        ref="button"
        class="m-selectbox__list-item"
        @click="changeSelectValue(item)"
        @keydown.space="changeSelectValue(item)"
        @keydown="keydownSelectValue"
      >
        <template v-if="itemText === ''">
          {{ item }}
        </template>
        <template v-else>
          {{ item[itemText] }}
        </template>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Data, Methods, Computed, Props } from './types';
import MIcon from '@/components/atoms/MIcon/MIcon.vue';
import MInputText from '@/components/atoms/MInputText/MInputText.vue';
import ClickOutside from 'vue-click-outside';

const KEYCODE = {
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  TAB: 9,
  SPACE: 32
};

export default Vue.extend<Data, Methods, Computed, Props>({
  name: 'MSelectbox',
  components: {
    MIcon,
    MInputText
  },
  directives: {
    ClickOutside
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    initialSelectedValue: {
      type: [String, Number],
      default: ''
    },
    selectedValue: {
      type: [String, Number],
      default: ''
    },
    selectList: {
      type: Array,
      default: () => []
    },
    itemValue: {
      type: String,
      default: ''
    },
    itemText: {
      type: String,
      default: ''
    },
    minWidth: {
      type: String,
      default: ''
    },
    inputDisabled: {
      type: Boolean,
      default: false
    },
    buttonDisabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showSelectList: false
    };
  },
  computed: {
    setSelectedValue() {
      if (!this.selectList) return '';

      if (!this.selectedValue) {
        if (!this.itemValue) return this.initialSelectedValue;
        const selectedItem = this.selectList.find(
          element => element[this.itemValue] === this.initialSelectedValue
        );
        if (!selectedItem) return '';
        return selectedItem[this.itemText];
      } else {
        if (!this.itemValue) return this.selectedValue;
        const selectedItem = this.selectList.find(
          element => element[this.itemValue] === this.selectedValue
        );
        if (!selectedItem) return '';
        return selectedItem[this.itemText];
      }
    },
    buttonElements() {
      return this.$refs.button;
    }
  },
  methods: {
    clickSelectbox() {
      if (this.inputDisabled === true) {
        return false;
      }
      this.showSelectList = !this.showSelectList;
      this.focusButtonElements();
    },
    keydownSelectbox(event) {
      if (this.showSelectList === false) {
        return false;
      }
      if (event.keyCode === KEYCODE.ARROW_DOWN) {
        this.showSelectList = true;
        this.focusButtonElements();
      } else if (event.keyCode === KEYCODE.TAB) {
        this.closeSelectList();
      }
    },
    keydownSelectValue(event) {
      if (event.keyCode === KEYCODE.ARROW_DOWN) {
        this.moveNext();
        event.preventDefault();
      } else if (event.keyCode === KEYCODE.ARROW_UP) {
        this.movePrev();
        event.preventDefault();
      } else if (event.keyCode === KEYCODE.TAB) {
        this.closeSelectList();
      }
    },
    findIndex(target) {
      return [].findIndex.call(this.buttonElements, event => event === target);
    },
    moveFocus(index) {
      if (this.buttonElements[index]) {
        this.buttonElements[index].focus();
      }
    },
    moveNext() {
      const index = this.findIndex(event.target);
      this.moveFocus(index + 1);
    },
    movePrev() {
      const index = this.findIndex(event.target);
      this.moveFocus(index - 1);
    },
    focusButtonElements() {
      const findIndexSelected = this.selectList.findIndex(
        item =>
          item === this.setSelectedValue ||
          item[this.itemText] === this.setSelectedValue
      );
      this.$nextTick(() => {
        if (findIndexSelected >= 0) {
          event.preventDefault();
          this.buttonElements[findIndexSelected].focus();
        } else {
          event.preventDefault();
          this.buttonElements[0].focus();
        }
      });
    },
    closeSelectList() {
      this.showSelectList = false;
    },
    changeSelectValue(item) {
      this.closeSelectList();
      this.$emit('change', item);
    }
  }
});
</script>

<style lang="scss" scoped>
.m-selectbox {
  position: relative;
  width: 100%;

  &__form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__form-input {
    width: 100%;
    cursor: pointer;
  }

  &__icon {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 16px;
    width: 10px;
    height: 17px;
    margin: auto;
  }

  &__list {
    z-index: 10;
    position: absolute;
    top: 51px;
    right: 0;
    width: 100%;
    max-height: 200px;
    background: $mina-white;
    border-radius: 4px;
    box-shadow: 0px 4px 4px rgba($color: $mina-black, $alpha: 0.25);
    overflow-y: auto;
  }

  &__list-item {
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    padding-left: 20px;
    background: none;
    border: none;
    font-size: $font-x-small;
    color: $mina-ink;
    cursor: pointer;
    outline: none;

    &:hover,
    &:focus {
      background: rgba($color: $mina-indigo-lighter, $alpha: 0.32);
    }
  }
}
</style>
