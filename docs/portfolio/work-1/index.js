$(document).ready(function () {
  $('.section-1__item-2, .section-1__item-3').addClass("active");
});

// 로딩화면
$("body").imagesLoaded(function () {
  // 이 부분을 0으로 바뀌면 로딩화면이 안보일 때가 있습니다. 억지로라도 로딩화면을 보여주려면 이 부분을 남겨두세요. 500이 적당합니다.
  const fakeLoadingMilliSeconds = 500;
  setTimeout(function () {
    Fullpage__init();
    $(".loading").remove();
  }, fakeLoadingMilliSeconds);
});

function Section1__init() {
  gsap.from(".section-1__item-1", {
    opacity: 0,
    x: -300,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-1'
    }
  });
};

Section1__init();

function Section2__init() {
  gsap.from(".section-2__item", {
    opacity: 0,
    y:100,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-2',
      start:'55% 60%'
    }
  });
};

Section2__init();

function Section3__init() {
  gsap.from(".section-3__item", {
    opacity: 0,
    y:100,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-3',
      start:'30% 60%'
    }
  });
};

Section3__init();

function Section4__init() {
  gsap.from(".section-4__item-1", {
    opacity: 0,
    x:-150,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-4',
      start:'20% 60%'
    }
  });
  gsap.from(".section-4__item-2", {
    opacity: 0,
    x:100,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-4',
      start:'70% 60%'
    }
  });
};

Section4__init();

function Section5__init() {
  gsap.from(".section-5__item-1", {
    opacity: 0,
    x:-150,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.section-5',
      start:'20% 60%',
    }
  });
  gsap.from(".section-5__item-2", {
    opacity: 0,
    x:150,
    duration: 1.5,
    scrollTrigger: {
      trigger: '.section-5',
      start:'20% 60%'
    }
  });
};

Section5__init();

function Section6__init() {
  gsap.from(".section-6__item", {
    opacity: 0,
    y:300,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-6',
      start:'30% 60%'
    }
  });
};

Section6__init();

function Section7__init() {
  gsap.from(".section-7__title", {
    opacity: 0,
    x:-200,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-7',
      start:'20% 60%'
    }
  });
  gsap.from(".section-7__item-1", {
    opacity: 0,
    x:50,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-7',
      start:'30% 60%'
    }
  });
  gsap.from(".section-7__item-2", {
    opacity: 0,
    x:100,
    duration: 1,
    delay:.6,
    scrollTrigger: {
      trigger: '.section-7',
      start:'30% 60%'
    }
  });
  gsap.from(".section-7__item-3", {
    opacity: 0,
    x:100,
    duration: 1,
    delay:1.2,
    scrollTrigger: {
      trigger: '.section-7',
      start:'30% 60%'
    }
  });
};

Section7__init();

function Section8__init() {
  gsap.from(".section-8__item-1, .section-8__item-2, .section-8__item-3", {
    opacity: 0,
    y:200,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-8',
      start:'0% 60%'
    }
  });
};

Section8__init();

function Section9__init() {
  gsap.from(".section-9__item-1", {
    opacity: 0,
    x:-80,
    delay: .3,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-9',
      start:'0% 60%'
    }
  });
  gsap.from(".section-9__item-2", {
    opacity: 0,
    x:-80,
    delay: .6,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-9',
      start:'0% 60%'
    }
  });
};

Section9__init();

function Section10__init() {
  gsap.from(".section-10__bg-2", {
    opacity: 0,
    x:80,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-10',
      start:'0% 60%'
    }
  });
  gsap.from(".section-10__item-2", {
    opacity: 0,
    y:100,
    delay: .2,
    duration: 1,
    scrollTrigger: {
      trigger: '.section-10',
      start:'30% 60%'
    }
  });
  gsap.from(".section-10__item-3, .section-10__item-4", {
    opacity: 0,
    y:100,
    delay: .6, 
    scrollTrigger: {
      trigger: '.section-10',
      start:'30% 60%'
    }
  });
};

Section10__init();

function Section11__init() {
  gsap.from(".section-11__item-1, .section-11__item-2", {
    opacity: 0,
    y:200,
    duration: .8,
    scrollTrigger: {
      trigger: '.section-11',
      start:'0% 60%'
    }
  });
};

Section11__init();