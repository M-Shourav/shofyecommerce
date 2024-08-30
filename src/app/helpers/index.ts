export const getData = async (endpoints: string) => {
  const response = await fetch(endpoints, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
