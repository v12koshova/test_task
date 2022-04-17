// console.log("TEST");

function initMobile() {
  console.log("is-mobile");
  setBanks('tablet')
}

function initTablet() {
  console.log("is-tablet");
  setBanks('tablet')
}

function initDesktop() {
  console.log("is-desktop");
  setBanks('desctop')
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 767px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 768px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);
