<template>
  <div class="my-5">
    <h3><span :class="labels">ID:</span> {{ emp.id }}</h3>
    <h5><span :class="labels">Name:</span> {{ emp.name }}</h5>
    <h5><span :class="labels">Gender:</span> {{ emp.gender }}</h5>
    <h5><span :class="labels">Job Title:</span>{{ emp.jobTitle }}</h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "detailsApp",
  props: ["id"],
  data() {
    return {
      emp: { id: 0, name: "", gender: "", jobTitle: "" },
      labels:'labels'
    };
  },
  watch: {
    id() {
      this.getEmpDetails();
    },
  },
  created() {
    this.getEmpDetails();
  },
  methods: {
    getEmpDetails() {
      // this.id = this.$route.params.id;
      axios
        .get(` http://localhost:2000/employees?id=${this.id}`)
        .then((res) => {
          console.log(res.data);
          for (let i = 0; i < res.data.length; i++) {
            this.emp.id = res.data[i].id;
            this.emp.name = res.data[i].name;
            this.emp.gender = res.data[i].gender;
            this.emp.jobTitle = res.data[i].job_title;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.labels{
    color: black;
    font-weight: bolder;
}
</style>