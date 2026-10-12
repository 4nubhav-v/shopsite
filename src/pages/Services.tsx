function Services() {
  return (
    <div
      className="relative min-h-screen min-w-screen flex flex-col justify-center items-center"
      id="services"
    >
      <div className="flex flex-col justify-center items-center gap-8 z-2">
        <h1 className="text-6xl text-center capitalize">Our Services </h1>
        <div className="mt-2 flex flex-col justify-evenly gap-4 text-sm ">
          <div className="p-6 border-2 bg-gray-300 border-gray-600 rounded-xl">
            <ul>
              <li>First come first service</li>
              <li>Custom made is also available</li>
              <li>Estimated sizes and prizes before booking</li>
            </ul>
          </div>
          <div className="bg-gray-300 p-6 border-2 border-gray-600 rounded-xl">
            <ul>
              <li>Reference images is much appreriated</li>
              <li>Contant Support Available</li>
              <li>UPI ID Acceptable</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-linear-to-b from-white to-0 absolute z-1"></div>
    </div>
  );
}

export default Services;
