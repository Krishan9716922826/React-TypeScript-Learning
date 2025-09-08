import { useState } from "react"
interface UserProfile {
    name: string,
    age: number,
    email:string,
}
const UserProfile = () => {
    const [profile, setProfile] = useState<UserProfile>({
        name:"",
        age: 0,
        email:"",
    })

    const updateName = (name:string)=>{
        setProfile((prevProfile) => ({...prevProfile, name}));
    }
    const updateAge = (age: string) => {
        setProfile((prevProfile) => ({ ...prevProfile, age: Number(age) }));
    }
    const updateEmail = (email:string)=>{
        setProfile((prevProfile) => ({...prevProfile, email}));
    }
  return (
    <div>
        <h2>User Profile</h2>
        <input onChange={e => updateName(e.target.value)} type="text" placeholder="Name" value={profile.name}/>
        <input onChange={ e =>updateAge(e.target.value)}  type="number" placeholder="Age" value={profile.age}/>
        <input onChange={ e => updateEmail(e.target.value)}  type="email" placeholder="Email" value={profile.email}/>
        <h1>Profile Summary</h1>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
        <p>Email: {profile.email}</p>
    </div>
  )
}

export default UserProfile