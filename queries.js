const Pool = require("pg").Pool;
const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "nwt",
  password: "password",
  port: 5432
});

//GET all users

const getUsers = (request, response) => {
  pool.query(
    "SELECT * FROM users  WHERE user_id = 1 ORDER BY user_id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//GET user by id

const getUserBy = (request, response) => {
  //const id = parseInt(request.params.id);
  var exists = false;
  const { username, password } = request.params;
  console.log(username, "aye", password);

  return pool.query(
    "SELECT EXISTS (SELECT 1 FROM users WHERE username = $1 AND password = $2)",
    [username, password],
    (error, results) => {
      if (error) {
        throw error;
      }
      //response.status(200).json(results.rows);
      exists = results.rows[0].exists;
      console.log("autentikacija prosla? ", exists);
    }
  );
};
//GET all animals

const getAllAnimals = (request, response) => {
  pool.query("SELECT * FROM animals", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//GET favorites

const getFavorites = (request, response) => {
  pool.query(
    `SELECT animals.name, animals.text, animals.image_path, animals.gender,animals.type
  FROM ((public.animals INNER JOIN user_animal 
    ON animals.animal_id = user_animal.id_animal_fkey) 
    INNER JOIN users 
    ON users.user_id = user_animal.id_user_fkey)`,
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//GET animal by id

const getAnimalById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM animals WHERE animal_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//GET all news

const getAllNews = (request, response) => {
  pool.query("SELECT * FROM news", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

//GET news by id

const getNewsById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM news WHERE news_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//GET user by id

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query(
    "SELECT * FROM users WHERE user_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

//Create a new user //POST

const createUser = (request, response) => {
  const { firstName, lastName, password, username, email } = request.body;
  console.log("create user", firstName, lastName, password, username, email);

  pool.query(
    `INSERT INTO public.users(
      user_id, username, password, email, name, surname) 
    VALUES (DEFAULT, $1, $2, $3, $4, $5)`,
    [username, password, email, firstName, lastName],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};

/* `SELECT EXISTS (SELECT 1 FROM users
  WHERE username = $1 
  AND password = $2 )` */

//PUT data in user

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE user_id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

//DELETE user

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM users WHERE user_id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getAllAnimals,
  getAnimalById,
  getAllNews,
  getNewsById,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserBy,
  getFavorites
};
