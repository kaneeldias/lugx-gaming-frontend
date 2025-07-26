async function recordPageView() {
    fetch(`${CONFIG.ANALYTICS_SERVICE_URL}/record-page-view`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: window.location.pathname,
        })
    })
        .then(response => response.json())
}

recordPageView()
