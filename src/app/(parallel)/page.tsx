import { delay } from "@/lib/utils";

const Home = async () => {

    await delay(1000);

    return (
        <div className="h-60 rounded-xl bg-blue-700 p-10 text-white">
            <h1 className="text-3xl font-bold text-center">
                Parallel Routes
            </h1>
        </div>
    )
};

export default Home;