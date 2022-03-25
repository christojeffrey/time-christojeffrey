//semua disini, toh relative straight forward
function App() {
  //time now
  let now = new Date();
  console.log(now);
  //next birthday
  let bday = new Date(now.getFullYear(), 8, 4);
  if (now > bday) {
    bday.setFullYear(bday.getFullYear() + 1);
  }
  console.log(bday);
  //get weeks left before next birthday
  let weeksleft = Math.abs(bday - now) / (1000 * 3600 * 24 * 7);
  weeksleft = Math.floor(weeksleft);
  console.log("weeksleft");
  console.log(weeksleft);

  return (
    <div className="">
      {/* background */}
      <div className="absolute w-full h-full bg-neutral-900 flex items-center justify-center">
        <div className="relative">
          <div className="lg:text-[5rem] sm:text-[3rem] md:text-[4rem] text-[2rem] text-white flex">
            <div>{weeksleft}&nbsp;</div>
            <div>{weeksleft === 1 ? "week" : "weeks"} left</div>
          </div>
          <div className="text-neutral-500">before I turn fucking 20</div>
        </div>
      </div>
    </div>
  );
}

export default App;
