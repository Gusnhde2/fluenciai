import Sidebar from "@/components/sidebar/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const mockData = [
    {
      name: "John Doe",
      lastMessageDate: Date.now() - 86400000, // 1 day ago
      lastMessage: "Hey, how's it going?",
      //   profilePicture: "john_doe.jpg",
    },
    {
      name: "Jane Smith",
      lastMessageDate: Date.now() - 3600000, // 1 hour ago
      lastMessage: "I have a question for you.",
      //   profilePicture: "jane_smith.jpg",
    },
    {
      name: "Alex Johnson",
      lastMessageDate: Date.now() - 172800000, // 2 days ago
      lastMessage: "Lorem ipsum dolor sit amet.",
      //   profilePicture: "alex_johnson.jpg",
    },
    {
      name: "Emily Brown",
      lastMessageDate: Date.now() - 259200000, // 3 days ago
      lastMessage: "Let's catch up soon!",
      //   profilePicture: "emily_brown.jpg",
    },
    {
      name: "Michael Lee",
      lastMessageDate: Date.now() - 614800000, // 1 week ago
      lastMessage: "How about grabbing lunch tomorrow?",
      //   profilePicture: "michael_lee.jpg",
    },
  ];
  return (
    <html lang="en">
      <body>
        <Sidebar data={mockData} />
        {children}
      </body>
    </html>
  );
}
