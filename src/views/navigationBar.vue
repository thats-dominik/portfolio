<template>
  <div>
    <nav>
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      <button class="menu-button" @click="toggleMenu">
        <img src="@/assets/images/menue.png" alt="Menu" class="menu-icon" />
      </button>
      <ul :class="{ 'menu-open': menuOpen }">
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
        <li><button class="cv-button" @click.prevent="openCV">cv</button></li>
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
      menuOpen: false,
    };
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      this.menuOpen = false; 
    },
    openCV() {
      window.open("http://atelier.thehams.name:9090/share.cgi?ssid=e4d185c54008486195f224747b501370", "_blank");
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
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
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
  max-width: 62rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #C3AC9F;
  padding: 1rem 2rem;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
}

.logo {
  height: 40px;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 35px;
  height: 35px;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem; 
  align-items: center;
  margin-right: 4rem;
  padding: 0;
  padding-left: 1rem;
}

nav ul.menu-open {
  margin-top: -0.2rem;
  display: flex;
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

/* Responsive design for smaller screens */
@media (max-width: 1000px) {
  .menu-button {
    display: block;
  }

  nav {
    width: 90%;
  }

  nav ul {
    display: none;
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: #C3AC9F;
    z-index: 999;
  }

  nav ul li {
    width: 100%;
    text-align: center;
    padding: 1rem 0;
  }

  nav ul.menu-open {
    display: flex;
  }
}
</style>
