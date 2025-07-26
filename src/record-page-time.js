const pageLoadTime = Date.now();

window.addEventListener('beforeunload', () => {
    const pageLeaveTime = Date.now();
    const timeSpent = (pageLeaveTime - pageLoadTime)

    fetch(`${CONFIG.ANALYTICS_SERVICE_URL}/record-page-time`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            path: window.location.pathname,
            time_spent: timeSpent
        })
    }).then(r => r.json())
});