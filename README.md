# Latency Insights for Developers 👩‍💻

This project is a web-based tool designed to help developers understand the impact of network latency on user experience. It simulates different network conditions to demonstrate how varying round-trip times (RTT) affect real-time communication (chat) and HTTP request loading times.

## Features

- **Simulated Latency:** Choose from a range of predefined latency values (50ms to 1000ms) to observe their effects.
- **Real-time Chat Simulation:** Experience how latency impacts the responsiveness of a two-way chat between \"Alice\" and \"Bob.\" Messages are delayed based on the selected RTT.
- **Simulated HTTP Request Loading:** See a breakdown of a simulated HTTP request's load time, including network RTT, DNS lookup, TCP handshake, TLS handshake, and server processing.
- **Fake Tweets Loading:** Load a list of \"tech tweets\" with a delay that reflects the simulated HTTP load time, demonstrating how content delivery is affected by latency.

## How it Works
The application uses `setTimeout` to simulate network delays.
- **Chat:** When a message is sent, it's immediately displayed on the sender's side, but a delayed `setTimeout` is used to display it on the receiver's side, mimicking network propagation.
- **HTTP Request:** The \"Load Tweets\" button triggers a `setTimeout` that accounts for the specified network latency, along with values for DNS, TCP, TLS, and server processing, before displaying the \"tweets.\"
