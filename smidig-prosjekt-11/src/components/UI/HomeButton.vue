<template>
  <div class="home-button">
    <a href="#">
      <div>
        <p>Home</p>
        <img src="@/assets/Images/Icons/home-icon.png" alt="Home button" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeButton"
};
</script>

<style lang="scss" scoped>
a {
  margin: 0;

    div {
        display: inline-block;
        margin-top: 8vh;
        width: 250px;
        height: 70px;
        background-color: #405c6a;
        position: relative;
        border-radius: 5px;
        box-shadow: -1px -2px #899599;

    p {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      text-align: left;
      padding: 10px 20px;
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
      width: 16%;
    }

        &:hover {
            background-color: #5f7f8e;
        }

        &:active {
            transform: scale(0.98);
            transition-duration: 10ms;
            box-shadow: inset 3px 3px 2px #899599;
            background-color: #81aabd;
        }
    }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  a {
    div {
      width: 175px;
      height: 50px;

      p {
        font-size: 25px;
        padding: 7px 20px;
      }

      img {
        top: -4px;
      }
    }
  }
}
</style>
