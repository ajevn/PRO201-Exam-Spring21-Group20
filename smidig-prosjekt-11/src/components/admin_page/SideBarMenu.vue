<template>
  <div class="container">
    <div class="flex-container">
      <div class="flex-items">
        <div
          class="section-item-styling"
          :class="{ 'section-selected': selected === 'dashboard' }"
          @click="selectSection('dashboard')"
        >
          <div>
            <p
              class="section-item-text"
              :class="{ 'section-selected-text': selected === 'dashboard' }"
            >
              Dashboard
            </p>
          </div>
          <div class="icon-container">
            <icon-base
              :iconName="'home'"
              iconColor="#828B96"
              iconWidth="30%"
              iconHeight="30%"
            />
          </div>
        </div>
      </div>
      <div class="flex-items">
        <div
          class="section-item-styling"
          :class="{ 'section-selected': selected === 'parts' }"
          @click="selectSection('parts')"
        >
          <div>
            <p
              class="section-item-text"
              :class="{ 'section-selected-text': selected === 'parts' }"
            >
              Parts Overview
            </p>
          </div>
          <div class="icon-container">
            <icon-base
              :iconName="'cogs'"
              iconColor="#828B96"
              iconWidth="30%"
              iconHeight="30%"
            />
          </div>
        </div>
      </div>
      <div class="flex-items">
        <div
          class="section-item-styling"
          :class="{ 'section-selected': selected === 'Camps' }"
          @click="selectSection('Camps')"
        >
          <div>
            <p
              class="section-item-text"
              :class="{ 'section-selected-text': selected === 'Camps' }"
            >
              Camp Overview
            </p>
          </div>
          <div class="icon-container">
            <icon-base
              :iconName="'earth'"
              iconColor="#828B96"
              iconWidth="30%"
              iconHeight="30%"
            />
          </div>
        </div>
      </div>
      <div class="flex-items">
        <div
          class="section-item-styling"
          :class="{ 'section-selected': selected === 'Users' }"
          @click="selectSection('Users')"
        >
          <div>
            <p
              class="section-item-text"
              :class="{ 'section-selected-text': selected === 'Users' }"
            >
              User Administration
            </p>
          </div>
          <div class="icon-container">
            <icon-base
              :iconName="'users'"
              iconColor="#828B96"
              iconWidth="30%"
              iconHeight="30%"
            />
          </div>
        </div>
      </div>
      <div class="flex-items">
        <div
          class="section-item-styling"
          :class="{ 'section-selected': selected === 'CampsAdmin' }"
          @click="selectSection('CampsAdmin')"
        >
          <div>
            <p
              class="section-item-text"
              :class="{ 'section-selected-text': selected === 'CampsAdmin' }"
            >
              Camp Administration
            </p>
          </div>
          <div class="icon-container">
            <icon-base
              :iconName="'home'"
              iconColor="#828B96"
              iconWidth="30%"
              iconHeight="30%"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { useRouter } from "vue-router";
import IconBase from "../ui/IconBase";

export default {
  name: "SideBarMenu",
  setup() {
    const router = useRouter();
    return {
      router
    };
  },
  components: { IconBase },
  methods: {
    selectSection(event) {
      this.selected = event;
      this.$emit("childToParent", event);
    }
  },
  data() {
    return {
      timestamp: "",
      selected: "dashboard"
    };
  }
};
</script>

<style scoped>
.icon-container {
  position: relative;
  bottom: 45px;
  left: 20px;
  filter: grayscale(100%);
}
.container {
  background-color: #fbf6ed;
}

.flex-container {
  height: 91.2vh;
  background-color: #e9e6e0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: center;
}

.flex-items:nth-child(1) {
  margin-top: 120px;
  padding: 0 7px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(2) {
  padding: 0 7px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(3) {
  padding: 0 7px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(4) {
  padding: 0 7px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.flex-items:nth-child(5) {
  padding: 0 7px;
  display: block;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  align-self: auto;
  order: 0;
}

.section-item-styling {
  height: 45px;
  margin-top: 10px;
  background: #fafafa;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  box-shadow: 3px 3px 12px #e8e8e8;
}

.section-item-styling:hover {
  cursor: pointer;
}

@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");
.section-item-text {
  height: 100%;
  text-align: start;
  font-size: 1em;
  font-family: "Open Sans", sans-serif;
  color: #686e75;
  line-height: 100%;
  padding: 14px 14px 14px 60px;
}
.section-selected {
  background-color: #a9a9a9;
  transition: all 0.1s 0s ease, all 0.1s 0s ease;
}
.section-selected-text {
  color: white;
}
</style>
