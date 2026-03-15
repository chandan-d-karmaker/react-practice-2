import './App.css'

export default function User({ user }) {
    
    const { name, username, email, phone } = user;
    
    return (
    <div className='my-card'>
        <h3>Name: {name} </h3>
        <h4>User Name: {username}</h4>
        <h4>Email: {email}</h4>
        <p>Phone No. : {phone} </p>
    </div>
    )
}