<template>
  <div class="login_area">
    <div class="container-fluid row">
      <div class="image_area col-6"></div>
      <div class="form_area col-6">
        <div>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="username" class="form-control" id="username" />
          </div>
          <div class="form-group">
            <label for="email">Email address:</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" />
          </div>
          <div class="form-group">
            <label for="pwd">Confirm Password:</label>
            <input type="password" class="form-control" id="cpwd" />
          </div>
          <button type="submit" class="btn btn-danger pl-3">Register</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Register_Auth_Pages"
};
</script>

<style>
.login_area {
  box-sizing: border-box;
}
.image_area {
  background-color: aquamarine;
  height: 100vh;
}
.form_area {
  padding: 100px 20px 0 40px;
}
</style>