import { Photo } from "@/lib/photos";
import Image from "next/image";

export default function PhotoCard({ photo }: { photo: Photo }) {
    return (
        <>
            <Image
                src={photo.imageSrc}
                alt={photo.name}
                height={600}
                width={600}
                className="col-span-1 aspect-square w-full object-cover"
            />

            <div className="text-gray-900 p-2 px-4 bg-white">
                <h3 className="font-serif text-xl font-medium">
                    {photo.name}
                </h3>

                <p className="text-sm text-gray-900">
                    Taken by {photo.username}
                </p>
            </div>
        </>
    )
};