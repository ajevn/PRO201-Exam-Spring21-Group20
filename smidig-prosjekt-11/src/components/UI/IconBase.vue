<template>
  <svg
    class="icon-svg"
    :width="iconWidth"
    :height="iconHeight"
    @mouseover="hovering = true"
    @mouseout="hovering = false"
  >
    <!-- <use :xlink:href="`../../assets/Images/Icons/sprite.svg#icon-${iconName}`"></use> -->
    <use
      :xlink:href="
        require('../../assets/Images/Icons/sprite.svg') + '#icon-' + iconName
      "
      :fill="dynamicFill"
      :width="iconWidth"
      :height="iconHeight"
    ></use>
  </svg>
</template>
<script>
export default {
  name: "IconBase",
  computed: {
    dynamicFill() {
      if (this.hovering && this.iconHoverColor !== "nohover") {
        return this.iconHoverColor;
      } else {
        return this.iconColor;
      }
    }
  },
  data() {
    return {
      hovering: false
    };
  },
  methods: {
    iconHover() {
      this.hovering = !this.hovering;
    }
  },
  props: {
    iconName: {
      type: String,
      required: true
    },
    iconWidth: {
      type: [Number, String],
      default: 32
    },
    iconHeight: {
      type: [Number, String],
      default: 32
    },
    iconColor: {
      type: String,
      default: "#FFFFFF"
    },
    iconHoverColor: {
      type: String,
      default: "nohover"
    }
  }
};
</script>
