interface Data {
    id: string;
    title: string;
    imageUrl: string;
    time: string;
    source: string;
    feeds: string;
    accountimg: string;
    followers: string;
}

async function getData(): Promise<Data[]> {
    return [
        {
            id: '1',
            title: 'Most hosts friendly chat with Trump on X after tech delays',
            imageUrl: '/images/image1.png', // Use absolute paths
            time: '7h',
            source: 'BBC',
            feeds: 'business',
            accountimg: '/images/wired.png', // Add valid account image or a placeholder
            followers: '98.9k followers',
        },
        {
            id: '2',
            title: 'New tech trends shaping the future of work',
            imageUrl: '/images/image2.png',
            time: '3h',
            source: 'TechCrunch',
            feeds: 'technology',
            accountimg: '/images/techcrunch.png',
            followers: '167k followers',
        },
        {
            id: '3',
            title: 'How AI is transforming the healthcare industry',
            imageUrl: '/images/image3.png',
            time: '1d',
            source: 'The Verge',
            feeds: 'health',
            accountimg: '/images/verge.png',
            followers: '167k followers',
        },
        {
            id: '4',
            title: 'The rise of electric vehicles: what you need to know',
            imageUrl: '/images/image4.png',
            time: '2d',
            source: 'Reuters',
            feeds: 'transportation',
            accountimg: '/images/techcrunch.png',
            followers: '56k followers',
        },
        {
            id: '5',
            title: 'Global markets react to latest economic data',
            imageUrl: '/images/image5.png',
            time: '5h',
            source: 'CNBC',
            feeds: 'finance',
            accountimg: '/images/wired.png',
            followers: '100k followers',
        },
    ];
}

export { getData };
export type { Data };