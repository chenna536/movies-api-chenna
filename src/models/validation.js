const Joi = require('@hapi/joi');

const directorSchema = Joi.object().keys({
  Id: Joi.number().integer().min(1).max(35),
  Director_name: Joi.string(),
});

function validateDirectorId(schema, id) {
  return Joi.validate({ Id: id }, schema);
}

function validateDirectorIdName(schema, id, directorName) {
  return Joi.validate({ Id: id, Director_name: directorName }, schema);
}

function validateDirectorName(schema, directorName) {
  return Joi.validate({ Director_name: directorName }, schema);
}

const movieSchema = Joi.object().keys({
  Id: Joi.number().integer().min(1).max(100)
    .required(),
  Rank: Joi.number().integer().min(1).max(100),
  Title: Joi.string(),
  Description: Joi.string(),
  Runtime: Joi.number().integer(),
  Genre: Joi.string(),
  Rating: Joi.number().positive().precision(2),
  Metascore: Joi.number().integer(),
  Votes: Joi.number().integer(),
  Gross_Earning_in_Mil: Joi.number().positive().precision(2),
  Director: Joi.number().integer(),
  Actor: Joi.string(),
  Year: Joi.number().greater(1900).integer(),
});

// console.log(Joi.validate({ Id: 1 }, movieSchema));


// function validateMovie(schema, id, rank, desc, runtime, genre, rating, metaScore,
//   votes, grossEarning, year, title, directorId, actor) {
//   return Joi.validate({
//     Id: id,
//     Rank: rank,
//     Title: title,
//     Description: desc,
//     Runtime: runtime,
//     Genre: genre,
//     Rating: rating,
//     Metascore: metaScore,
//     Votes: votes,
//     Gross_Earning_in_Mil: grossEarning,
//     Director: directorId,
//     Actor: actor,
//     Year: year,
//   }, schema);
// }

module.exports = {
  directorSchema,
  movieSchema,
  validateDirectorId,
  validateDirectorIdName,
  validateDirectorName,
};
