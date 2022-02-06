// It's a simple script that shows info about the actual website using the window object.

let URL = window.location.href;
let protocol = window.location.protocol;
let hostName = window.location.hostname;
let pathName = window.location.pathname;

let html = (`This website is called: <b>${hostName}</b>.<br/>`);
html += (`Has a protocol <b>${protocol}</b><br/>`)
html+= (`The URL is <b>${URL}</b>`);
html += (` and the pathname is <b>${pathName}</b>`);
document.write(html);