import photos from "@/lib/photos";
import Image from "next/image";
import Link from "next/link";

const Photos = () => {
    return (
        <div className="container">
            <h1 className="text-3xl font-bold uppercase text-center">
                Intercepting Routes
            </h1>

            <h3 className="text-2xl font-bold uppercase text-center my-10 text-gray-300">
                Photos
            </h3>

            <ul className="my-10 grid auto-rows-max grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {photos.map(({ id, imageSrc }) => (
                    <li key={id}>
                        <Link href={`/photos/${id}`}>
                            <Image
                                src={imageSrc}
                                alt="Photo"
                                height={500}
                                width={500}
                                className="aspect-square w-full rounded-xl object-cover"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Photos;