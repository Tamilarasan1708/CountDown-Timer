import React, { useEffect, useState } from "react";
import logo from "../src/images/logo-time.jpg";
import Dropdown from "./Component/Dropdown";
import { dropdowncomponent1, dropdowncomponent2 } from "./data";
import { MdOutlinePerson, MdOutlineCalendarMonth } from "react-icons/md";
import Button from "./Component/Button";
import Timer from "./Component/CountTimer";
import InputBox from "./Component/InputBox";
import Alert from "./Component/Alert";

const Countdown = () => {
  const [selectDropdown, setSelectDropdown] = useState("");
  const [dropdownPerson, setDropdownPerson] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [startDisabled, setStartDisabled] = useState(false);
  const [showStopButton, setShowStopButton] = useState(false);
  const [time, setTime] = useState("");
  const [currentDate] = useState(getFormattedDate());

  const formatDate = (time) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    return new Intl.DateTimeFormat("en-US", options).format(time);
  };

  useEffect(() => {
    const today = new Date();
    setTime(formatDate(today));
  }, []);

  function getFormattedDate() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${day}-${month}-${year}`;
  }

  const handleStart = (e) => {
    e.preventDefault();

    if (!selectDropdown || !dropdownPerson) {
      Alert({title:"Please select both Dropdowns.",icon:"error"})
      return;
    }
    setIsPlaying(true);
    setStartDisabled(true);
    setShowStopButton(true);
  };

  const handleStop = (e) => {
    e.preventDefault();
    setIsPlaying(false);
    setStartDisabled(false);
    // setShowStopButton(false);
  };

  const handlePlayPauseToggle = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="container p-14">
      <div className="flex justify-between items-center">
        <div className="flex items-center  space-x-4">
          <h2 className="text-base font-medium">Firma</h2>
          <img src={logo} className="w-40" alt="logo" />
        </div>
        <form
          className="flex space-x-4 items-center md:flex-col md:space-y-7 lg:flex-row lg:space-x-7 "
          onSubmit={handleStart}
        >
          <div className="lg:mt-6">
            <Dropdown
              customStyle="space-x-2"
              icons={<MdOutlineCalendarMonth size={20} />}
              options={dropdowncomponent1}
              value={selectDropdown}
              required={true}
              labelName="Geratenummer"
              onChange={(e) => {
                setSelectDropdown(e.target.value);
              }}
            />
          </div>
          <div>
            <Dropdown
              customStyle="space-x-2 md:space-x-5"
              icons={<MdOutlinePerson size={20} />}
              labelName="Bediener"
              options={dropdowncomponent2}
              value={dropdownPerson}
              required={true}
              onChange={(e) => {
                setDropdownPerson(e.target.value);
              }}
            />
          </div>
          <div>
            <Button
              btnstyle={`text-sm font-medium text-white rounded ${
                startDisabled
                  ? "bg-slate-300 cursor-not-allowed"
                  : "bg-green-400"
              }`}
              type="submit"
              //  onClick={handleStart}
              disabled={startDisabled}
            >
              START
            </Button>
          </div>
        </form>
      </div>

      <div className="p-20 bg-slate-200 rounded md:mt-10">
        <div className="flex justify-between items-center">
          <form className="flex justify-between w-full flex-col space-y-4 lg:flex-row lg:space-x-7 md:flex-col  md:space-y-7 space-x-10 items-center">
            {/* Section 1 */}
            <div className="flex items-center">
              <span>
                <MdOutlineCalendarMonth />
              </span>
              <span>Datum</span>
              <InputBox
                type="text"
                value={currentDate}
                disabled={true}
                style="cursor-not-allowed"
              />
            </div>

            {/* Section 2 */}
            <div className="flex items-center justify-center w-full">
              <Timer
                isPlaying={isPlaying}
                onPlayPauseToggle={handlePlayPauseToggle}
                keyProp={`${dropdownPerson},${selectDropdown}`}
              />
            </div>

            {/* Section 3 */}
            <div className="flex flex-col space-y-4 justify-end">
              <div className="flex items-center space-x-1">
                <span>
                  <MdOutlineCalendarMonth />
                </span>
                <span>Start</span>
                {showStopButton ? (
                  <InputBox value={time} type="text" disabled={true} />
                ) : (
                  <InputBox type="text" value="--:00 --" disabled={true} />
                )}
              </div>
              <div className="flex items-center space-x-1">
                <span>
                  <MdOutlineCalendarMonth />
                </span>
                <span>End</span>
                <InputBox
                  value="--:-- --"
                  type="text"
                  className="pl-1"
                  disabled={true}
                />
              </div>
              <div className="flex items-end justify-end h-10">
                <div className="flex items-center">
                  {showStopButton && (
                    <Button
                      btnstyle="text-sm px-5 font-medium text-white rounded bg-red-500"
                      onClick={handleStop}
                    >
                      STOP
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
