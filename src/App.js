import React, { useEffect, useState } from "react";

import Map from "./Map.js";

function App() {
  const [lng, setLng] = useState(0);
  const [ipAddress, setIpAddress] = React.useState(false);
  const [lat, setLat] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [getIpfromUser, setGetIpfromUser] = useState({
    ip: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setGetIpfromUser((prevIp) => ({
      ...prevIp,
      [name]: value,
    }));
  }
  function fetchAPI() {
    fetch(`https://ipapi.co/${getIpfromUser.ip}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setIpAddress(data);
        setLng(data.longitude);
        setLat(data.latitude);
        setIsLoaded(true);
        console.log(data);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetchAPI();
  }
  function handleSubmit(e) {
    e.preventDefault();
    setIsLoaded(false);
    fetchAPI();
  }
  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <div className="antialiased App font-rubik text-[#2C2C2C]">
      <header className="relative bg-[url('./images/pattern-bg.png')] h-[300px] pt-[26px] lg:pt-[33px] bg-cover text-center lg:h-[280px]">
        <h1 className="text-white font-medium text-2xl text-[26px] tracking-tight px-6 lg:text-[32px] lg:leading-[30px]">
          IP Addrees Tracker
        </h1>

        <div className="mt-[29px] lg:mt-[31px]">
          <form
            className="h-[58px] w-[327px] flex mx-auto lg:w-[555px]"
            onSubmit={handleSubmit}
          >
            <label htmlFor="ipAddress" className="sr-only"></label>
            <input
              id="ipAddress"
              type="text"
              className="w-full px-6 rounded-l-2xl py-[18px] text-lg shadow-[0_50px_50px_-25px_rgba(0,0,0,0.1)] caret-black focus:outline-none"
              name="ip"
              value={getIpfromUser.ip}
              onChange={handleChange}
              pattern="(\b25[0-5]|\b2[0-4][0-9]|\b[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}"
              title="Search for any IP address or domain"
              placeholder="Search for any IP address or domain"
            />
            <button className="bg-black min-w-[58px] h-full rounded-r-2xl flex justify-center items-center hover:bg-[#3F3F3F] transition-colors duration-500 ease-in-out">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="3"
                  d="M2 1l6 6-6 6"
                />
              </svg>
            </button>
          </form>
        </div>
        {ipAddress && (
          <div className="mx-auto w-[327px] rounded-2xl absolute left-1/2 -translate-x-1/2 z-50 mt-6 py-[26px] bg-white text-center shadow-[0_50px_50px_-25px_rgba(0,0,0,0.1)] space-y-6 lg:w-[1110px] lg:space-y-0 lg:flex lg:pl-8 lg:space-x-8 lg:mt-12">
            <div className="space-y-[7px] lg:pr-16 lg:border-r lg:border-gray-200 lg:text-left">
              <h2 className="text-xs text-[10px] font-bold opacity-50 tracking-widest">
                IP ADDRESS
              </h2>
              <p className="text-xl font-medium lg:text-[26px] leading-[30px]">
                {ipAddress.ip}
              </p>
            </div>

            <div className="space-y-[7px] lg:pr-16 lg:border-r lg:border-gray-200 lg:text-left">
              <h2 className="text-xs text-[10px] font-bold opacity-50 tracking-widest">
                LOCATION
              </h2>
              <p className="text-xl font-medium lg:text-[26px] leading-[30px]">
                {ipAddress.city}, {ipAddress.region}
              </p>
            </div>

            <div className="space-y-[7px] lg:pr-16 lg:border-r lg:border-gray-200 lg:text-left">
              <h2 className="text-xs text-[10px] font-bold opacity-50 tracking-widest">
                TIMEZONE
              </h2>
              <p className="text-xl font-medium lg:text-[26px] leading-[30px]">
                {ipAddress.timezone}
              </p>
            </div>

            <div className="space-y-[7px] lg:pr-16  lg:text-left">
              <h2 className="text-xs text-[10px] font-bold opacity-50 tracking-widest">
                ISP
              </h2>
              <p className="text-xl font-medium lg:text-[26px] leading-[30px]">
                {ipAddress.org}
              </p>
            </div>
          </div>
        )}
      </header>
      <div className="relative z-10">
        {isLoaded && (
          <Map
            location={`${ipAddress.city}, ${ipAddress.region}`}
            lng={lng}
            lat={lat}
          />
        )}
      </div>
    </div>
  );
}

export default App;
