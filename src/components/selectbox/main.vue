<template>
  <div v-click-outside="closeSelectList" class="m-selectbox">
    <div class="m-selectbox__form" @click="clickSelectbox">
      <input
        type="text"
        readonly
        autocomplete="off"
        :placeholder="placeholder"
        class="m-selectbox__form-input"
        :value="setSelectedValue"
        tabindex="0"
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
        ref="button"
        class="m-selectbox__list-item"
        @click="changeSelectValue(item)"
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
import Vue from "vue";
import { Data, Methods, Computed, Props } from "./types";
import MIcon from "../icon/main.vue";
import ClickOutside from "vue-click-outside";

const KEYCODE = {
  ARROW_UP: 38,
  ARROW_DOWN: 40,
  TAB: 9
};

export default Vue.extend<Data, Methods, Computed, Props>({
  name: "MSelectbox",
  components: {
    MIcon
  },
  directives: {
    ClickOutside
  },
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    initialSelectedValue: {
      type: [String, Number],
      default: ""
    },
    selectedValue: {
      type: [String, Number],
      default: ""
    },
    selectList: {
      type: Array,
      default: () => []
    },
    itemText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      showSelectList: false
    };
  },
  computed: {
    setSelectedValue() {
      return this.selectedValue === "" || this.selectedValue === 0
        ? this.initialSelectedValue
        : this.selectedValue;
    },
    buttonElements() {
      return this.$refs.button as HTMLButtonElement[];
    }
  },
  methods: {
    clickSelectbox() {
      this.showSelectList = !this.showSelectList;
      this.focusButtonElements();
    },
    keydownSelectbox(event) {
      if (event.keyCode === KEYCODE.ARROW_DOWN) {
        this.showSelectList = true;
        this.focusButtonElements();
      } else if (event.keyCode === KEYCODE.TAB) {
        this.closeSelectList();
      }
    },
    keydownSelectValue(event) {
      if (event.keyCode === KEYCODE.ARROW_DOWN) {
        this.moveNext(event);
        event.preventDefault();
      } else if (event.keyCode === KEYCODE.ARROW_UP) {
        this.movePrev(event);
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
    moveNext(event) {
      const index = this.findIndex(event.target);
      this.moveFocus(index + 1);
    },
    movePrev(event) {
      const index = this.findIndex(event.target);
      this.moveFocus(index - 1);
    },
    focusButtonElements() {
      const findIndexSelected = this.selectList.findIndex(
        item =>
          item ===
          this
            .setSelectedValue /* ||
          item[this.itemText] === this.setSelectedValue */
      );
      this.$nextTick(() => {
        if (findIndexSelected >= 0) {
          this.buttonElements[findIndexSelected].focus();
        } else {
          this.buttonElements[0].focus();
        }
      });
    },
    closeSelectList() {
      this.showSelectList = false;
    },
    changeSelectValue(item) {
      this.closeSelectList();
      this.$emit("change", item);
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
    padding: 14px 16px;
    background-color: $mina-sky-lighter;
    border: 1px solid $mina-sky-light;
    border-radius: 4px;
    font-size: 13px;
    color: $tx-black;
    cursor: pointer;

    &::placeholder {
      color: $tx-black-lighter;
    }
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
    font-size: 12px;
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
