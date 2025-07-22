import { ChangeEvent, FC, useContext } from "react";
import Image from "next/image";
import { HomeContext } from "..";

interface TodoCardProps {
  todo: { name: string; isChecked: boolean };
  handleCheckTodo: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const ComponentA = (props) => {
  return <ComponentB todos={props.todos} />;
};

const ComponentB = (props) => {
  return <ComponentC todos={props.todos} />;
};

const ComponentC = (props) => {
  console.log(props.todos);
  return <div>test</div>;
};

const TodoCard: FC<TodoCardProps> = ({ todo, todos, handleCheckTodo }) => {
  const { name, isChecked } = todo;

  const context = useContext(HomeContext);

  return (
    <div className="p-[20px_24px] shadow-[0px_1px_0px_0px_#E3E4F1] cursor-pointer">
      <label className="flex items-center w-full cursor-pointer">
        <input
          type="checkbox"
          className="appearance-none"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleCheckTodo(e, name)
          }
        />

        <span className="flex flex-row items-center gap-6">
          {isChecked && (
            <span className="inline-block w-6 h-6 rounded-full bg-[linear-gradient(135deg,_#55DDFF_0%,_#C058F3_100%)]">
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
          )}

          <span
            className={`m-0 text-lg font-normal ${
              isChecked ? "line-through text-[#D1D2DA]" : ""
            }`}
          >
            {name}
          </span>
        </span>
      </label>

      <ComponentA todos={todos} />
    </div>
  );
};

export default TodoCard;
