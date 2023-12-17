import { contactTypes } from "@/Types/commonTypes"

export default function DisplayContact(props:{contactData:contactTypes}) {
  return (
    <div>
        <h1>Name: {props.contactData.name}</h1>
        <h1>email: {props.contactData.email}</h1>
        <h1>Phone: {props.contactData.phone}</h1>
        <h1>Message: {props.contactData.message}</h1>

    </div>
  )
}