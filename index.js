const longUlr = document.getElementById("long-url");
const shortUlr = document.getElementById("short-url");
const longResult = document.getElementById("long");
const shortResult = document.getElementById("short");
const longGenerate = document.getElementById("long-generate");
const shortGenerate = document.getElementById("short-generate");
const longCopy = document.getElementById("long-copy");
const shortCopy = document.getElementById("short-copy");
let longUrlResult = "";
let shortUlrResult = "";

const obj = {};
const urlShortener = (longURL = "") => {
    let shortURL = "bit.ly/" + longURL.replace(/[^a-z]/g, "").slice(-4);
    if (!obj[shortURL]) {
        obj[shortURL] = longURL;
    }
    return shortURL;
};
const urlRedirector = (shortURL = "") => {
    return obj[shortURL];
};

shortGenerate.addEventListener("click", (event) => {
    const value = urlShortener(longUlr.value);
    shortResult.innerText = value;
    shortUlrResult = value;
});

longGenerate.addEventListener("click", (event) => {
    const value = urlRedirector(shortUlr.value);
    longResult.innerText = value;
    longUrlResult = value;
});

shortCopy.addEventListener("click", (event) => {
    navigator.clipboard.writeText(shortUlrResult);
});

longCopy.addEventListener("click", (event) => {
    navigator.clipboard.writeText(longUrlResult);
});
