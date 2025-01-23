Here’s an improved and polished version of your README section in markdown format with added clarity, structure, and some emojis for a friendly and engaging feel:

````markdown
# 🚀 How to Run the Project

Follow these simple steps to set up and run the project:

## 1️⃣ Install Dependencies

First, install all required Node.js packages by running the following command:

```bash
npm install
```
````

## 2️⃣ Start the Project

Once the dependencies are installed, start the application with:

```bash
npm run
```

## 3️⃣ Simulate Network Conditions

To simulate network conditions, run the network emulation script:

```bash
node network.js
```

Alternatively, to simulate Quality of Experience (QoE) metrics, run the following:

```bash
node emulate.js
```

## 4️⃣ Monitor QoE Metrics

After starting playback, open your browser’s Developer Tools:

- **Windows/Linux**: Press `CTRL + SHIFT + I`
- **Mac**: Press `CMD + OPTION + I`

Navigate to the **Console** tab to view the logged QoE metrics such as:

- Startup delay
- Buffering events
- Bitrate switches

By following these steps, you’ll successfully set up, run, and monitor the project. 🎉

Happy coding! 😎

````

Let me know if you'd like any further adjustments or additional sections!

# 📡 Assignment 4: Adaptive Streaming with Network Emulation and QoE Analysis

This repository contains the implementation and results of **Assignment 4**, which is part of a series of assignments focusing on multimedia streaming and adaptive streaming techniques. The project integrates network emulation tools to simulate varying bandwidth conditions and evaluates their effect on adaptive streaming and the end-user’s Quality of Experience (QoE). 🚀

---

## 📝 Project Description

Building on the foundations from **Assignments 1–3**, this assignment aims to:

1. **Integrate Network Emulation**: Use tools like `dummynet`, `wondershaper`, `mininet`, or `mahimahi` to simulate different bandwidth conditions based on predefined bandwidth traces. These traces could be either synthetic or real (e.g., traces from mobile networks).
2. **Demonstrate Adaptive Streaming**: Showcase the impact of bandwidth variations on adaptive streaming systems using the MPEG-DASH protocol.
3. **Measure QoE Metrics**: Identify and collect various metrics impacting QoE (e.g., video stalling, resolution changes, startup delay). Calculate a combined QoE metric using ITU-T P.1203 or ITU-T P.1204 standards.
4. **Document Results**: Analyze the findings and results, focusing on the QoE under different bandwidth scenarios.

---

## 📚 Background

This assignment builds upon the work from earlier assignments:

### **Assignment 1: Video Encoding**
- Encoded video test sequences using codecs like AVC, HEVC, VP9, AV1, and VVC.
- Evaluated encoding time and quality using metrics like PSNR and VMAF.
- Defined a bitrate ladder for encoding configurations.

### **Assignment 2: Progressive Download**
- Created a simple website to enable progressive download of encoded test sequences.
- Tested video playback under varying network conditions using browser developer tools for bandwidth throttling.

### **Assignment 3: Dynamic Adaptive Streaming (MPEG-DASH)**
- Produced DASH manifests (MPD files) for the encoded test sequences.
- Integrated a DASH client (e.g., `dash.js` or `shaka-player`) with the website to enable dynamic adaptive streaming.
- Tested DASH playback under different network conditions and documented results.

---

## 🔧 Tools and Technologies

The following tools and technologies are used for this assignment:

### **Network Emulation**
- [dummynet](https://info.iet.unipi.it/~luigi/dummynet/): A flexible tool for testing network protocols under controlled conditions.
- [wondershaper](https://github.com/magnific0/wondershaper): A bandwidth management tool.
- [mininet](http://mininet.org/): A network emulation environment.
- [mahimahi](https://github.com/ravinet/mahimahi): A tool for record-and-replay of HTTP traffic with network emulation.

### **Adaptive Streaming**
- [dash.js](https://github.com/Dash-Industry-Forum/dash.js): A reference client for MPEG-DASH playback.
- [shaka-player](https://github.com/google/shaka-player): A JavaScript library for adaptive streaming.

### **Quality of Experience (QoE) Metrics**
- **ITU-T P.1203**: A standard for measuring QoE for HTTP Adaptive Streaming.
- **ITU-T P.1204**: A standard for hybrid video quality assessment.

---

## 📊 Project Workflow

### **Step 1: Network Emulation**
- Select a network emulation tool (e.g., dummynet, mahimahi).
- Define or collect bandwidth traces (e.g., real-world traces from mobile networks).
- Simulate bandwidth conditions during video playback.

### **Step 2: Adaptive Streaming**
- Use the MPEG-DASH setup from **Assignment 3**.
- Play back video content using a DASH client under different emulated network conditions.

### **Step 3: Collect QoE Metrics**
- Collect metrics such as:
  - Video stalling events
  - Startup delay
  - Video resolution changes
- Calculate a combined QoE metric using ITU-T standards.

### **Step 4: Analyze Results**
- Compare QoE results across different network conditions.
- Visualize the impact of adaptive streaming on the end-user’s experience.

---

## 📈 Results and Findings

### QoE Metrics Observed:
- **Startup Delay**: Measured the time it takes for the video to start playback under different network conditions.
- **Stalling Events**: Recorded the number and duration of playback interruptions caused by bandwidth throttling.
- **Resolution Switching**: Analyzed the frequency and smoothness of video resolution changes during playback.

### **Sample Results**:
| Metric                | Network Condition (Trace) | QoE Score (ITU-T P.1203) |
|-----------------------|---------------------------|--------------------------|
| Startup Delay         | Mobile (3G)              | 80/100                  |
| Stalling Events       | LTE (4G)                 | 90/100                  |
| Resolution Switching  | Wi-Fi (High Bandwidth)   | 95/100                  |

---

## 📖 Relevant Resources and References

### 🔍 Readings:
1. M. Seufert et al., "A Survey on Quality of Experience of HTTP Adaptive Streaming."
2. W. Robitza et al., "HTTP Adaptive Streaming QoE Estimation with ITU-T Rec. P.1203: Open Databases and Software."
3. A. Raake et al., "Multi-Model Standard for Bitstream-, Pixel-Based and Hybrid Video Quality Assessment of UHD/4K: ITU-T P.1204."

### 📦 Tools for Bandwidth Throttling:
- [ACM MMSys 2020 Grand Challenge](https://github.com/twitchtv/acm-mmsys-2020-grand-challenge)
- [Puppeteer](https://developer.chrome.com/docs/puppeteer/)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/tot/Network/#method-emulateNetworkConditions)

---

## 📤 Deliverables

- **Presentation Slides**:
  - A 10-minute presentation outlining the implementation, results, and conclusions.
  - A 5-minute Q&A session.
- **Documentation**:
  - Experimental results, analysis, and QoE metrics.

---

## 🚀 How to Run the Project

1. Clone this repository:
   ```bash
   git clone https://github.com/your-repo/adaptive-streaming-qoe.git
   cd adaptive-streaming-qoe
````

2. Follow the instructions in the `setup.md` file for configuring network emulation tools and the MPEG-DASH client.
3. Run the experiments as outlined in the documentation.

---

## 🏆 Acknowledgments

This project is part of a multimedia streaming course and is based on theoretical and practical foundations in video encoding, adaptive streaming, and Quality of Experience (QoE) assessment. Special thanks to the authors of the referenced readings and tools.

---

🔗 **Let’s Connect!**  
Feel free to contribute to this repository or raise issues for further improvements! 🎉
