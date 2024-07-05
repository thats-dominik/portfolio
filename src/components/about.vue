<template>
  <section id="about" class="about">
    <h2>about me</h2>
    <h3>it & school</h3>
    <p>
      currently, I'm studying at <strong>kantonsschule büelrain</strong>, where I'm mostly focused on economics and law. At <strong>berufsschule winterthur (bbw)</strong> and <strong>zli</strong>, I'm diving into various it topics like networking, java, and different frameworks, alongside management skills and <strong>many more</strong>.
    </p>
    <p>
      outside of school, I'm all about personal projects, especially <strong>web development</strong>. I love <strong>designing</strong> websites, especially the frontend part.
    </p>
    <p>
      I'm always eager to learn and explore new things in the it world, constantly striving to <strong>improve</strong> my skills.
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
      If you'd like to check out some of my photos, feel free to click on the following <strong>social media</strong> accounts of mine:
    </p>
      <div class="social-media-item vsco">
        <img src="@/assets/images/vsco.png" alt="VSCO Icon" class="social-icon" />
        <p>
          on <strong>vsco</strong>, I share a variety of images that I personally find appealing. what I appreciate about <strong>vsco</strong> is the minimalistic layout of my profile and the fact that all images are perfectly sized.
        </p>
      </div>
      <br>
      <div class="social-media-item pinterest">
        <p>
          on <strong>pinterest</strong>, i've organized all my images a bit, categorizing them by specific events, outings, or even seasons and years. this way, i have a clear overview of when everything happened.
        </p>
        <img src="@/assets/images/pinterest.png" alt="Pinterest Icon" class="social-icon" />
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
  grid-column: 1 / 2;
}

.social-media-item.pinterest {
  grid-column: 2 / 3;
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
</style>
