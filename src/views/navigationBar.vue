<template>
  <div>
    <nav>
      <img src="@/assets/logo.png" alt="Logo" class="logo" />
      <ul>
        <li><a href="#home" :class="{ active: activeSection === 'home' }">1. home</a></li>
        <li><a href="#about" :class="{ active: activeSection === 'about' }">2. about</a></li>
        <li><a href="#skills" :class="{ active: activeSection === 'skills' }">3. skills</a></li>
        <li><a href="#contact" :class="{ active: activeSection === 'contact' }">4. contact</a></li>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

nav a {
  text-decoration: none;
  color: #946c4b;
  font-weight: bold;
  padding-bottom: 0.5rem;
  position: relative;
}

nav a.active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: #946c4b;
}

.cv-button {
  background-color: transparent;
  border: 2px solid #946c4b;
  color: #946c4b;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.cv-button:hover {
  background-color: #946c4b;
  color: #ffffff;
}
</style>
