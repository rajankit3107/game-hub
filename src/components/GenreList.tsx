import useGeneres from "../Hooks/useGeners";

const GenreList = () => {
  const { data } = useGeneres();
  return (
    <ul>
      {data.map((genere) => (
        <li key={genere.id}> {genere.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
