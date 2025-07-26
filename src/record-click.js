document.addEventListener('click', (event) => {
    let element = event.target.getAttribute('click-id');
    if (!element) {
        element = event.target.closest('[click-id]');
        if (element) {
            element = element.getAttribute('click-id');
        }
    }

    if (!element) {
        return
    }

    // Example: Record the click event
    fetch(`${CONFIG.ANALYTICS_SERVICE_URL}/record-click`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            element: element,
            path: window.location.pathname,
        })
    })
        .then(response => response.json())
});