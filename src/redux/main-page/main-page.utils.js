
// payload for action onFetchMovieSuccess
export const formatData = details => {
  const detailsCopy = details;
  const detailsArr = Object.entries(details);

  detailsArr.forEach(([key, val]) => {
    if (val === null || val === 0 || val === '0') {
      detailsCopy[key] = '---';
    } else if (Array.isArray(val)) {
      detailsCopy[key] = getNamesFromArrays(val);
    } else if (key === 'release_date') {
      detailsCopy[key] = formatDate(val);
    } else if (key === 'revenue') {
      detailsCopy[key] = numeral(val).format('$0,0[.]00');
    }
  });
  return detailsCopy;
};

const numeral = require('numeral'); // format revenue

const getNamesFromArrays = arr => {
  let namesArr = [],
    resultString;
  arr.forEach(el => namesArr.push(el.name));
  resultString = namesArr.join(', ');
  return resultString;
};

const formatDate = releaseDate => {
  releaseDate = releaseDate.split('-');
  releaseDate = `${releaseDate[1]}-${releaseDate[2]}-${releaseDate[0]}`;
  return releaseDate;
};
