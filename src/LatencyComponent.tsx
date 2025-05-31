import { useState } from "react";
import Chat from "./Chat";

type LatencyComponentProps = {
	latencyMs: number;
};

type Tweet = {
	id: number;
	author: string;
	content: string;
};

const fakeTechTweets: Tweet[] = [
	{
		id: 1,
		author: "TechGuru",
		content:
			"AI advancements are accelerating at an incredible pace! #AI #Innovation",
	},
	{
		id: 2,
		author: "CodeWizard",
		content:
			"Learning Rust has been a game-changer for performance-critical applications. #RustLang #Programming",
	},
	{
		id: 3,
		author: "DevOpsPro",
		content:
			"Containerization with Docker and Kubernetes simplifies deployment workflows significantly. #DevOps #Kubernetes",
	},
	{
		id: 4,
		author: "WebDevDaily",
		content:
			"The new CSS features are making responsive design even more powerful. #Frontend #CSS",
	},
	{
		id: 5,
		author: "CyberSecurityGuy",
		content:
			"Stay vigilant! Phishing attacks are becoming increasingly sophisticated. #CyberSecurity #InfoSec",
	},
];
export default function LatencyComponent({ latencyMs }: LatencyComponentProps) {
	const [aliceMessages, setAliceMessages] = useState<string[]>([]);
	const [bobMessages, setBobMessages] = useState<string[]>([]);
	const [tweetsLoading, setTweetsLoading] = useState(false);
	const [displayedTweets, setDisplayedTweets] = useState<Tweet[]>([]);

	const dnsLatency = 30;
	const tcpHandshakeLatency = 40;
	const tlsHandshakeLatency = 80;
	const serverProcessingLatency = 20;

	const handleAliceSendMessage = (message: string) => {
		const fullMessage = `Alice: ${message}`;
		setAliceMessages((prevMessages) => [...prevMessages, fullMessage]);
		setTimeout(() => {
			setBobMessages((prevMessages) => [...prevMessages, fullMessage]);
		}, latencyMs + 20);
	};
	const handleBobSendMessage = (message: string) => {
		const fullMessage = `Bob: ${message}`;
		setBobMessages((prevMessages) => [...prevMessages, fullMessage]);
		setTimeout(() => {
			setAliceMessages((prevMessages) => [...prevMessages, fullMessage]);
		}, latencyMs + 20);
	};

	const handleLoadTweets = () => {
		setTweetsLoading(true);
		setDisplayedTweets([]);
		const totalHttpLatency =
			latencyMs +
			dnsLatency +
			tcpHandshakeLatency +
			tlsHandshakeLatency +
			serverProcessingLatency;
		setTimeout(() => {
			setTweetsLoading(false);
			setDisplayedTweets(fakeTechTweets);
		}, totalHttpLatency);
	};

	return (
		<div className="max-w-2xl mx-auto p-6">
			<p className="text-4xl sm:text-5xl font-bold text-white mb-6 text-center">
				{latencyMs} ms
			</p>

			<div className="flex gap-4 w-full justify-center">
				<div className="flex flex-col flex-1">
					<h2 className="text-xl font-semibold text-white mb-2">Alice</h2>
					<Chat
						messages={aliceMessages}
						onSendMessage={handleAliceSendMessage}
					/>
				</div>
				<div className="flex flex-col flex-1">
					<h2 className="text-xl font-semibold text-white mb-2">Bob</h2>
					<Chat messages={bobMessages} onSendMessage={handleBobSendMessage} />
				</div>
			</div>

			<div className="flex flex-col items-center mt-4 w-full">
				<p className="text-sm text-gray-400 mb-2 text-center">
					HTTP Load Time breakdown: Network Round-trip ({latencyMs}ms) + DNS (
					{dnsLatency}ms) + TCP ({tcpHandshakeLatency}ms) + TLS (
					{tlsHandshakeLatency}ms) + Server Processing (
					{serverProcessingLatency}ms)
				</p>
				<button
					onClick={handleLoadTweets}
					disabled={tweetsLoading}
					className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
				>
					{tweetsLoading ? (
						<div className="flex items-center justify-center">
							<svg
								className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							Loading Tweets...
						</div>
					) : (
						"Load Tweets (Simulated HTTP)"
					)}
				</button>
				{displayedTweets.length > 0 && (
					<div className="mt-4 p-2 border rounded text-white w-full self-center">
						<h3 className="font-semibold mb-2 text-center">
							Recent Tech Tweets:
						</h3>
						{displayedTweets.map((tweet) => (
							<div
								key={tweet.id}
								className="mb-2 p-2 border-b border-gray-700 last:border-b-0"
							>
								<p className="font-bold text-blue-400">{tweet.author}</p>
								<p className="text-sm">{tweet.content}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
