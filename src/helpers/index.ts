const getURLQuery = (name: string) => new URLSearchParams(window.location.search).get(name);

export { getURLQuery };
