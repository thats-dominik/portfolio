<template>
  <section class="skills">
    <h2>skills</h2>
    <h3>completed modules</h3>
    <p>module 117 - implementing computer & network infrastructure</p>
    <p>module 162 - analyzing and modeling data</p>
    <p>module 231 - applying data protection & cybersecurity</p>
    <p>module 319 - designing and implementing applications</p>
    <p>module 114 - encoding, compression & encryption techniques</p>
    <p>module 164 - creating databases and inserting data</p>
    <p>module 294 - creating and publishing websites</p>
    <p>module 431 - independently executing it-related tasks</p>
    <p>module 165 - implementing nosql-databases</p>
    <p>module 320 - object-oriented programming</p>
    <p>module 322 - designing and implementing user interfaces</p>
    <p>module 183 - designing and implementing cloud solutions</p>

    <h3>languages & frameworks</h3>
    <div class="languages-frameworks">
      <div class="languages-frameworks-item left-icon">
        <img src="@/assets/images/java-icon.png" alt="Java Icon" class="icon" />
        <p><strong>java</strong> is our main programming language, and we frequently rely on it; we have extensive experience working with <strong>java</strong>.</p>
      </div>
      <div class="languages-frameworks-item right-icon">
        <p>we still regularly and extensively work with <strong>react</strong>, and we have been using it for quite some time. i also personally engage with <strong>react</strong> from time to time.</p>
        <img src="@/assets/images/react-icon.png" alt="React Icon" class="icon" />
      </div>
      <div class="languages-frameworks-item left-icon">
        <img src="@/assets/images/html-css-icon.png" alt="HTML & CSS Icon" class="icon" />
        <p><strong>html and css</strong> are my two favorites, as i am most proficient in them and enjoy working in the frontend. i find them relatively straightforward, and i quickly grasp <strong>html</strong> codes.</p>
      </div>
      <div class="languages-frameworks-item right-icon">
        <p>also, i have good experience with <strong>js</strong>; after all, it complements <strong>html & css</strong> and i’ve had to work extensively with <strong>js</strong>. additionally, we’ve had a course focused on <strong>js</strong>.</p>
        <img src="@/assets/images/js-icon.png" alt="JavaScript Icon" class="icon" />
      </div>
      <div class="languages-frameworks-item left-icon">
        <img src="@/assets/images/mysql-icon.png" alt="MySQL Icon" class="icon" />
        <p>working with <strong>mysql</strong> in a course was a great experience, and i found it enjoyable. learning <strong>mysql</strong> came relatively easily to me, und i’m eager to do more with <strong>mysql</strong> and improve my skills in it.</p>
      </div>
    </div>

    <h3>expertise tools</h3>
    <div class="expertise-tools">
      <div class="expertise-tools-item right-icon">
        <p>i frequently use <strong>adobe illustrator</strong> because I enjoy designing various graphics. I also work with other <strong>adobe</strong>-applications simultaneously to enhance my designs.</p>
        <img src="@/assets/images/illustrator-icon.png" alt="Adobe Illustrator Icon" class="icon" />
      </div>
      <div class="expertise-tools-item left-icon">
        <img src="@/assets/images/photoshop-icon.png" alt="Adobe Photoshop Icon" class="icon" />
        <p>the same goes for <strong>adobe photoshop</strong>. I enjoy photo editing, enhancing images, and bringing creative ideas to life, which helps refine my skills and produce visually appealing content.</p>
      </div>
      <div class="expertise-tools-item right-icon">
        <p>also i use <strong>adobe lightroom</strong> for enhancing pictures and <strong>adobe after effects</strong> for video effects. exploring various other apps helps me continuously improve and expand my creative skills.</p>
        <img src="@/assets/images/creative-cloud-icon.png" alt="Adobe Creative Cloud Icon" class="icon" />
      </div>
      <div class="expertise-tools-item left-icon">
        <img src="@/assets/images/365-icon.png" alt="Microsoft 365 Icon" class="icon" />
        <p>i regularly use <strong>microsoft 365 (word, excel, powerpoint)</strong>. i have good knowledge of using these applications correctly, helping me manage documents, data, and presentations efficiently.</p>
      </div>
      <div class="expertise-tools-item right-icon">
        <p>i work with <strong>visual studio code</strong> and love the many extensions it offers. I enjoy using it for its flexibility and extensive features.</p>
        <img src="@/assets/images/vsc-icon.png" alt="Visual Studio Code Icon" class="icon" />
      </div>
      <div class="expertise-tools-item left-icon">
        <img src="@/assets/images/postman-icon.png" alt="Postman Icon" class="icon" />
        <p>i like using <strong>postman</strong> for api requests and testing. It simplifies debugging and enhances my workflow with its powerful features for api development.</p>
      </div>
      <div class="expertise-tools-item right-icon">
        <p>i’ve worked a lot with <strong>docker</strong>, especially in school, where we used it extensively to containerize our projects.</p>
        <img src="@/assets/images/docker-icon.png" alt="Docker Icon" class="icon" />
      </div>
      <div class="expertise-tools-item left-icon">
        <img src="@/assets/images/figma-icon.png" alt="Figma Icon" class="icon" />
        <p>i prefer using <strong>figma</strong> to create wireframes for my websites. It’s easy to use, versatile, and a high-quality app that allows me to design efficiently and effectively.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SkillsSection',
};
</script>

<style scoped>
.skills {
  padding-top: 5rem;
  padding-left: 10rem;
  padding-right: 15rem;
  background-color: #C3AC9F;
  max-width: 61rem;
  margin: auto; /* Center the section */
}

.skills h2 {
  color: #946c4b;
  font-size: 3.5rem;
  font-weight: 900;
  margin: 0.6rem 0.6rem 1rem 0.6rem;
  text-align: left;
}

.skills h3 {
  font-weight: 500;
  color: #946c4b;
  font-size: 2.5rem;
  margin: 2rem 0.6rem 1rem 0.6rem;
  text-align: left;
}

.skills p {
  font-weight: 300;
  color: #ffffff;
  font-size: 2rem;
  line-height: 2.6rem;
  margin: 0.6rem 1rem 0.6rem 0.6rem;
  text-align: left;
}

strong {
  font-weight: bold;
}

.languages-frameworks,
.expertise-tools {
  margin-top: 2rem;
}

.languages-frameworks-item,
.expertise-tools-item {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.languages-frameworks-item.left-icon img,
.expertise-tools-item.left-icon img {
  order: -1; /* Position image first */
  margin-right: 1rem;
}

.languages-frameworks-item.right-icon img,
.expertise-tools-item.right-icon img {
  margin-left: 1rem;
}

.languages-frameworks-item p,
.expertise-tools-item p {
  flex: 1 1 90%; 
}

.languages-frameworks-item img,
.expertise-tools-item img {
  flex: 1 1 10%; 
  width: 12.5rem;
  height: 12.5rem;
  object-fit: contain; 
}

.languages-frameworks-item:nth-child(even) p,
.expertise-tools-item:nth-child(even) p {
  text-align: right;
}

/* Responsive design for smaller screens */
@media (max-width: 1000px) {
  .skills {
    padding: 2rem;
  }

  .languages-frameworks-item,
  .expertise-tools-item {
    flex-direction: column;
    text-align: center;
  }

  .languages-frameworks-item p,
  .expertise-tools-item p,
  .languages-frameworks-item img,
  .expertise-tools-item img {
    text-align: center !important;
    margin: 0 0 1rem 0 !important;
  }

  .languages-frameworks-item img,
  .expertise-tools-item img {
    margin: 1rem 0;
  }
}
</style>
