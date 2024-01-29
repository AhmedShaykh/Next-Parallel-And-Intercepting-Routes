import Template from "./template";

export default function RoutesLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="container mx-auto">
            <Template>
                {children}
            </Template>
        </main>
    )
};