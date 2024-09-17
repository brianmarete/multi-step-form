import { useState } from "react";

type SubmitResult = { name: string; email: string; phone: string };

type Props = {
  initialName: string;
  initialEmail: string;
  initialPhoneNumber: string;
  onSubmit: (result: SubmitResult) => void;
};

export default function PersonalInfo({
  initialName,
  initialEmail,
  initialPhoneNumber,
  onSubmit,
}: Props) {
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [phone, setPhone] = useState(initialPhoneNumber);

  return (
    <>
      <div>
        <h1 className="text-3xl text-marine-blue font-bold my-2">
          Personal info
        </h1>
        <p className="text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form action="">
        <div className="my-3">
          <label htmlFor="name">Name</label>
          <input
            className="block w-full border-solid border-2 border-light-gray rounded-md p-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="my-3">
          <label htmlFor="email">Email Address</label>
          <input
            className="block w-full border-solid border-2 border-light-gray rounded-md p-2"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="my-3">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="block w-full border-solid border-2 border-light-gray rounded-md p-2"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="e.g. +1 234 576 890"
          />
        </div>
        <button type="button" onClick={() => onSubmit({ name, email, phone })}>
          Next Step
        </button>
      </form>
    </>
  );
}
