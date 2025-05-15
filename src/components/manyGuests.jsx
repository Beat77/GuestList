import SingleGuest from "./singleGuest";

export default function ManyGuests({guests}) {
  return (
    <article className="guests">
      {guests && guests.map((guest) => (
        <SingleGuest key={guest.id} guest={guest} />
      ))}
    </article>
  );
}
