import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addCharacter } from "../utills/characterSlice";

const SiderBar = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const apiApisode = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    const j = await response.json();
    setData(j.results);
  };
  useEffect(() => {
    apiApisode();
  }, []);
  const handleEpisode = async (id) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/episode/${id}`
    );
    const episode = await response.json();
    // console.log(episode);
    const characterPromises = episode.characters.map((url) =>
      fetch(url).then((res) => res.json())
    );
    // console.log(characterPromises);
    const characters = await Promise.all(characterPromises);
    // console.log(characters)
    dispatch(addCharacter(characters));
  };
  const allCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const j = await response.json();
    dispatch(addCharacter(j.results));
  };
  // console.log(data);
  if (data.length == 0) return <h1>Loading</h1>;

  return (
    <div className="w-[20%] text-center h-[100vh]  overflow-y-scroll">
      <ul>
        <p className="text-2xl font-bold bg-green-500 border-t-2 rounded-lg border-black cursor-pointergit " onClick={allCharacters}>
          Episodes
        </p>
        {data.map((item) => (
          <li
            onClick={() => handleEpisode(item.id)}
            key={item.id}
            className="p-2 text-sm bg-gray-300 rounded-lg border cursor-pointer border-gray-900"
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SiderBar;
