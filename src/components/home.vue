<template>
  <section class="home">
    <h3>hi, my name is</h3>
    <h1>dominik hämmerle</h1>
    <h2>i am an it-student at kbw.</h2>
    <p>
      currently studying at ims in winterthur, switzerland. enjoying
      frontend-programming and currently learning to code in the backend.
      looking forward to exploring more programming languages and frameworks
      in the future.
    </p>
    <a @click.prevent="scrollToAbout" class="read-more">read more</a>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
  methods: {
    scrollToAbout() {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 10rem;
  padding-left: 10rem;
  padding-right: 15rem;
  background-color: #C3AC9F;
  max-width: 61rem;
  margin: 0 auto 6rem auto;
}

.home h2 {
  color: #946c4b;
  font-size: 3rem;
  font-weight: 300;
  margin: 0.6rem;
}

.home h3 {
  color: #ffffff;
  font-size: 2.5rem;
  margin: 3rem 0.6rem 0.6rem 0.6rem;
}

.home h1 {
  color: #946c4b;
  font-size: 3rem;
  font-weight: bold;
  margin: 0.6rem;
}

.home p {
  font-weight: 300;
  color: #ffffff;
  font-size: 2rem;
  margin: 0.6rem 0.6rem 2rem 0.6rem;
  line-height: 2.6rem;
}

.read-more {
  text-decoration: none;
  font-family: Raleway;
  font-size: 1.2rem;
  background-color: transparent;
  border: 0.1rem solid #ffffff;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-left: 0.7rem;
  margin-right: 0.7rem;
  margin-top: 0.4rem;
  transition: 0.5s;
}

.read-more:hover {
  background-color: #ffffff;
  color: #C3AC9F;
  transition: 0.5s;
}

/* Responsive design for smaller screens */
@media (max-width: 1000px) {

  .home h3 {
    margin-top: 4rem;
  }
  .home {
    padding: 2rem;
  }
}
</style>
