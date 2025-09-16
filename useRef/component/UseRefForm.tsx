import  { useRef, useState, type FormEvent } from "react";

type formDataType = {
  name: string;
  email: string;
  password: string;
};
const UseRefForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    password: "",
  });
  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const submitHandler = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const nameVal = name.current!.value;
    const emailVal = email.current!.value;
    const passwordVal = password.current!.value;

    setFormData({
      name: nameVal,
      email: emailVal,
      password: passwordVal,
    })
    
  }

  return <form onSubmit={submitHandler}>
    <input type="text" placeholder="Enter your name" ref={name} />
    <input type="email" placeholder="Enter your email" ref={email}  />
    <input type="password" placeholder="Enter your password" ref={password}  />
    <button type="submit">Submit</button>
    
    <section>
      <p>{formData.name}</p>
      <p>{formData.email}</p>
      <p>{formData.password}</p>
    </section>
  </form>;
};

export default UseRefForm;
