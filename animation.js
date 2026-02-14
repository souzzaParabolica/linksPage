gsap.registerPlugin(ScrollTrigger);

const heroTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".light",
    start: "top top", // quando o topo da seção encontrar o topo da viewport
    end: () => "+=" + window.innerHeight * 0.9, // 2.5 telas
    scrub: false, // animação suave
    pin: true, // fixa a seção na tela
    markers: false, // só pra debug, pode remover
  },
});

// let container = document.querySelector(".horizontal-container");
// let track = document.querySelector(".linksPai");

// let scrollAmount = track.scrollWidth - container.offsetWidth;

// gsap.to(track, {
//   x: -scrollAmount,
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".sobreMim",
//     start: "top top",
//     end: () => "+=" + scrollAmount,
//     scrub: 1.5,
//     pin: true,
//     anticipatePin: 1,
//     invalidateOnRefresh: true,
//   },
// });
let mm = gsap.matchMedia();
mm.add("(min-width: 1280px)", () => {
  const container = document.querySelector(".horizontal-container");
  const track = document.querySelector(".linksPai");

  const scrollAmount = track.scrollWidth - container.offsetWidth;

  const tl = gsap.to(track, {
    x: -scrollAmount,
    ease: "none",
    scrollTrigger: {
      trigger: ".sobreMim",
      start: "top top",
      end: () => "+=" + scrollAmount,
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  return () => {
    tl.scrollTrigger.kill();
    tl.kill();
  };
});
// TIMELINE 1: animação inicial
mm.add("(min-width: 1367px) and (max-width: 1930px)", () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
  });

  // LOGO
  tl.fromTo(
    "header img",
    {
      opacity: 0,
      y: -20,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
    },
  )

    // NAV LI - sequencial
    .fromTo(
      "header nav li",
      {
        opacity: 0,
        y: -15,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.15,
        clearProps: "transform,filter",
      },
      "-=0.4",
    )
    .fromTo(
      ".button-anim-wrapper",
      {
        opacity: 0,
        y: -20,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        clearProps: "transform,filter",
      },
      "-=0.3",
    );

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
        start: "top -100%",
        end: "top -190%",
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

  gsap.from(".projetosTitulo", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: ".horizontal-container",
      start: "top 55%",
      markers: false,
    },
  });

  gsap.from(".horizontal-container", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: ".horizontal-container",
      start: "top 50%",
      markers: false,
    },
  });
});

// TRANSIÇÃO DE MATCHMEDIA

mm.add("(min-width: 769px) and (max-width: 1366px)", () => {
  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
    },
  });

  // LOGO
  tl.fromTo(
    "header img",
    {
      opacity: 0,
      y: -20,
      filter: "blur(6px)",
    },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
    },
  )

    // NAV LI - sequencial
    .fromTo(
      "header nav li",
      {
        opacity: 0,
        y: -15,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.6,
        stagger: 0.15,
        clearProps: "transform,filter",
      },
      "-=0.4",
    )
    .fromTo(
      ".button-anim-wrapper",
      {
        opacity: 0,
        y: -20,
        filter: "blur(6px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.7,
        clearProps: "transform,filter",
      },
      "-=0.3",
    );
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
        start: "top -120%",
        end: "top -290%",
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

  gsap.from(".projetosTitulo", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: ".horizontal-container",
      start: "top 55%",
      markers: false,
    },
  });

  gsap.from(".horizontal-container", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: ".horizontal-container",
      start: "top 50%",
      markers: false,
    },
  });
});

// TRANSIÇÃO DE MATCHMEDIA

mm.add("(max-width: 768px)", () => {
  gsap.fromTo(
    "header img",
    {
      opacity: 0,
      y: -15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: "power2.out",
    },
  );

  gsap.fromTo(
    "#menu-btn",
    {
      opacity: 0,
      y: -15,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.2,
      ease: "power2.out",
    },
  );
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
        start: "top -120%",
        end: "top -210%",
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

  gsap.from(".projetosTitulo", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    filter: "blur(5px)",
    scrollTrigger: {
      trigger: ".horizontal-container",
      start: "top 57%",
      markers: false,
    },
  });

  gsap.utils.toArray(".linksPai a").forEach((a) => {
    gsap.from(a, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      filter: "blur(5px)",
      scrollTrigger: {
        trigger: a,
        start: "top 55%",
        markers: false,
      },
    });
  });
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
    start: "top -130%",
    end: "top -190%",
    scrub: 2,
    markers: false,
  },
});
