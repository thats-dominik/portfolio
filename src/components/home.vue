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
    <button class="read-more">read more</button>
  </section>
</template>

<script>
export default {
  name: 'HomeSection',
};
</script>

<style>
.home {
  padding-top: 10rem;
  padding-left: 10rem;
  padding-right: 15rem;
  background-color: #C3AC9F;
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
  margin: 0.6rem;

}

.home h1 {
  color: #946c4b;
  font-size: 3rem;
  font-weight: bold;
  margin: 0.6rem;

}

.home p {
  color: #ffffff;
  font-size: 2rem;
  margin: 0.6rem;

}

.read-more {
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
}

.read-more:hover {
  background-color: #ffffff;
  color: #946c4b;
}
</style>
