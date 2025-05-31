import LatencyComponent from "./LatencyComponent";

export default function App() {
	const latencyValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

	return (
		<div className="items-center flex flex-1 flex-col min-w-screen min-h-screen">
			<h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 mt-50">
				Latency Insights for Developers 👩‍💻
			</h1>

			<p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-400 mb-10 text-center">
				This tool helps you analyze how network latency might affect user
				experience across different connection types.
				<br />
				The displayed latency represents the round-trip network time (RTT),
				similar to a ping command. For WebSocket chat, this RTT covers the
				message propagation from sender to server and then to receiver. For HTTP
				requests, this RTT covers the network travel for the request and its
				response.
			</p>

			{latencyValues.map((latency) => (
				<LatencyComponent key={latency} latencyMs={latency} />
			))}
		</div>
	);
}
