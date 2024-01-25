export default function RoutesLayout({
    children,
    team,
    dashboard
}: Readonly<{
    team: React.ReactNode
    dashboard: React.ReactNode
    children: React.ReactNode
}>) {
    return (
        <main className="container mx-auto">
            <section className="py-6">
                {children}
            </section>

            <section className="flex gap-6 mt-4 mb-8">
                {team}
                {dashboard}
            </section>
        </main>
    )
};