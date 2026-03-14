import { use } from "react";

export default function Users({fetchUsers}){

    const users = use(fetchUsers);
    console.log(users);
    return (
        <div className="my-card">
            <h2>User: </h2>
        </div>
    )
}