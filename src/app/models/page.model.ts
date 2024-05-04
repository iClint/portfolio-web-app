export interface Page {
    title: string;
    sections: Section[];
}

export interface Section {
    heading: string;
    content: string;
    imageUrls?: string[];
}