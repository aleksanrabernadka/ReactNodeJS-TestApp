const apartments = [
  {
    id: 1,
    adress: "Posag",
    area: 35,
    floor: 7,
  },
  {
    id: 2,
    adress: "Posag",
    area: 39,
    floor: 7,
  },
];

const getApartments = function(req, res){
    res.status(200).json(apartments);
}

module.exports = getApartments;