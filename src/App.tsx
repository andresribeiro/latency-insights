import LatencyComponent from "./LatencyComponent";

export default function App() {
	const latencyValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

	return (
		<div className="items-center flex flex-1 flex-col min-w-screen min-h-screen">
			<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-50">
				Latency Insights for Developers 👩‍💻
			</h1>

			<p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
				<b>
					This tool helps you analyze how network latency might affect your
					application's user experience.
					<br />
					<br />
				</b>{" "}
				The displayed latency simulates the two-way network delay for a message
				to travel from sender to server, and from server to receiver. So for
				50ms we actually delay 100ms, + 20ms (a reasonable server processing
				time).
			</p>

			<div className="space-y-4">
				{latencyValues.map((ms) => (
					<LatencyComponent key={ms} latencyMs={ms} />
				))}
			</div>
		</div>
	);
}
