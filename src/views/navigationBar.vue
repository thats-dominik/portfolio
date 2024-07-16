<template>
  <div>
    <nav>
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      <ul>
        <li>
          <span>1.</span>
          <a @click.prevent="scrollToSection('home')" :class="{ active: activeSection === 'home' }">home</a>
        </li>
        <li>
          <span>2.</span>
          <a @click.prevent="scrollToSection('about')" :class="{ active: activeSection === 'about' }">about</a>
        </li>
        <li>
          <span>3.</span>
          <a @click.prevent="scrollToSection('skills')" :class="{ active: activeSection === 'skills' }">skills</a>
        </li>
        <li>
          <span>4.</span>
          <a @click.prevent="scrollToSection('contact')" :class="{ active: activeSection === 'contact' }">contact</a>
        </li>
        <li><button class="cv-button">cv</button></li>
      </ul>
    </nav>
    <HomeSection id="home" />
    <AboutSection id="about" />
    <SkillsSection id="skills" />
    <ContactSection id="contact" />
  </div>
</template>

<script>
import HomeSection from '../components/home.vue';
import AboutSection from '../components/about.vue';
import SkillsSection from '../components/skills.vue';
import ContactSection from '../components/contact.vue';

export default {
  name: 'navigationBar',
  components: {
    HomeSection,
    AboutSection,
    SkillsSection,
    ContactSection,
  },
  data() {
    return {
      activeSection: 'home',
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    },
    onScroll() {
      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 60;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute('id');
        }
      });
      this.activeSection = currentSection;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  background-color: #C3AC9F;
  font-family: 'Raleway', sans-serif;
}

nav {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #C3AC9F;
  padding: 1rem 2rem;
  z-index: 1000;
}

.logo {
  height: 40px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-right: 4rem;
  padding: 0;
}

nav ul li {
  display: flex;
  align-items: center;
}

nav span {
  font-weight: 400;
  font-size: 1.3rem;
  text-decoration: none;
  color: #ffffff;
  padding-bottom: 0.5rem;
  position: relative;
  margin-right: 0.3rem;
}

nav a {
  font-weight: 400;
  font-size: 1.3rem;
  text-decoration: none;
  color: #946c4b;
  padding-bottom: 0.5rem;
  position: relative;
}

nav a.active::after {
  content: '';
  margin-bottom: 0.3rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: #946c4b;
}

.cv-button {
  font-family: Raleway;
  font-size: 1.2rem;
  background-color: transparent;
  border: 0.1rem solid #ffffff;
  border-radius: 0.3rem;
  color: #ffffff;
  padding: 0.2rem 1rem;
  cursor: pointer;
  margin-left: 0.3rem;
  margin-right: 0.7rem;
  margin-top: -0.5rem;
  transition: 0.5s;
}

.cv-button:hover {
  background-color: #ffffff;
  color: #C3AC9F;
  transition: 0.5s;
}
</style>
