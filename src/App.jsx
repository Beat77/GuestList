import useQuery from "./useQuery";

import ManyGuests from "./components/manyGuests"


export default function App() {

  <h1>Guests</h1>
   const { data: guests, loading, error } = useQuery("/guests");

   if (loading) return <p>Loading...</p>;
  if (error || !guests) return <p>{error}</p>;

console.log (guests)
  return (
  <>
  <ManyGuests guests={guests} />
  


export default guestList;

  
  
  </>
  );
}
