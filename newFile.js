const { scrollRevealOption } = require("./main");

scrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right"
});
