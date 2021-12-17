async function loadFile(file) {
  return await fetch(file)
    .then(response => response.text());
}

async function readFile(file) {
  const triangles = [];
  const raw = await loadFile(file);
  const lines = raw
    .replace(/^endloop|^outer loop|^facet normal|^solid.*$|^endsolid.*$|^vertex|^endfacet/gm, '')
    .split(/\n+/g)
    .map(line => line.trim())
    .filter(line => line.length);

  for (let i = 0; i < lines.length; i += 4) {
    const data = lines.slice(i, i + 4)
      .map(line => v(...line.split(/\s/g).map(number => Number(number))))

    const normal = data.shift();
    triangles.push(t(normal, ...data));
  }

  return triangles;
}