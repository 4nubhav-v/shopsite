function FAQs() {
  return (
    <div
      className="relative min-h-screen min-w-screen flex flex-col justify-center items-center"
      id="faqs"
    >
      <div className="flex flex-col justify-center items-center gap-8 z-2">
        <h1 className="text-6xl text-center">Frequently Asked Questions </h1>
        <ul className="mt-2 flex flex-col justify-evenly gap-4 text-sm ">
          <ul>
            <li>First come first service</li>
            <li>Custom made is also available</li>
            <li>Estimated sizes and prizes before booking</li>
          </ul>
          <ul>
            <li>Reference images is much appreriated</li>
            <li>Contant Support Available</li>
            <li>UPI ID Acceptable</li>
          </ul>
        </ul>
      </div>
      <div className="w-full h-full bg-linear-to-b from-white to-0 absolute z-1"></div>
    </div>
  );
}

export default FAQs;
