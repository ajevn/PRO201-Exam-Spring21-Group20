<template>
  <svg class="icon-svg" :width="iconWidth" :height="iconHeight">
    <!-- <use :xlink:href="`../../assets/Images/Icons/sprite.svg#icon-${iconName}`"></use> -->
    <use
      :xlink:href="
        require('../../assets/Images/Icons/sprite.svg') + '#icon-' + iconName
      "
      :fill="iconColor"
      :width="iconWidth"
      :height="iconHeight"
    ></use>
  </svg>
</template>
<script>
export default {
  name: "IconBase",
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
    }
  }
};
</script>
