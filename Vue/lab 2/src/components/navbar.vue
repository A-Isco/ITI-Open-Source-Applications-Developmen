<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item" :class="navItem">
              <router-link to="/emps" class="nav-link active">
                Employees</router-link
              >
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            </li>
            <li class="nav-item" :class="navItem">
              <router-link to="/addemployee" class="nav-link"
                >Add Employee</router-link
              >
              <!-- <a class="nav-link" href="#">Link</a> -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
        name:'navB-arApp',
        data(){
            return{
                navItem: 'navItem',
            }
        }
    }
</script>

<style scoped>
.navItem{
    cursor: pointer;
}
</style>