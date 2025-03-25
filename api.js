const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
    try {
        const res = await fetch(BASE_URL);
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        return await res.json();
    } catch (error) {
        console.error('API Fetch Failed', error.message);
        throw error;
    }
}