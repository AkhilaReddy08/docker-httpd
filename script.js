document.getElementById('clickMe').addEventListener('click', () => {
    const message = document.getElementById('message');
    message.textContent = '🎉 Button clicked at ' + new Date().toLocaleTimeString();
});

document.getElementById('server-info').textContent = 'Apache HTTPD (Docker Container)';
