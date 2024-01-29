import Modal from "@/Components/Modal";
import PhotoCard from "@/Components/PhotoCard";
import photos, { Photo } from "@/lib/photos";

export default function PhotoModal({
    params: { id }
}: {
    params: { id: string }
}) {

    const photo: Photo = photos.find(p => p.id === id)!

    return (
        <Modal>
            <PhotoCard photo={photo} />
        </Modal>
    )
};