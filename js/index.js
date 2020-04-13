document.querySelector('.time').innerText = new Date().toLocaleTimeString();

document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHTML);
function getAjaxHTML() {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('get', 'client-data.html', true);
    xhr.send();
}

document.querySelector('.fetch-html').addEventListener('click', fetchhtml);
// function fetchhtml() {
//     fetch('client-data.html')
//     .then(response => response.text() )
//     .then(html => document.querySelector('.html-container').innerHTML = html);
// }
//======сучасний синтаксис asing away
function fetchhtml() {
    
}