import { tmdb } from '@/lib/tmdb';

export default async function Home() {
  const data = await tmdb.getPopular();
  
  return (
    <main className="bg-black text-white p-8">
      <h1 className="text-4xl font-bold">🎬 欢迎来到 Netflix Clone</h1>
      <p>热门电影正在加载...</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
