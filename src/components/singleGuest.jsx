
import {useState,useEffect} from "react"


export default function SingleGuest ({guest}) {


    return (
        <>
        
        <details>
        <summary>{guest.name}</summary>
        {guest.email},
        {guest.phone},
        {guest.job},
        {guest.bio},
        {guest.phone}
          

        </details>
        </>
    )
}