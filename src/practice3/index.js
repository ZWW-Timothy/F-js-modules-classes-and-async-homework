// // Promise
// // eslint-disable-next-line import/prefer-default-export
// export const getPoetry = () => {
//   return fetch("https://v1.jinrishici.com/all.json")
//     .then((response) => {
//       if (response.status !== 200) {
//         throw new Error();
//       }
//       return Promise.resolve(response.json());
//     })
//     .then((data) => {
//       return [data.origin, data.author, data.content];
//     });
// };

// Async
// eslint-disable-next-line import/prefer-default-export
export const getPoetry = async () => {
  try {
    const response = await fetch("https://v1.jinrishici.com/all.json");
    const data = await response.json();
    return [data.origin, data.author, data.content];
  } catch {
    throw new Error();
  }
};
