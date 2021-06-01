<template>
  <div id="progress-bar-border-top">
    <div id="progress-bar">
      <div id="progress-bar-container">
        <!-- Green line -->
        <div id="progress-bar-border">
          <!-- Setting class if isSuccessfulReport and/or isUnsuccessfulReport is true -->
          <div
            id="progress-bar-width"
            :class="{
              'progress-bar-successful-line': isSuccessfulReport,
              'progress-bar-unsuccessful-line': isUnsuccessfulReport
            }"
          ></div>
        </div>

        <!-- images -->
        <div
          class="progress-bar-done progress-bar-icons"
          id="progress-bar-home"
        >
          <img
            src="@/assets/images/icons/home-icon.png"
            alt="Progress bar, Home button"
          />
        </div>

        <div
          class="progress-bar-done progress-bar-icons"
          id="progress-bar-edit-report"
        >
          <img
            src="@/assets/images/icons/edit-report-icon.png"
            alt="Progress bar, Edit report"
          />
        </div>

        <!-- Setting class if isSuccessfulReport and/or isUnsuccessfulReport is true -->
        <div
          :class="{
            'progress-bar-done': isSuccessfulReport,
            'progress-bar-not-done': isUnsuccessfulReport
          }"
          class="progress-bar-icons"
          id="progress-bar-success"
        >
          <img
            src="@/assets/images/icons/report-success-white-icon.png"
            alt="Progress bar, Report sent"
          />
        </div>
      </div>

      <!-- Button to go back to previous page -->
      <router-link
        :to="'/' + prevBtn"
        :class="{
          'next-btn-none': isSuccessfulReport
        }"
      >
        <icon-base
          class="progress-bar-buttons"
          id="back-btn"
          :iconName="'arrow-left'"
          iconColor="#7eb46b"
          iconWidth="100%"
          iconHeight="100%"
          icon-hover-color="#98DA81"
        />
      </router-link>

      <!-- Button to go to next page -->
      <!-- Setting class if isSuccessfulReport is true -->
      <router-link
        :to="'/' + nextBtn"
        :class="{
          'next-btn-none': isSuccessfulReport || updateTotalProducts < 1
        }"
      >
        <button id="forward-btn"
          v-if="getStatus === false">
          <span class="font-standardText"
            >Submit
            <span style="font-size: 1.1em;">{{ updateTotalProducts }}</span>
            Repairs</span
          >
          <img
            src="@/assets/images/icons/enter.png"
            alt="Go to next page"
            id="submit-icon"
          />
        </button>
      </router-link>
      <!-- Using a getter from store to display the amount of products rendered -->
    </div>
  </div>
</template>

<script>
import IconBase from "@/components/ui/IconBase";
export default {
  name: "Progress bar",
  components: { IconBase },
  data() {
    return {
      isSuccessfulReport: false,
      isUnsuccessfulReport: true,
      prevBtn: "repair",
      nextBtn: "entry-successful"
    };
  },
  // Updating the amount of products rendered
  computed: {
    updateTotalProducts() {
      return this.$store.getters.getNumOfEntities;
    },
    getStatus(){
      return this.$store.getters.getStatus;
    }
  },

  // Implementing Lifecycle hooks to change classes
  // depending on url
  created: function() {
    let url = window.location.href;

    if (url.indexOf("entry-successful") > -1) {
      this.isSuccessfulReport = true;
      this.isUnsuccessfulReport = false;
      this.prevBtn = "repair";
    } else {
      this.isSuccessfulReport = false;
      this.isUnsuccessfulReport = true;
      this.prevBtn = "#";
    }
  }
};
</script>

<style lang="scss" scoped>
#progress-bar-border-top {
  position: absolute;
  bottom: 0;
  height: 70px;
  width: 100%;
  background-color: #2c2a29;

  #progress-bar {
    position: relative;
    margin: auto;
    width: 60%;

    #progress-bar-container {
      position: relative;
      padding-top: 2rem;
      width: 50%;
      margin: auto;

      #progress-bar-border {
        overflow: hidden;
        height: 0.25rem;
        margin-bottom: 1rem;
        background-color: #848484;
        display: flex;

        #progress-bar-width {
          background-color: #7eb46b;
        }
      }
    }

    .progress-bar-icons {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 14px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 60%;
        margin: auto;
      }
    }

    #progress-bar-edit-report {
      left: 46%;
    }

    #progress-bar-success {
      left: 95%;
    }

    // Classes to change from done and not done steps
    // in the repair process
    .progress-bar-done {
      background-color: #7eb46b;
    }

    .progress-bar-not-done {
      background-color: #848484;
    }

    // Buttons to go back and forward
    .progress-bar-buttons {
      position: absolute;
      width: 45px;
    }

    #back-btn {
      left: 15px;
      top: 15px;
    }
    #submit-icon {
      padding-right: 10px;
      padding-top: 1px;
      height: 27px;
      width: 34px;
      transform: scaleX(-1);
    }

    #forward-btn {
      font-weight: bold;
      padding: 0.5rem 0.8rem;
      border-radius: 5px;
      display: inline-flex;
      position: absolute;
      right: -120px;
      top: 14px;
      background-color: #9fd18b;
      color: #2c2a29;
      outline: none;
      box-shadow: -2px -2px #666666;
      transition: 150ms;

      &:hover {
        background-color: #caeeb9;
        transform: scale(1.01);
      }

      &:active {
        background-color: #9fd18b;
        transition-duration: 10ms;
        box-shadow: inset 2px 2px 2px #899599;
        transform: scale(1);
      }
    }
  }
}

.progress-bar-unsuccessful-line {
  width: 50%;
}

.progress-bar-successful-line {
  width: 100%;
}

.next-btn-none {
  display: none;
}

#total-products {
  position: absolute;
  right: -150px;
  bottom: -10px;
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  #progress-bar-border-top {
    height: 60px;

    #progress-bar {
      #progress-bar-container {
        padding-top: 1.75rem;
      }

      .progress-bar-icons {
        width: 30px;
        height: 30px;
      }

      .progress-bar-buttons {
        width: 30px;
      }

      #forward-btn {
        font-size: 11px;
        height: 30px;
        top: 13px;
        right: -90px;
        padding: 0.4em;

        #submit-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
