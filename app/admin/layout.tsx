import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>

      <div>
        <Sidebar />
      </div>

      <div></div>
    </main>
  );
}
