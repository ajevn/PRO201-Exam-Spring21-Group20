<template>
    <button type="button"  class="hamburger-icon" title="Menu" @click="toggleIconChange">
        <div 
            class="burger-bar"
            :class="{bar1: menuSelected}"></div>
        <div 
            class="burger-bar"
            :class="{bar2: menuSelected}"></div>
        <div 
            class="burger-bar"
            :class="{bar3: menuSelected}"></div>
    </button>
</template>
<script>
export default {
    name: 'HamburgerIcon',
    data() {
        return {
            menuSelected: true
        }
    },
    methods: {
        toggleIconChange() {
            const switchBool = this.menuSelected
            this.menuSelected = !switchBool
        }
    }
}
</script>

<style>
.hamburger-icon {
    position: relative;
    background-color: transparent;
    pointer-events: all; 
}

.hamburger-icon:hover .burger-bar {
    background-color: #423048;
}

.burger-bar {
  width: 30px;
  height: 5px;
  background-color: #9fd18d;
  margin: 6px 0;
  transition: all .5s;
}

.bar1 {
  -webkit-transform: rotate(-45deg) translate(-10px, 11px);
  transform: rotate(-45deg) translate(-5px, 9px);
}

.bar2 {
  opacity: 0;
}

.bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -10px);
  transform: rotate(45deg) translate(-6px, -10px) ;
}
</style>