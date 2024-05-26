import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>

      <div>
        {children}
      </div>
    </main>
  );
}
