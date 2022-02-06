let URL = window.location.href;
let protocol = window.location.protocol;
let hostName = window.location.hostname;

let html = (`This website is called: <b>${window.location.hostname}</b>.<br/>`);
html += (`Has a protocol <b>${window.location.protocol}</b><br/>and the URL is <b>${window.location.href}</b>.`);
document.write(html);