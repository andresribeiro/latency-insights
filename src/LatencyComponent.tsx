import { useState } from "react";
import Chat from "./Chat";

type LatencyComponentProps = {
	latencyMs: number;
};

export default function LatencyComponent({ latencyMs }: LatencyComponentProps) {
	const [aliceMessages, setAliceMessages] = useState<string[]>([]);
	const [bobMessages, setBobMessages] = useState<string[]>([]);

	const handleAliceSendMessage = (message: string) => {
		const fullMessage = `Alice: ${message}`;
		setAliceMessages((prevMessages) => [...prevMessages, fullMessage]);
		setTimeout(() => {
			setBobMessages((prevMessages) => [...prevMessages, fullMessage]);
		}, latencyMs);
	};

	const handleBobSendMessage = (message: string) => {
		const fullMessage = `Bob: ${message}`;
		setBobMessages((prevMessages) => [...prevMessages, fullMessage]);
		setTimeout(() => {
			setAliceMessages((prevMessages) => [...prevMessages, fullMessage]);
		}, latencyMs);
	};

	return (
		<div className="max-w-2xl mx-auto p-6">
			<p className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center">
				{latencyMs} ms
			</p>

			<div className="flex gap-4 w-full">
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
		</div>
	);
}
