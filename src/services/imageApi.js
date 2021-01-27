import axios from "axios";

function getFetch(query, page) {
  let key = `18650821-54d383092d5458c2872240bef`;
  let perPage = 12;
  let url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return axios.get(url).then((response) => {
    return response.data.hits;
  });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getFetch };
