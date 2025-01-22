document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  function startTypewriter() {
    const typewriter = new Typewriter(app, {
      loop: false,
      delay: 10,
    });

    typewriter
      .pauseFor(250)
      .typeString("<strong>About me</strong>")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("I'm a 17 year old student that has a passion for programming and creating cool things. ")
      .typeString("I'm currently learning Web Development and I'm always looking forwards to learn something new.")
      .typeString("<p id='largeSpacer'></p>")
      .pauseFor(750)
      .typeString("<strong>Where it all started</strong>")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("I discovered programming during my second year of Senior General Secondary Education. ")
      .typeString("An friend of my wanted to start a minecraft server ")
      .typeString("and i tought it was a cool idea, so i started trying to help him. ")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("Back then i was learn a little bit about coding but not that much. ")
      .typeString("I was trying but it would just not work, but around that time i made the decision to apply for education in web development.")
      .typeString("<p id='largeSpacer'></p>")
      .pauseFor(750)
      .typeString("<strong>Skills</strong>")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("I'm currently learning Web Development and I'm learning a lot of new things. I'm learning HTML, CSS, JavaScript, PHP and SQL.")
      .typeString("<p id='mediumSpacer'></p>")
      .typeString("On the side I'm teaching myself to comprehend JavaScript better and use it a lot more effectively.")
      .pauseFor(750)
      .typeString("<p id='largeSpacer'></p>")
      .typeString("<strong>Awards</strong>")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("I've competed in a couple of competitions and I'm always looking to compete in new ones. Below you can see the competitions I've participated in and my placements:")
      .typeString("<p id='mediumSpacer'></p>")
      .pauseFor(750)
      .typeString("<p id='largeSpacer'></p>")
      .typeString("<h5>Digital proof hackathon December 2024</h5>")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("First place challenge A")
      .typeString("<p id='mediumSpacer'></p>")
      .pauseFor(250)
      .typeString("<p id='largeSpacer'></p>")
      .typeString("<h5>Digital proof hackathon May 2024</h5>")
      .typeString("<p id='smallSpacer'></p>")
      .typeString("Second place challenge B")
      .start();
  }

  // Gebruik Intersection Observer om animatie te starten
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startTypewriter();
          observer.unobserve(app); // Stop observer na starten animatie
        }
      });
    },
    { threshold: 0.2 } // Start als minstens 50% zichtbaar is
  );

  observer.observe(app);
});
