type Props = {
  textMessage: string;
  isYourMessage: boolean;
  nick: string;
};

export default function ChatMessage({
  isYourMessage,
  textMessage,
  nick,
}: Props) {
  return (
    <>
      {isYourMessage ? (
        <div className="message message-yours">
          <span>{textMessage}</span>
        </div>
      ) : (
        <div className="message">
          <p>{nick}</p>
          <span>{textMessage}</span>
        </div>
      )}
    </>
  );
}
