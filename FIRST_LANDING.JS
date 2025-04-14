const text = "MAKEtooHAPPEN";
const container = document.getElementById("circleText");
const chars = text.split("");
const totalChars = chars.length;
const radius = 40;

chars.forEach((char, i) => {
  const span = document.createElement("span");
  span.innerText = char;

  const deg = i * (360 / totalChars);

  span.style.transform = `
    rotate(${deg}deg)
    translateY(-${radius}px)
    rotate(-${deg}deg)
  `;

  container.appendChild(span);
});

const t1 = gsap.timeline();
t1.from("#text_div", {
    x: "-100%",
    duration: 1,
    ease: "power2.out"
});

t1.to(".overlaywhite", {
    x: "100%",
    duration: 1,
    stagger: 0.1,
    ease: "power2.inOut"
});

t1.from("#bigpic img", {
    x: "-100%",
    duration: 1,
    ease: "power2.out"
}, "-=0.8");
t1.from("#smallpic img", {
    x: "100%",
    duration: 1,
    ease: "power2.out"
}, "<");
t1.to("#slider ,#nav ,.circle-container", {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
}, "<");
