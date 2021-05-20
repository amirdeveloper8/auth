<template>
  <div id="signup">
    <div class="signup-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="phone">شماره تماس</label>
          <input
            type="number"
            id="phone"
            v-model.number="phone"
            @blur="validateUser"
          />
          <p class="error text-right py-2" v-if="userVal === 'invalid'">
            شماره تماس خود را وارد کنید
          </p>
        </div>
        <div class="input">
          <label for="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            v-model="password"
            @blur="validatePass"
          />
          <p class="error text-right py-2" v-if="passVal === 'invalid'">
            رمز عبور خود را وارد کنید
          </p>
        </div>
        <div class="input">
          <label for="confirm-password">تایید رمز عبور</label>
          <input
            type="password"
            id="confirm-password"
            v-model="password_confirmation"
            @blur="validateConfPass"
          />
          <div
            class="d-flex justify-content-start align-items-center py-2"
            style="direction:rtl"
          >
            <i
              v-if="
                password === password_confirmation &&
                  password_confirmation !== ''
              "
              class="far fa-check-circle"
            ></i>
            <i
              v-if="password !== password_confirmation"
              class="far fa-times-circle"
            ></i>
            <p
              class="error text-right m-0 px-2"
              v-if="confPassVal === 'invalid'"
            >
              رمز عبور خود را تایید کنید
            </p>
          </div>
        </div>
        <div class="input inline">
          <label for="terms" class="px-2">با قوانین موافقم</label>
          <input type="checkbox" id="terms" v-model="terms" />
        </div>
        <div class="submit">
          <button type="submit" :disabled="!terms">ثبت</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      password: "",
      password_confirmation: "",
      type: "4",
      terms: false,
      userVal: "",
      passVal: "",
      confPassVal: "",
    };
  },
  methods: {
    async onSubmit() {
      const response = await axios.post("register", {
        type: this.type,
        phone: this.phone,
        password: this.password,
        password_confirmation: this.password_confirmation,
      });
      console.log(response);
      this.$router.push("/login");
    },
    validateUser() {
      if (this.phone === "") {
        this.userVal = "invalid";
      } else {
        this.userVal = "valid";
      }
    },
    validatePass() {
      if (this.password === "") {
        this.passVal = "invalid";
      } else {
        this.passVal = "valid";
      }
    },
    validateConfPass() {
      if (this.password_confirmation === "") {
        this.confPassVal = "invalid";
      } else {
        this.confPassVal = "valid";
      }
    },
  },
  created() {
    console.log("form", this.terms);
  },
};
</script>

<style scoped>
* {
  text-align: right;
}

textarea {
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: white;
}

.signup-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  background: #3e3e3e;
}

.input {
  margin: 10px auto;
  position: relative;
}

.input label {
  display: block;
  margin-bottom: 6px;
  text-align: center;
  color: white;
  font-weight: 700;
}

.input.inline label {
  display: inline;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  background: transparent;
  color: white;
}

.input.inline input {
  width: auto;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: transparent;
}

.input input:active {
  background: transparent;
}

#phone {
  text-align: left;
}

.input select {
  border: 1px solid #ccc;
  font: inherit;
}

.hobbies button {
  border: 1px solid #521751;
  background: #521751;
  color: white;
  padding: 6px;
  font: inherit;
  cursor: pointer;
}

.hobbies button:hover,
.hobbies button:active {
  background-color: #8d4288;
}

.hobbies input {
  width: 90%;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 10px 20px;
  font: inherit;
  cursor: pointer;
}

.submit button:hover,
.submit button:active {
  background-color: #521751;
  color: white;
}

.submit button[disabled],
.submit button[disabled]:hover,
.submit button[disabled]:active {
  border: 1px solid #ccc;
  background-color: transparent;
  color: #ccc;
  cursor: not-allowed;
}

.error {
  color: red;
  font-size: 14px;
}

.fa-times-circle {
  color: red;
}

.fa-check-circle {
  color: green;
}

.far {
  position: absolute;
  top: 42px;
  left: 10px;
}
</style>
