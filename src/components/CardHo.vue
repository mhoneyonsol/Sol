<template>
  <main id="app">
    <section href="#google1" class="ticket" ref="ticket">
      <header class="front">
        <div class="holo"></div>
        <img class="logo" src="https://res.cloudinary.com/dpphcu4gm/image/upload/v1712992262/full-logo_bdbltu.png" alt="" />
        <aside class="divider"></aside>
      </header>
      <section class="back">
        <div class="holo"></div>
        <p id="id_number">NO 00004521</p>
        <div class="data">
          <p class="name">gambhir⚡</p>
          <p class="githubid">@gambhirsharma</p>
          <p></p>
        </div>
        <aside class="divider">
          <div>
            <img src="https://res.cloudinary.com/dpphcu4gm/image/upload/v1712992245/logo_ycu0zf.svg" alt="" />
            <h3>April 15-19 / 7AM PT</h3>
          </div>
        </aside>
      </section>
    </section>
  </main>
</template>

<script>
// Declare gsap as a global variable
/* global gsap */

export default {
  mounted() {
    const speed = 7;
    const r = gsap.timeline({ repeat: -1 });
    const o = gsap.timeline({ repeat: -1 });
    const h = gsap.timeline({ repeat: -1 });

    const $ticket = this.$refs.ticket;
    $ticket.addEventListener("mouseenter", () => {
      r.pause();
      o.pause();
      h.pause();
    });
    $ticket.addEventListener("mouseleave", () => {
      r.play();
      o.play();
      h.play();
    });

    r.to("#app", {
      "--r": "180deg",
      "--p": "0%",
      duration: speed,
      ease: "sine.in"
    });
    r.to("#app", {
      "--r": "360deg",
      "--p": "100%",
      duration: speed,
      ease: "sine.out"
    });
    o.to("#app", {
      "--o": 1,
      duration: speed / 2,
      ease: "power1.in"
    });
    o.to("#app", {
      "--o": 0,
      duration: speed / 2,
      ease: "power1.out"
    });

    h.to("#app", {
      "--h": "100%",
      duration: speed / 2,
      ease: "sine.in"
    });
    h.to("#app", {
      "--h": "50%",
      duration: speed / 2,
      ease: "sine.out"
    });
    h.to("#app", {
      "--h": "0%",
      duration: speed / 2,
      ease: "sine.in"
    });
    h.to("#app", {
      "--h": "50%",
      duration: speed / 2,
      ease: "sine.out"
    });
  }
};
</script>

<style scoped>
/*
== Date ==
13th April 2024

Inspiration: https://codepen.io/simeydotme/pen/QWJqRvB?editors=1100

Supabase Ticket URL: https://supabase.com/special-announcement/tickets/gambhirsharma?lw=11&platinum=true

*/
html {
  --zoom: 120 !important;
  --green: #37996b !important;
  --neon: #3ecf8e !important;
}
:root {
  --unit: 1vmin !important;
  --available-screen-min: 665 !important;
  --px: calc(var(--zoom) * (var(--unit) / var(--available-screen-min))) !important;
  --bg: #060809 !important;
  --logopng: url(https://res.cloudinary.com/dpphcu4gm/image/upload/v1712993492/supabase-outline-logo_u83xos.png) !important;
  --ticket: url(https://assets.codepen.io/13471/ticket-shape.svg) !important;
  --ar: 10/30 !important;
  --gutter: 8% !important;
}
* {
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0 !important;
  font-family: Arial, Helvetica, sans-serif !important;
  font-size: 16px !important;
}
*::after,
*::before {
  content: "" !important;
  display: block !important;
  position: relative !important;
  box-sizing: border-box !important;
}
head::before,
head::after,
body::before,
body::after,
html::before,
html::after {
  content: "" !important;
  position: absolute !important;
  background-repeat: no-repeat !important;
  box-sizing: border-box !important;
  filter: blur(0) !important;
}
body {
  all: unset !important;
  background-color: var(--bg) !important;
  height: 100vh !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
}
a {
  all: unset !important;
}

#app {
  perspective: 1200px !important;
  --o: 0 !important;
  --p: 100% !important;
  --h: 50% !important;
  --r: 0 !important;
  transform: translate3d(0, 0, 0.1px) !important;
}

.ticket {
  --scale: 1 !important;
  transform: translate3d(0, 0, 0.1px) scale(var(--scale)) rotateY(var(--r)) !important;
  transform-style: preserve-3d !important;
  pointer-events: auto !important;
}

.front,
.back {
  grid-area: 1/1 !important;
  background-color: #6e6176 !important;
  background-image: radial-gradient(
    circle at var(--p) 50%,
    #111 10%,
    transparent 100%
  ) !important;
  background-size: 100% 220vh !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
  border-radius: 15px !important;
  display: grid !important;
  backface-visibility: visible !important;
  transform: translateZ(1px) !important;
  transform-style: preserve-3d !important;
  mask-image: var(--ticket) !important;
  mask-size: cover !important;
  mask-repeat: no-repeat !important;
  height: calc(420 * var(--px)) !important;
}
.cutout {
  position: absolute !important;
}

.front::after,
.back::after {
  content: "" !important;
  position: absolute !important;
  inset: 0 !important;
  background-image: linear-gradient(
    -70deg,
    transparent 40%,
    rgba(255, 255, 255, 0.5) 40.5%,
    transparent
  ) !important;
  background-size: 200% 200% !important;
  background-position: var(--p) var(--p) !important;
  z-index: 5 !important;
  opacity: calc(var(--o) + 0.5) !important;
  pointer-events: none !important;
}

.front {
  transform: rotateY(180deg) translateZ(1px) !important;
}
.back {
  padding: calc(20 * var(--px)) !important;
}

.holo {
  display: block !important;
  position: absolute !important;
  inset: 0 !important;
  border-radius: 15px !important;
}

.holo {
  --space: 5% !important;
  --red: hsl(0, 100%, 50%) !important;
  --orange: hsl(30, 100%, 50%) !important;
  --yellow: hsl(60, 100%, 50%) !important;
  --green: hsl(120, 100%, 50%) !important;
  --cyan: hsl(180, 100%, 50%) !important;
  --blue: hsl(222, 100%, 50%) !important;
  --purple: hsl(258, 100%, 50%) !important;
  --magenta: hsl(300, 100%, 50%) !important;
  background-image: repeating-linear-gradient(
    -45deg,
    var(--red) 0%,
    var(--orange) calc(var(--space) * 1),
    var(--yellow) calc(var(--space) * 2),
    var(--green) calc(var(--space) * 3),
    var(--cyan) calc(var(--space) * 4),
    var(--blue) calc(var(--space) * 5),
    var(--purple) calc(var(--space) * 6),
    var(--magenta) calc(var(--space) * 7),
    var(--red) calc(var(--space) * 8)
  ) !important;
  background-size: 150vw 150vh !important;
  background-position: calc(var(--h)) calc(var(--h)) !important;
  background-repeat: no-repeat !important;
  mask-image: var(--logopng) !important;
  mask-size: 80% 80% !important;
  mask-repeat: no-repeat !important;
  mask-position: 150% 180% !important;
  mix-blend-mode: plus-lighter !important;
  filter: brightness(0.9) contrast(0.7) saturate(2) !important;
  opacity: var(--o) !important;
}

.logo {
  width: 50% !important;
  place-self: center !important;
  transform: translateY(-14%) !important;
}

.divider {
  position: absolute !important;
  display: flex !important;
  align-items: center !important;
  justify-content: start !important;
  bottom: 2% !important;
  left: 0 !important;
  right: 0 !important;
  height: 18% !important;
  padding: 0 var(--gutter) !important;
  text-transform: uppercase !important;

  background-image: repeating-linear-gradient(
      90deg,
      #fff0 0px,
      #fff0 8px,
      var(--green) 8px,
      var(--green) 16px
    ),
    radial-gradient(ellipse at center center, #fff0 10%, transparent 50%) !important;
  background-size: 100% 1.5px, 250% 1.5px !important;
  background-repeat: no-repeat !important;
  background-position: -4px top, var(--h) top !important;
  background-blend-mode: overlay !important;

  font-size: 16px !important;
  font-weight: 400 !important;
  z-index: 2 !important;

  div {
    display: flex !important;
    align-items: center !important;
    justify-content: left !important;
  }
}

.divider > div > img {
  margin-right: 10px !important;
  height: 40px !important;
}
#app {
  color: #fff !important;
  /* font-family: "Roboto Mono", monospace; */
  display: grid !important;
  grid: 1fr/1fr !important;
  place-content: center !important;
  overflow: hidden !important;
  padding: 50px !important;
  z-index: 999 !important;
  height: 90% !important;
}

.ticket {
  display: grid !important;
  grid-area: 1/1 !important;
  width: calc(300 * var(--px)) !important;
  height: calc(400 * var(--px)) !important;
  aspect-ratio: var(--ar) !important;
}

@media screen and (max-width: 400px) {
  .ticket {
    --scale: 0.75 !important;
  }
}

#id_number {
  position: absolute !important;
  margin: calc(40 * var(--px)) calc(20 * var(--px)) !important;
}

.data {
  position: absolute !important;
  top: calc(70 * var(--px)) !important;
  margin: calc(20 * var(--px)) !important;
}
.name {
  font-size: calc(30 * var(--px)) !important;
}
.githubid {
  font-size: calc(20 * var(--px)) !important;
}
h3 {
  font-size: calc(15 * var(--px)) !important;
}
</style>
