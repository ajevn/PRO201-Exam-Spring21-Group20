<template>
  <div>
    <router-link
      :to="'/' + linkDestination"
      class="nav-menu-item"
      @mouseover="hovering = true"
      @mouseout="hovering = false"
    >
      <div class="icon-container">
        <icon-base
          :iconName="icon"
          :iconColor="dybamicIconColor"
          iconWidth="100%"
          iconHeight="100%"
        />
      </div>
      <div class="item-title">
        {{ textValue }}
      </div>
    </router-link>
  </div>
</template>
<script>
import IconBase from "@/components/ui/IconBase.vue";
export default {
  name: "NavLink",
  components: { IconBase },
  data() {
    return {
      hovering: false
    };
  },
  computed: {
    dybamicIconColor() {
      if (this.hovering) {
        return "#ffffff";
      } else {
        return "#7eb46b";
      }
    }
  },
  props: {
    textValue: {
      type: String
    },
    linkDestination: {
      type: String,
      default: "/"
    },
    icon: {
      type: String
    },
    altText: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-menu-item {
  display: flex;
  align-items: center;
  margin-left: 60px;
}

.nav-menu-item:hover {
  .item-title {
    color: #ffffff;
  }

  #svg-use {
    fill: #ffffff;
  }
}

.icon-container {
  height: 24px;
  width: 24px;
  margin-right: 5px;
}

.item-title {
  color: #7eb46b;
  font-size: 1rem;
}

@media screen and (max-width: 960px) {
  .nav-menu-item {
    border: 2px solid #7eb46b;
    border-radius: 10px;
    padding: 10px;
    margin-left: 0;
    margin-bottom: 20px;
  }

  .item-title {
    margin-left: 8px;
    font-size: 0.9rem;
  }
}
</style>
