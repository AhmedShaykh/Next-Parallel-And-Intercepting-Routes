import { delay } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function Settings() {

    await delay(5000);

    return (
        <div className="h-80 flex-1 rounded-2xl bg-purple-800 p-10 text-white">
            <h2 className="text-2xl font-semibold text-center">
                Settings
            </h2>
        </div>
    )
};