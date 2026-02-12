gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".light",
    start: "top top", // quando o topo da seção encontrar o topo da viewport
     end: () => "+=" + window.innerHeight * 1.8, // 2.5 telas
    scrub: false, // animação suave
    pin: true, // fixa a seção na tela
    markers: false, // só pra debug, pode remover
  },
});
// TIMELINE 1: animação inicial
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".esq",
      start: "top -10%",
      end: "top -40%",
      scrub: 2,
      markers: false,
    },
  })

  .to(".esq", {
    "--ang1": "0.6533002853393555deg",
    "--ang2": "98.71472239494324deg",
    "--ang3": "359.94815826416016deg",
  })
  .to(
    ".dir",
    {
      "--ang1": "0.6533002853393555deg",
      "--ang2": "98.71472239494324deg",
      "--ang3": "359.94815826416016deg",
    },
    0,
  ); // 0 para sincronizar com .esq

// TIMELINE 2: animação seguinte
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".esq",
      start: "top -160%",
      end: "top -230%",
      scrub: 2,
      markers: false,
    },
  })
  .to(".esq", {
    " --ang1": "0.6532950466498733deg;",
    "--ang2": "359.73379611968994deg",
    " --ang3": "359.79896306991577deg",
  })
  .to(
    ".dir",
    {
      "--ang1": "0.6532950466498733deg",
      "--ang2": "359.73379611968994deg",
      "--ang3": "359.79896306991577deg",
    },
    0,
  ); // sincronizado

gsap.to("li", {
  color: "#000000",
  scrollTrigger: {
    trigger: ".esq",
    start: "top -20%",
    end: "top -22%",
    scrub: true,
    markers: false,
  },
});

gsap.to("li", {
  color: "#ffffffe6",
  scrollTrigger: {
    trigger: ".esq",
    start: "top -200%",
    end: "top -220%",
    scrub: true,
    markers: false,
  },
});

gsap.from(".titulo, .subtitle", {
  opacity: 0,
  y: 50,
  filter: "blur(5px)",
  duration: 1,
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".esq",
    start: "top -50%",
    end: "top -70%",
    scrub: 2,
    markers: false,
  },
});

gsap.to(".textos", {
  opacity: 0,
  y: 50,
  filter: "blur(5px)",
  scrollTrigger: {
    trigger: ".esq",
    start: "top -170%",
    end: "top -230%",
    scrub: 2,
    markers: false,
  },
});
