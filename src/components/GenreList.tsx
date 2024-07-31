import useGeneres from "../Hooks/useGeners";

const GenreList = () => {
  const { generes } = useGeneres();
  return (
    <ul>
      {generes.map((genere) => (
        <li key={genere.id}> {genere.name} </li>
      ))}
    </ul>
  );
};

export default GenreList;
