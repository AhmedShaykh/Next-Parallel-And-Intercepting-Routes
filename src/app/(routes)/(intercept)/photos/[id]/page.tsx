import PhotoCard from "@/Components/PhotoCard";
import photos, { Photo } from "@/lib/photos";
import Link from "next/link";

export default function PhotoPage({
    params: { id }
}: {
    params: { id: string }
}) {
    const photo: Photo = photos.find(p => p.id === id)!

    return (
        <div className="my-8">
            <Link
                className="font-semibold italic text-sky-600 underline text-xl text-center"
                href="/photos"
            >
                Back to Photos
            </Link>

            <div className="my-10 w-1/3">
                <PhotoCard photo={photo} />
            </div>
        </div>
    )
};