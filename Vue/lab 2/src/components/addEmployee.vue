<template>
  <div class="container">
    <h1>Add Employee</h1>
    <form action="" @submit.prevent="addEmployee">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" v-model="emp.name" />
      </div>
      <div :class="menu" class="mb-3">
        <select
          v-model="emp.gender"
          class="form-select"
          aria-label="Default select example"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Job Title</label
        >
        <input type="text" class="form-control" v-model="emp.jobTitle" />
      </div>
      <div>
        <button class="btn btn-success me-3">submit</button>
        <button class="btn btn-primary" @click="back">back</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addEmployeeApp",
  data() {
    return {
      emp: { name: "", gender: "", jobTitle: "" },
    };
  },
  methods: {
    addEmployee() {
      axios
        .post(" http://localhost:2000/employees", {
          name: this.emp.name,
          gender: this.emp.gender,
          job_title: this.emp.jobTitle,
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back() {
      this.$router.push("/emps");
    },
  },
};
</script>

<style scoped>
</style>