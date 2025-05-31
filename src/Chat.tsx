import { useState } from "react";

type ChatProps = {
	messages: string[];
	onSendMessage: (message: string) => void;
};

export default function Chat({ messages, onSendMessage }: ChatProps) {
	const [currentMessage, setCurrentMessage] = useState("");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentMessage(e.target.value);
	};

	const handleSendClick = () => {
		if (currentMessage.trim() !== "") {
			onSendMessage(currentMessage);
			setCurrentMessage("");
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSendClick();
		}
	};

	return (
		<div className="flex-1 border rounded-lg p-4 flex flex-col justify-end min-h-[300px]">
			<div className="flex-grow overflow-y-auto mb-2">
				{" "}
				{messages.map((msg, index) => (
					<div key={index} className="mb-1 text-white">
						{" "}
						{msg}
					</div>
				))}
			</div>
			<div className="flex gap-2">
				<input
					type="text"
					placeholder="Type a message..."
					value={currentMessage}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					className="flex-1 p-2 border rounded"
				/>
				<button
					onClick={handleSendClick}
					className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
				>
					Send
				</button>
			</div>
		</div>
	);
}
