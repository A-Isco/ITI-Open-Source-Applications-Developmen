<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <table
          class="
            table
            table-striped|sm|bordered|hover|inverse
            table-inverse
            table-responsive
            border 
            my-3
          "
        >
          <thead class="thead-inverse|thead-default">
            <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>{{ employee.name }}</td>
              <td>{{ employee.gender }}</td>
              <td>
                <router-link
                  :to="`/emps/${employee.id}`"
                  class="btn btn-success mx-1"
                  >Details</router-link
                >
                <button @click="deleteEmp(employee.id)" class="btn btn-danger mx-1">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <router-view></router-view>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "employeesListApp",
  data() {
    return {
      employees: [],
    };
  },
  created() {
    this.getAllEmployees();
  },
  methods: {
    async getAllEmployees() {
      await axios
        .get("http://localhost:2000/employees")
        .then((res) => {
          console.log(res.data);
          this.employees = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async deleteEmp(id) {
        await axios
        .delete("http://localhost:2000/employees/"+id)
        .then((res) => {
          console.log(res);
          this.getAllEmployees();
        })
        .catch((err) => {
          console.log(err)
        });
    }
  },
};
</script>

<style scoped>
</style>