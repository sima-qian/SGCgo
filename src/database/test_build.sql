BEGIN; 

DROP TABLE IF EXISTS boards, users, topics CASCADE; 

CREATE TABLE users(
    id SERIAL PRIMARY KEY, 
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL
);

INSERT INTO users (user_name, email, pass) VALUES 
(Armand, armandl@email.com, password12)
(Simon, simon@email.com, password12)
(Eve, eve@email.com, password12)
(LikeMike, likemike@email.com, password12);

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES users(id)
); 

INSERT INTO boards (board_name, user_id) VALUES 
(sgcGO122, 01),
(a590bd, 02),
(lkx89sdd, 03),
(b42sdwe, 04);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    board_id INTEGER REFERENCES boards(id),
    user_id INTEGER REFERENCES users(id),
    content TEXT,
    sgc INTEGER NOT NULL
);

INSERT topics (board_id, user_id, content) VALUES 
(01, 01, 'stop cake', 1)
