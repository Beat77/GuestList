import singleGuest from "./singleGuest";

export default function manyGuests({guests}) {
  return (
    <article className="guests">
      {guests.map((guest) => (
        <singleGuest key={guest.id} guest={guest} />
      ))}
    </article>
  );
}
