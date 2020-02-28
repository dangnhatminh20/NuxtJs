<template>
  <div class="login_area">
    <div class="container-fluid row">
      <div class="image_area col-6"></div>
      <div class="form_area col-6">
        <div>
          <b-tabs content-class="mt-3">
            <b-tab title="Login" active>
              <LabeledInput :label="'Username'" :id="'username'" :onTextChange="onUserChange"/>
              <LabeledInput :label="'Password'" :id="'password'" :onTextChange="onPasswordChange"/>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
              </div>
              <!-- <Button :nameButton="'Login'"/> -->
              <button @click="doSubmit" type="btn" class="btn btn-primary pl-3">
                Login
              </button>
              <button type="submit" class="btn btn-danger pl-3">
                <nuxtLink to="/auth/register">Register</nuxtLink>
              </button>
            </b-tab>
            <b-tab title="Register">
              <LabeledInput :label="'Username'" :id="'username'"/>
              <LabeledInput :label="'Email address'" :id="'emailAddress'"/>
              <LabeledInput :label="'Password'" :id="'password'"/>
              <LabeledInput :label="'Confirm Password'" :id="'comfirmPassword'"/>
              <button type="submit" class="btn btn-primary">Register</button>
            </b-tab>
          </b-tabs>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LabeledInput from "~/components/commoms/LabeledInput.vue";
import Button from "~/components/commoms/Button.vue";
import {mapActions} from "vuex";

export default {
  name: "Login_Auth_Pages",
  components: {
      LabeledInput,
      Button
  },
  data() {
    return {
      username: null,
      password: null 
    }
  },
  methods: {
    ...mapActions({
      "login" : "auth/login" //Tim action ben trong auth de login
    }),
    doSubmit(){
      this.login({
        "username": this.username,
        "password": this.password
      });
    },
    onUserChange(username){
      this.username= username;
    },
    onPasswordChange(password){
      this.password= password;
    }
  }
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