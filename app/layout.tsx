import { BoardProvider } from "@/context/BoardContext/BoardContext";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <BoardProvider>{children}</BoardProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
