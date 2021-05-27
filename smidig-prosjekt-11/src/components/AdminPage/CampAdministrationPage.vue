<template>
  <div class="container">
    <form>
      <div class="wrapper">
        <div class="input">
          <label>Username: </label>
          <input type="text" placeholder="Enter Username" required />
        </div>
        <div class="input">
          <label>Password: </label>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div class="input">
          <label>Confirm Password: </label>
          <input type="password" placeholder="Enter Password" required />
        </div>
        <div>
          <button id="submit-btn" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CampAdministrationPage"
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 100%;
  height: 100%;

  .wrapper {
    background: #2c2a29;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02),
      0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
      0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05),
      0 100px 80px rgba(0, 0, 0, 0.07), -2px -3px #899599;

    .input {
      margin-bottom: 1vh;
      width: 400px;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;

      label {
        color: #a8d598;
        font-weight: bold;
        width: 200px;
      }

      input {
        width: 200px;
        padding: 0.4em;
        box-shadow: inset -2px -2px #899599;
        outline: none;
        color: #2c2a29;
        font-weight: bold;
        background: #cdcdcd;

        &::placeholder {
          color: #6d6d6d;
        }
      }
    }
    #submit-btn {
      margin-top: 50px;
      background-color: #ececec;
      color: #2c2a29;
      width: 100%;
      padding: 0.5rem;
      border-radius: 5px;
      box-shadow: -1px -2px #899599;
      outline: none;
      transition: 150ms;
      font-weight: bold;

      &:hover {
        background-color: #4d5050;
        color: #ececec;
      }

      &:active {
        transform: scale(0.98);
        transition-duration: 10ms;
        box-shadow: inset 2px 2px 2px #899599;
        background-color: #6d6d6d;
      }
    }
  }
}
</style>
