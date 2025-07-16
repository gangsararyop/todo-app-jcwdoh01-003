import Image from "next/image";
import { FC } from "react";

const dummyData = [
  {
    name: "Complete online JavaScript course",
    isChecked: true,
  },
  {
    name: "Jog around the park 3x",
    isChecked: false,
  },
  {
    name: "10 minutes meditation",
    isChecked: false,
  },
  {
    name: "Read for 1 hour",
    isChecked: false,
  },
  {
    name: "Pick up groceries",
    isChecked: false,
  },
  {
    name: "Complete Todo App on Frontend Mentor",
    isChecked: false,
  },
];

interface TodoProps {
  todo: { name: string; isChecked: boolean };
}

const Todo: FC<TodoProps> = ({ todo }) => {
  const { name, isChecked } = todo;

  return (
    <div className="p-[20px_24px] shadow-[0px_1px_0px_0px_#E3E4F1] cursor-pointer">
      <label className="flex items-center w-full">
        <input type="checkbox" className="appearance-none" />

        <span className="flex flex-row items-center gap-6">
          <span
            className={`inline-block w-6 h-6 rounded-full ${
              isChecked
                ? "bg-[linear-gradient(135deg,_#55DDFF_0%,_#C058F3_100%)]"
                : "bg-transparent"
            }`}
          >
            <span className="flex items-center justify-center w-full h-full">
              <span className="inline-block relative w-[11.7px] h-[9px]">
                <Image
                  src="/static/ic-check.svg"
                  alt="Check Icon"
                  fill
                  className="object-contain"
                />
              </span>
            </span>
          </span>

          <span
            className={`m-0 text-lg font-normal ${
              isChecked ? "line-through text-[#D1D2DA]" : ""
            }`}
          >
            {name}
          </span>
        </span>
      </label>
    </div>
  );
};

export default function Home() {
  return (
    <div className="w-full h-full relative py-[70px]">
      <div className="w-full h-full max-w-[541px] relative z-10 mx-auto">
        {/* Judul Todo */}
        <div className="flex items-center justify-center mb-10">
          <div className="w-full h-full flex flex-row items-center justify-between gap-6">
            <h1 className="text-[40px] font-bold tracking-[15px] leading-normal text-white m-0">
              TODO
            </h1>

            <div className="relative w-[25.11px] h-[26px]">
              <Image
                src="/static/ic-moon.svg"
                alt="Icon Moon"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Input Todo */}
        <div className="mb-6 shadow-[0p_35px_50px_-15px_#C2C3D680]">
          <input
            type="text"
            placeholder="Create a new todo…"
            className="bg-white w-full rounded-[5px] p-[20px_24px] text-lg"
          />
        </div>

        {/* List Todo */}
        <div className="w-full bg-white rounded-[5px] overflow-hidden shadow-[0px_35px_50px_-15px_#C2C3D680]">
          {dummyData.map((todo) => (
            <Todo key={todo.name} todo={todo} />
          ))}

          <div className="p-[16px_24px] flex flex-row items-center justify-between">
            <p className="m-0 text-sm font-normal text-[#9495A5]">
              {dummyData.length} items left
            </p>

            <div className="flex flex-row items-center gap-[19px]">
              <p className="m-0 text-sm font-bold text-[#9495A5]">All</p>
              <p className="m-0 text-sm font-bold text-[#9495A5]">Active</p>
              <p className="m-0 text-sm font-bold text-[#9495A5]">Completed</p>
            </div>

            <div>
              <p className="m-0 text-sm font-normal text-[#9495A5]">
                Clear Completed
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 z-0">
        <div className="w-full h-[300px] relative">
          <div className="relative w-full h-full bg-[linear-gradient(225deg,_rgba(85,_150,_255,_0.8)_0%,_rgba(172,_45,_235,_0.8)_100%)] z-10" />

          <Image
            src="/static/bg-image.png"
            alt="Background Image"
            fill
            className="object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
}
