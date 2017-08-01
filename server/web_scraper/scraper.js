const scrapeIt = require('scrape-it');
const fsp = require('fs-promise');
const data = './map-data';

const hikeData = [];
for (let i = 0; i < 200; i++) {
  hikeData.push(getHikeData(i));
}

function getHikeData(i) {
  return scrapeIt(data[i].url, {
    markers: {
      listItem: 'markers',
      data: {
        hikeType: null,
        distance: null,
        highPoint: null,
        elevationGain: null,
        difficulty: null,
        seasons: null,
        familyFriendly: null,
        backpackable: null,
        crowded: null
      }
    }
  });
}

Promise.all(hikeData)
  .then(values => {
    const flattened = values.reduce((acc, curr) => {
      return acc.concat(curr.markers);
    }, []);
    fsp.writeFile('hike-data.json', JSON.stringify(flattened), 'utf-8')
      .then(contents => {
        console.log('done!');
      });
  });