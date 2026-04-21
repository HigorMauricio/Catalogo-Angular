export interface Album {
    id: string;
    title: string;
    artist: string;
    releaseYear: number;
    gender: string;
    label: string;
    coverUrl: string;
    audioUrl: string | null;
    isClassic: boolean;
}