export async function getCharacters(name) {
  const promise = fetch(
    `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&apikey=82f4a51c297653c10d0e9d36f30d02d6`
  );
  const response = await promise;
  if (response.status === 404) {
    return [];
  }

  const data = await response.json();
  return data.data.results;
}
