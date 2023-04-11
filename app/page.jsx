import Launches from "./about/Launches";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_APP_API_URL}/launches`);
  const launches = await data.json();
  return (
    <main>
      <div className="grid grid-cols-fluid gap-16">
        {launches.map((launch) => {
         return (
          <div key={launch.id}><Launches launch={launch} /></div>
         )
        })}
      </div>
    </main>
  );
}
