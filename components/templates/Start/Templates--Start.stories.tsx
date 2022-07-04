import Start from ".";

export function Default() {
  return (
    <Start
      title="Lorem ipsum dolor sit amet"
      sourceLink="https://github.com/Webbnissarna/pokemon-randomizer-game"
      sourceLinkTitle="GitHub"
      onPlay={(options) => console.log("onPlay!", options)}
    />
  );
}
