export default async function Launch({ params }) {
  const { id } = params;
  const data = await fetch(`${process.env.NEXT_APP_API_URL}/launches/${id}`);
  const launch = await data.json();

  return (
    <div className="text-center">
      <h1 className="text-2x1" >{launch.flight_number} { " " }{launch.name}</h1>
      <p>{launch.date_local}</p>
      <p>{launch.details}</p>
    </div>
  );
}
