function Form() {
  return (
    <form>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="">
          <label htmlFor="first-name">First Name</label>
          <input type="first-name" id="text" />
          <span>error</span>
        </div>

        <div className="">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <span>error</span>
        </div>

        <div className="">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <span>error</span>
        </div>

        <div className="">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
          <span>error</span>
        </div>

        <div className=" col-span-2">
          <label htmlFor="message">Message</label>
          <textarea id="message"></textarea>
          <span>error</span>
        </div>
      </div>
    </form>
  );
}

export default Form;
