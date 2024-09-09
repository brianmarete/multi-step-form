const PersonalInfo = () => {
  return (
    <>
      <h1 className="text-3xl text-marine-blue font-bold">Personal info</h1>
      <p className="text-cool-gray">
        Please provide your name, email address, and phone number.
      </p>
      <form action="">
        <div className="my-3">
          <label htmlFor="name">Name</label>
          <input
            className="block w-full border-solid border-2 border-light-gray rounded-md p-2"
            type="text"
            id="name"
            placeholder="e.g. Stephen King"
          />
        </div>
        <div className="my-3">
          <label htmlFor="email">Email Address</label>
          <input
            className="block w-full border-solid border-2 border-light-gray rounded-md p-2"
            type="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
          />
        </div>
        <div className="my-3">
          <label htmlFor="phone">Phone Number</label>
          <input
            className="block w-full border-solid border-2 border-light-gray rounded-md p-2"
            type="tel"
            placeholder="e.g. +1 234 576 890"
          />
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
