import { useState, type ChangeEvent, type FormEvent } from "react";

interface formDataType {
  name: string;
  email: string;
}
const Contact = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // console.log(formData.name);
    // console.log(formData.email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input onChange={handleChange} name="name" type="text" value={formData.name} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input onChange={handleChange} name="email" type="email" value={formData.email} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
