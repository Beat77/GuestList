import useQuery from "./useQuery";

import manyGuests from "/.manyGuests"


export default function App() {
   const { data: events, loading, error } = useQuery("/events");

   if (loading) return <p>Loading...</p>;
  if (error || !events) return <p>{error}</p>;


  return (
  <>
  
  <h1>Events</h1>
  
  </>
  );
}
