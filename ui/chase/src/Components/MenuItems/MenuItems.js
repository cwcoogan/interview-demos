function MenuItems({ choices, setChoices, isChoicesValid }) {
  return (
    <div className="w-full">
      {isChoicesValid ? (
        <textarea
          className="w-2/3 border-2 border-gray-200 rounded-md h-24 overflow-hidden px-2 py-2 outline-none text-lg text-black break-normal"
          value={choices.join("\n")}
          onChange={(e) => {
            setChoices(e.target.value.split("\n"));
          }}
        ></textarea>
      ) : (
        <textarea
          className="w-2/3 border-2 border-red-600 rounded-md h-24 overflow-hidden px-2 py-2 outline-none text-lg text-black"
          value={choices.join("\n")}
          onChange={(e) => {
            setChoices(e.target.value.split("\n"));
          }}
        ></textarea>
      )}
    </div>
  );
}

export default MenuItems;
