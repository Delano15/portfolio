document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  function startTypewriter() {
    const typewriter = new Typewriter(app, {
      loop: false,
      delay: 10,
    });

    // Store the content in an array
    const textArray = [
      "<strong>About Me</strong>",
      "<p id='smallSpacer'></p>",
      "I'm a 17-year-old student with a passion for programming and creating cool things. ",
      "I'm currently learning web development and always looking forward to learning something new. ",
      "<p id='largeSpacer'></p>",
      "<strong>Where It All Started</strong>",
      "<p id='smallSpacer'></p>",
      "I discovered programming during my second year of Senior General Secondary Education. ",
      "A friend of mine wanted to start a Minecraft server, ",
      "and I thought it was a cool idea, so I tried to help him. ",
      "<p id='smallSpacer'></p>",
      "Back then, I was learning a little bit about coding but not much. ",
      "I was trying, but it just wouldn't work. Around that time, I decided to apply for a web development program. ",
      "<p id='largeSpacer'></p>",
      "<strong>Skills</strong>",
      "<p id='smallSpacer'></p>",
      "I'm currently learning web development and gaining a lot of new skills. I'm learning HTML, CSS, JavaScript, PHP, and SQL. ",
      "<p id='mediumSpacer'></p>",
      "On the side, I'm teaching myself to better understand JavaScript and use it more effectively. ",
      "<p id='largeSpacer'></p>",
      "<strong>Awards</strong>",
      "<p id='smallSpacer'></p>",
      "I've competed in several competitions and I'm always looking for new ones. Below are the competitions I've participated in and my placements: ",
      "<p id='mediumSpacer'></p>",
      "<p id='largeSpacer'></p>",
      "<h5>Digital Proof Hackathon - December 2024</h5>",
      "<p id='smallSpacer'></p>",
      "First place - Challenge A",
      "<p id='mediumSpacer'></p>",
      "<p id='largeSpacer'></p>",
      "<h5>Digital Proof Hackathon - May 2024</h5>",
      "<p id='smallSpacer'></p>",
      "Second place - Challenge B",
    ];

    // Loop through the array and add text dynamically
    typewriter.pauseFor(250);
    textArray.forEach((text, index) => {
      typewriter.typeString(text);
      if (index === 4 || index === 12 || index === 18 || index === 22) {
        typewriter.pauseFor(750); // Pause at key sections
      }
    });

    typewriter.start();
  }

  // Use Intersection Observer to start animation when visible
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypewriter();
          observer.unobserve(app); // Stop observer after animation starts
        }
      });
    },
    { threshold: 0.2 } // Start when at least 20% is visible
  );

  observer.observe(app);
});
