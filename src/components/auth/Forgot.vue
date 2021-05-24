<template>
  <div class="form">
    <div v-if="message" class="alert alert-success">
      {{ message }}
    </div>
    <error v-if="error" :error="error" />
    <form @submit.prevent="handleSubmit">
      <div class="input">
        <label for="phone">شماره تماس</label>
        <input type="text" class="form-control" />
      </div>

      <div class="submit">
        <button type="submit">تایید</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Error from "./Error.vue";
export default {
  components: { Error },
  data() {
    return {
      phone: "",
      message: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post("forgot", {
          phone: this.phone,
        });
        console.log(response);
        this.message = "ارسال شد";
      } catch (e) {
        this.error = "شماره تماس اشتباه";
      }
    },
  },
};
</script>

<style scoped>
.form {
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

.submit {
  text-align: right;
}

.submit button {
  border: 1px solid #521751;
  color: #521751;
  padding: 7px 26px;
  font: inherit;
  cursor: pointer;
  width: 100%;
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
