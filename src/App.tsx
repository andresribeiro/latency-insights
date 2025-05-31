import LatencyComponent from "./LatencyComponent";

function App() {
	const latencyValues = [50, 200, 500, 1000, 2000];

	return (
		<div className="items-center flex flex-1 flex-col min-w-screen min-h-screen">
			<h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 mt-50">
				Latency Insights for Developers 👩‍💻
			</h1>

			<p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-10 text-center">
				This tool helps you analyze how network latency might affect your
				application's user experience.
			</p>

			<div className="space-y-4">
				{latencyValues.map((ms) => (
					<LatencyComponent key={ms} latencyMs={ms} />
				))}
			</div>
		</div>
	);
}

export default App;
