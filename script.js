document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('typed-text');
    let text = '';

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        if (e.key === 'Backspace') {
            e.preventDefault();
            text = text.slice(0, -1);
        } else if (e.key.length === 1) {
            e.preventDefault();
            text += e.key;
        }

        output.textContent = text;
    });
});
