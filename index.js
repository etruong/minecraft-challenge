document.querySelector('#show-instruct').addEventListener('click', () => {
    document.querySelector('#instructions').classList.toggle('hidden');
    if (document.querySelector('#show-instruct').textContent == "Show Instructions") {
        document.querySelector('#show-instruct').textContent = "Hide Instructions";
    } else {
        document.querySelector('#show-instruct').textContent = "Show Instructions";
    }
});