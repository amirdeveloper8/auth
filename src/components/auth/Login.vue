<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="phone">شماره تماس</label>
          <input
            class="form-control"
            type="number"
            id="phone"
            v-model.number="phone"
          />
        </div>
        <div class="input">
          <label for="password">رمزعبور</label>
          <input
            class="form-control"
            type="password"
            id="password"
            v-model="password"
          />
        </div>
        <div class="submit">
          <button type="submit">Submit</button>
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
    };
  },
  methods: {
    async onSubmit() {
      const response = await axios.post("login", {
        phone: this.phone,
        password: this.password,
      });
      localStorage.setItem("token", response.data.token);
      console.log(response);
      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.signin-form {
  width: 400px;
  margin: 30px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
  background: #3e3e3e;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: white;
  margin-bottom: 6px;
  text-align: center;
  font-weight: 700;
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
  text-align: left;
}

.input input:focus {
  outline: none;
  border: 1px solid #521751;
  background-color: transparent;
}

.input input:active {
  outline: none;
  border: 1px solid #521751;
  background-color: transparent;
}

.input input:valid {
  background: transparent;
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
</style>
