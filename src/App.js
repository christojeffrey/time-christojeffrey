//semua disini, toh relative straight forward
function App() {
  //time now
  let now = new Date();
  console.log("why are you checking console");
  // console.log(now);
  //next birthday
  let bday = new Date(now.getFullYear(), 8, 4);
  if (now > bday) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  // console.log(bday);
  //get weeks left before next birthday
  let weeksleft = Math.abs(bday - now) / (1000 * 3600 * 24 * 7);
  weeksleft = Math.floor(weeksleft);
  // console.log("weeksleft");
  // console.log(weeksleft);
  // if today == birthday

  // set custom text
  let customText;
  if (weeksleft >= 50) {
    customText = "Meh we got time";
  } else if (weeksleft >= 40) {
    customText = "soo long";
  } else if (weeksleft > 30) {
    customText = "still long";
  } else if (weeksleft >= 20) {
    customText = "getting closer";
  } else if (weeksleft >= 10) {
    customText = "I think I am panicking";
  } else if (weeksleft >= 5) {
    customText = "I am panicking";
  } else if (weeksleft >= 3) {
    customText = "oh god";
  } else if (weeksleft >= 2) {
    customText = "oh god oh god";
  } else if (weeksleft >= 1) {
    customText = "oh god oh god oh god";
  } else if (weeksleft >= 0) {
    customText = "jesus christ spare my soul";
  } else {
    customText = "I am dead";
  }

  if (now.getDate() === bday.getDate() && now.getMonth() === bday.getMonth()) {
    return (
      <div className="w-screen h-screen bg-neutral-900 flex items-center justify-center">
        {/* background */}
        <div className="text-white w-1/3 md:text-lg text-md">
          <div className="my-2">on this day, you are officially part of the open continua of ..., well, everything.</div>
          <div className="my-2">you've been a good human to some people, and a bad human to some other people.</div>
          <div className="my-2">there are some things we will never know. that is okay.</div>
          <div className="my-2">there are some things you will always act towards, even though you don't know the reason behind it. maybe that's okay.</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="">
        {/* background */}
        <div className="absolute w-full h-full bg-neutral-900 flex items-center justify-center flex-col">
          <div id="just padding" className="mt-14"></div>
          <div className="lg:text-[5rem] sm:text-[3rem] md:text-[4rem] text-[2rem] text-white flex">
            <div>{weeksleft}&nbsp;</div>
            <div>{weeksleft === 1 ? "week" : "weeks"} left</div>
          </div>
          <div className="text-neutral-500 font-semibold">before I turn {now.getFullYear() + 1 - 2002}</div>
          <div className="text-neutral-500 font-semibold mt-14">{customText}</div>
        </div>
      </div>
    );
  }
}

export default App;
