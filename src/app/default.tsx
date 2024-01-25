import { delay } from "@/lib/utils";

export default async function DefaultHome() {

    await delay(1000);

    return (
        <div className="h-60 rounded-xl bg-cyan-600 p-10 text-white">
            <h1 className="text-3xl font-bold text-center">
                Default Main Page
            </h1>
        </div>
    )
};