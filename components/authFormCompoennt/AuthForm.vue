
/**
 * Vue.js component for user authentication (login/register) form.
 * 
 * This component provides a form for user login or registration, including input validation for email, password, and confirm password fields.
 * It allows users to switch between login and registration forms and handles form submission.
 * 
 * **Features:**
 * - Input fields for email, password, and (optionally) confirm password.
 * - Validation for email format, password length, and password match.
 * - Switch between login and registration modes.
 * - Display of error messages for invalid input.
 * 
 * **Usage:**
 * To use this component, include it in your Vue application and mount it to a DOM element.
 * /


<template>
  <div class="auth-form">
    <h2>{{ isLogin ? "Login" : "Register" }}</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" v-model="email" @blur="validateEmail" />
        <span v-if="emailError">{{ emailError }}</span>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" @blur="validatePassword" />
        <span v-if="passwordError">{{ passwordError }}</span>
      </div>
      <div v-if="!isLogin" class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          v-model="confirmPassword"
          @blur="validateConfirmPassword"
        />
        <span v-if="confirmPasswordError">{{ confirmPasswordError }}</span>
      </div>
      <button type="submit">{{ isLogin ? "Login" : "Register" }}</button>
    </form>
    <button @click="toggleForm">
      {{ isLogin ? "Switch to Register" : "Switch to Login" }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      email: "",
      password: "",
      confirmPassword: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    };
  },
  methods: {
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = "Invalid email address";
      } else {
        this.emailError = "";
      }
    },
    validatePassword() {
      if (this.password.length < 6) {
        this.passwordError = "Password must be at least 6 characters long";
      } else {
        this.passwordError = "";
      }
    },
    validateConfirmPassword() {
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = "Passwords do not match";
      } else {
        this.confirmPasswordError = "";
      }
    },
    handleSubmit() {
      this.validateEmail();
      this.validatePassword();
      if (!this.isLogin) {
        this.validateConfirmPassword();
      }
      if (
        !this.emailError &&
        !this.passwordError &&
        (this.isLogin || !this.confirmPasswordError)
      ) {
        // Process form submission (e.g., send data to API)
        console.log("Form submitted:", {
          email: this.email,
          password: this.password,
        });
      }
    },
    toggleForm() {
      this.isLogin = !this.isLogin;
      this.email = "";
      this.password = "";
      this.confirmPassword = "";
      this.emailError = "";
      this.passwordError = "";
      this.confirmPasswordError = "";
    },
  },
};
</script>

<style scoped>
.auth-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.form-group span {
  color: red;
  font-size: 0.875em;
}
button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
