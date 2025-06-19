// pages/photos.tsx
import { useEffect, useState } from 'react';

interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

const PhotosPage = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=10');
                const data: Photo[] = await response.json();
                setPhotos(data);
            } catch (error) {
                console.error('Ошибка при загрузке фотографий:', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <h1>Фото</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {photos.map((photo) => (
                    <div key={photo.id} style={{ margin: '10px' }}>
                        <h3>{photo.title}</h3>
                        <img src={photo.thumbnailUrl} alt={photo.title} width={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotosPage;
