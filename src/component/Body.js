import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacter } from "../utills/characterSlice";

const Body = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.char.character);
  const charaterApi = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const j = await response.json();
    dispatch(addCharacter(j.results));
  };
  useEffect(() => {
    charaterApi();
  }, []);
  //   console.log(data);
  if (data.length == 0) return <h1>Loading....</h1>;
  return (
    <div className="w-[80%] border-2  bg-yellow-600 h-[100vh]  overflow-y-scroll">
      <div className="flex flex-wrap justify-center items-center mx-auto gap-x-6 gap-y-3">
        {data.map((item) => (
          <div className="text-center">
            <img
              className="h-36 w-44 rounded-lg transition-all fade-in"
              key={item.id}
              src={item.image}
            />
            <p className="font-bold">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
