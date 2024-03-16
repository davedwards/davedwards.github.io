var exports = {};
    let config = {
  heading: "This site uses cookies",
  savePref: false, //Deactivated for JSFiddle
  savePrefDefault: false,
  informationText: "This should give the user a general idea of what cookies are and why you use them.",
  tableHeads: ["Name", "Description"],
  checkboxes: [{
    title: "Necessary",
    required: true,
    checked: true,
    name: "necessary",
    description: "A short description.",
    services: [
      ["Service name.", "Service description."]
    ],
  }, {
    title: "Marketing",
    required: false,
    checked: true,
    name: "marketing",
    description: "We use marketing cookies.",
    services: [
      ["Marketing service name.", "Service description."]
    ],
  }, ],
  buttons: [{
      title: "Only necessary",
      onclick: () => {
        check("necessary");
        check("marketing");
      },
    },
    {
      title: "All",
      green: true,
      onclick: () => {
        check("necessary", "marketing");
      },
    },
  ]
}

window.onload = function() {
  new CookiePopup(config);
}

