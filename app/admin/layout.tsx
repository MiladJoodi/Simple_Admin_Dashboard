import Sidebar from "@/components/sidebar/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>

      <div className="w-[80%]">
        {children}
      </div>
    </main>
  );
}
