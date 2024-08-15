import { getMessages } from "@/actions/message";
import MessageList from "@/components/messages/message-list";

export default async function Messages(p: any) {
  const messages = await getMessages();

  return <MessageList messages={messages.reverse()} />;
}
