<template>
  <!-- Base site layout. Can be used as a component inside other pages. Includes Logo, Logo-Bar and employee name -->
  <div class="base">
    <header>
      <div id="logo-bar" class="md:w-auto bg-logoBar">
        <img id="logo-img" class="relative w-1/7 h-3/5" src="../../assets/Images/brightLogo.png" />
        <div id="employee-div">
          <h1 class="text-secondary">Employee, Name</h1>
        </div>
      </div>
    </header>
    <slot />
    <footer>
      <div id="footer-div" class="absolute">
        <small>Copyright &copy; 2020 - Smidig-Prosjekt Gruppe 11</small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LogoBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo-bar {
  height: 10vh;
}
#logo-img {
  top: 2vh;
  left: 1.7vw;
}
#footer-div {
  left: 1vw;
  bottom: 1vh;
}
#employee-div {
  text-align: right;
  padding-right: 1.7vw;
  top: 30px;
}
</style>
