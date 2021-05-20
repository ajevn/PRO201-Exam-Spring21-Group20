<template>
  <div></div>
  <top-metric
    :name-of-data="totalRep"
    data-to-display="333123"
    metric-icon-src=""
  />
  <top-metric
    :name-of-data="totalUnitsRegistered"
    data-to-display="1.000.000"
  />
  <top-metric :name-of-data="mostRepairedPartToday" data-to-display="PCB" />
</template>

<script>
import TopMetric from "@/components/AdminPage/TopMetrics";

export default {
  name: "DashboardPage",
  setup() {},
  components: {
    TopMetric
  },
  methods: {},
  data() {
    return {};
  }
};
</script>

<style scoped></style>
