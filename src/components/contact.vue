<template>
  <section class="contact">
    <h2>contact</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="first-name">first name</label>
        <input type="text" id="first-name" v-model="firstName" required />
      </div>
      <div class="form-group">
        <label for="last-name">last name</label>
        <input type="text" id="last-name" v-model="lastName" required />
      </div>
      <div class="form-group">
        <label for="phone">phone number</label>
        <input type="tel" id="phone" v-model="phone" required />
      </div>
      <div class="form-group">
        <label for="email">email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="message">message</label>
        <textarea id="message" v-model="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="submit-button">send</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',
  data() {
    return {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    };
  },
  methods: {
    submitForm() {
      // Handle form submission, e.g., send data to an API or email
      alert('Form submitted!');
    },
  },
};
</script>

<style scoped>
.contact {
  margin-top: -12rem;
  padding: 10rem 2rem;
  text-align: center;
  background-color: #C3AC9F;
  color: #c08b6d;
}

.contact h2 {
  color: #946c4b;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
}

form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  color: #946c4b;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 0.3rem;
  border: 1px solid #946c4b;
  font-size: 1.2rem;
  font-family: 'Raleway', sans-serif;
  color: #946c4b;
  background-color: #C3AC9F;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #ffffff;
}

.submit-button {
  font-family: Raleway;
  font-size: 1.2rem;
  background-color: transparent;
  border: 0.1rem solid #ffffff;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: 0.5s;
}

.submit-button:hover {
  background-color: #ffffff;
  color: #C3AC9F;
  transition: 0.5s;
}
</style>
