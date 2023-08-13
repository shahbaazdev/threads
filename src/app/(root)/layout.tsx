import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import { Inter } from "next/font/google";
import {
  Bottombar,
  LeftSidebar,
  RightSidebar,
  TopSidebar,
} from "../../../components/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "Meta Thread",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <TopSidebar />
          <main className="flex flex-row">
            <LeftSidebar />
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            <RightSidebar />
          </main>
          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
