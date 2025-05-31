import LatencyComponent from "./LatencyComponent";

export default function App() {
	const latencyValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

	return (
		<div className="flex flex-col items-center min-h-screen w-full p-4 sm:p-6">
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 mt-8 text-center">
				Latency Insights for Developers 👩‍💻
			</h1>

			<p className="max-w-lg mx-auto text-sm sm:text-base text-gray-400 mb-8 text-center">
				This tool helps you analyze how network latency might affect user
				experience across different connection types. The displayed latency
				represents the round-trip network time (RTT), similar to a ping command.
				For WebSocket chat, this RTT covers message propagation. For HTTP
				requests, it covers the request and response travel time.
			</p>

			<div className="w-full space-y-8">
				{latencyValues.map((latency) => (
					<LatencyComponent key={latency} latencyMs={latency} />
				))}
			</div>
		</div>
	);
}
