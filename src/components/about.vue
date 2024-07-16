<template>
  <section id="about" class="about">
    <h2>about me</h2>
    <h3>it & school</h3>
    <p>
      currently, i'm studying at <strong>kantonsschule büelrain</strong>, where i'm mostly focused on economics and law. At <strong>berufsschule winterthur (bbw)</strong> and <strong>zli</strong>, i'm diving into various it topics like networking, java, and different frameworks, alongside management skills and <strong>many more</strong>.
    </p>
    <p>
      outside of school, i'm all about personal projects, especially <strong>web development</strong>. i love <strong>designing</strong> websites, especially the frontend part.
    </p>
    <p>
      i'm always eager to learn and explore new things in the it world, constantly striving to <strong>improve</strong> my skills.
    </p>

    <h3>private life</h3>
    <p>
      when it comes to myself, i enjoy <strong>hiking</strong>, particularly during spring and summer seasons. nature holds a special place in my heart. additionally, i have an interest in <strong>photography</strong> and often carry my <strong>camera</strong> with me to capture various scenes, including landscapes, night skies, and moments with friends.
    </p>
    <p>
      staying active is important to me, so i regularly go to the <strong>gym</strong> and occasionally go jogging. i've also been practicing <strong>karate</strong> for nearly <strong>14 years</strong>, attending weekly training sessions.
    </p>
    <p>
      as a person, i'm naturally curious and enjoy learning new things. <strong>communication</strong> is one of my strengths; i find it easy to engage in <strong>conversations</strong> with people, including strangers. i'm comfortable working both <strong>independently</strong> and in group settings. <strong>flexibility</strong> is a trait i value; i can quickly <strong>adjust</strong> my schedule to accommodate new tasks or opportunities.
    </p>
    <p>
      if you'd like to check out some of my photos, feel free to click on the following <strong>social media</strong> accounts of mine:
    </p>
      <div class="social-media-item vsco">
        <a id="link-vsco" target="_blank" href="https://vsco.co/dominik-kazar/gallery">
        <img src="@/assets/images/vsco.png" alt="VSCO icon" class="social-icon vsco" />
        </a>
        <p>
          on <strong>vsco</strong>, i share a variety of images that i personally find appealing. what i appreciate about <strong>vsco</strong> is the minimalistic layout of my profile and the fact that all images are perfectly sized.
        </p>
      </div>
      <br>
      <div class="social-media-item pinterest">
        <p>
          on <strong>pinterest</strong>, i've organized all my images a bit, categorizing them by specific events, outings, or even seasons and years. this way, i have a clear overview of when everything happened.
        </p>
        <a id="link-pinterest" target="_blank" href="https://www.pinterest.de/daedoeme/">
          <img src="@/assets/images/pinterest.png" alt="Pinterest icon" class="social-icon pinterest" />
        </a>
      </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
};
</script>

<style scoped>
.about {
  padding-top: 10rem;
  padding-left: 10rem;
  padding-right: 15rem;
  background-color: #C3AC9F;
  max-width: 61rem;
  margin: auto; /* Center the section */
}

.about h2 {
  color: #946c4b;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0.6rem 0.6rem 1rem 0.6rem;
}

.about h3 {
  font-weight: 500;
  color: #946c4b;
  font-size: 2.5rem;
  margin: 2rem 0.6rem 1rem 0.6rem;
}

.about p {
  font-weight: 300;
  color: #ffffff;
  font-size: 2rem;
  line-height: 2.6rem;
  margin: 0.6rem 1rem 0.6rem 0.6rem;
}

strong {
  font-weight: bold;
}

.social-media-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.social-media-item {
  display: flex;
  align-items: center;
}

.social-media-item.vsco {
  margin-top: 1.5rem;
  grid-column: 1 / 2;
}

.social-media-item.pinterest {
  margin-top: -1rem;
  grid-column: 4 / 5;
  justify-content: flex-end;
}

.social-icon {
  width: 12.5rem;
  height: 12.5rem;
  margin-right: 1rem;
}

.social-media-item.pinterest .social-icon {
  margin-left: 1rem;
  margin-right: 0;
}
.social-icon.vsco {
  margin-top: 0.5rem;
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.social-icon.pinterest {
  animation: swing 4s linear infinite;
}

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(10deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

#link-pinterest {
  margin-left: -2rem;
}

/* Responsive design for smaller screens */
@media (max-width: 1000px) {
  .about {
    padding: 2rem;
  }

  .social-media-item {
    flex-direction: column;
    text-align: center;
  }

  .social-media-item p,
  .social-media-item img {
    text-align: center;
    margin: 0 auto;
  }

  .social-media-item img {
    margin: 1rem 0;
  }
}
</style>
