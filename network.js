const puppeteer = require('puppeteer');

(async () => {
    try {
        // Launch the browser
        const browser = await puppeteer.launch({ headless: false });
        const page = await browser.newPage();

        // Enable 3G network emulation
        const client = await page.target().createCDPSession();
        await client.send('Network.emulateNetworkConditions', {
            offline: false,
            // Network at 3g
            // downloadThroughput: 500 * 1024 / 8, // 500 kbps
            // uploadThroughput: 500 * 1024 / 8,   // 500 kbps
            // latency: 50,                        // 50 ms
            // connectionType: 'cellular3g'      // Simulate 3G

        //     // Network at Slow 4g
            // downloadThroughput: 1000 * 1024 / 8, // 1000 kbps
            // uploadThroughput: 500 * 1024 / 8,   // 500 kbps
            // latency: 30,                        // 30 ms
            // connectionType: 'cellular4g'

        //     // Network at Fast 4g
            // downloadThroughput: 2000 * 1024 / 8, // 2000 kbps
            // uploadThroughput: 1000 * 1024 / 8,   // 1000 kbps
            // latency: 10,                         // 10 ms
            // connectionType: 'cellular4g'

            // Network at WIFI
            // downloadThroughput: 5000 * 1024 / 8, // 5000 kbps
            // uploadThroughput: 2000 * 1024 / 8,   // 2000 kbps
            // latency: 5,                          // 5 ms
            // connectionType: 'wifi'

            // Network at No Throttling
            downloadThroughput: -1, // No throttling
            uploadThroughput: -1,   // No throttling
            latency: 0              // Zero latency
        });

        // Navigate to your Shaka player
        await page.goto('http://localhost:8000/index.html');
        console.log('network emulation applied. Testing playback.');

        // Inject JavaScript to calculate QoE metrics
        await page.evaluate(() => {
            const player = window.player; // Assuming 'player' is the Player instance
            if (!player) {
                console.error(' Player instance not found on the page.');
                return;
            }

            // Metrics to track
            const metrics = {
                startupDelay: 0,
                totalBufferingTime: 0,
                bufferingEvents: 0,
                bitrateSwitches: 0,
                droppedFrames: 0,
                playTime: 0,
                nodeCount: 0,
                layoutDuration: 0,
                timestamp: new Date().toISOString(),
            };

            const startTime = performance.now();

            // Event: Playback started
            player.addEventListener('onstatechange', () => {
                if (player.getPlayerState() === 'playing') {
                    metrics.startupDelay = (performance.now() - startTime) / 1000;
                    console.log(`Startup Delay: ${metrics.startupDelay} seconds`);
                }
            });

            // Event: Buffering
            player.addEventListener('buffering', (event) => {
                if (event.buffering) {
                    metrics.bufferingEvents++;
                    console.log(`Buffering started. Total so far: ${metrics.bufferingEvents}`);
                } else {
                    const bufferingEnd = performance.now();
                    metrics.totalBufferingTime += (bufferingEnd - startTime) / 1000;
                    console.log(`Buffering ended. Total buffering time: ${metrics.totalBufferingTime} seconds`);
                }
            });

            // Event: Bitrate adaptation
            player.addEventListener('adaptation', () => {
                metrics.bitrateSwitches++;
                const stats = player.getStats();
                console.log(`Bitrate switched to: ${stats.streamBandwidth} bps. Total switches: ${metrics.bitrateSwitches}`);
            });

            // Log final QoE metrics every 5 seconds
            setInterval(() => {
                const stats = player.getStats();
                metrics.droppedFrames = stats.droppedFrames;
                metrics.playTime = stats.playTime;
                const layoutShifts = performance.getEntriesByType('layout-shift');
                metrics.layoutDuration = layoutShifts.reduce((sum, entry) => sum + entry.duration, 0);

                // Capture current node count
                metrics.nodeCount = document.querySelectorAll('*').length;

                // Calculate QoE based on metrics
                const alpha = 0.3, beta = 0.4, gamma = 0.15, delta = 0.1, epsilon = 0.05;
                const qoe = alpha * metrics.startupDelay + beta * metrics.totalBufferingTime +
                    gamma * metrics.bufferingEvents + delta * metrics.bitrateSwitches +
                    epsilon * metrics.droppedFrames;

                console.log('QoE Metrics:', {
                    timestamp: metrics.timestamp,
                    startupDelay: metrics.startupDelay,
                    totalBufferingTime: metrics.totalBufferingTime,
                    bufferingEvents: metrics.bufferingEvents,
                    bitrateSwitches: metrics.bitrateSwitches,
                    droppedFrames: metrics.droppedFrames,
                    playTime: metrics.playTime,
                    nodeCount: metrics.nodeCount,
                    layoutDuration: metrics.layoutDuration,
                    calculatedQoE: qoe.toFixed(2)
                });
            }, 5000);
        });

        // Wait to observe playback
        await page.waitForTimeout(60000); // 1 minute observation

        // Close the browser
        await browser.close();
    } catch (error) {
        console.error('Error during playback testing:', error);
    }
})();
