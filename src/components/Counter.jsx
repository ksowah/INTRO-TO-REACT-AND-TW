import { useState } from "react";


const Counter = ({countValue}) => {

    const [count, setCount] = useState(0)

    const Increment = () => {
        setCount(count + countValue)
    }

    const Decrement = () => {
        setCount(count - countValue)
    }

    const Reset = () => {
        setCount(0)
    }

  return (
    <div className="flex flex-col items-center">
      <p className="text-[4rem] font-bold">{count}</p>

      <div className="flex space-x-4" >
        <button onClick={Increment} className="h-[3rem] w-[4rem] rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold text-[2rem] ">
          +
        </button>
        <button onClick={Decrement} className="h-[3rem] w-[4rem] rounded-lg bg-red-500 hover:bg-red-600 text-white font-bold text-[2rem] ">
          -
        </button>
        <button onClick={Reset} className="h-[3rem] w-[6rem] rounded-lg bg-green-500 hover:bg-green-600 text-white font-bold">
          Resest
        </button>
      </div>
    </div>
  );
};

export default Counter;
