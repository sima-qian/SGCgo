BEGIN;

DROP TABLE IF EXISTS boards, users, topics CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL
);

INSERT INTO users (user_name, email, pass) VALUES
('Armand', 'armandl@email.com', 'password12'),
('Simon', 'simon@email.com', 'password12'),
('Eve', 'eve@email.com', 'password12'),
('LikeMike', 'likemike@email.com', 'password12');

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(100) UNIQUE,
    user_id INTEGER REFERENCES users(id) NOT NULL
);

INSERT INTO boards (board_name, user_id) VALUES
('sgcGO122', 1),
('a590bd', 2),
('lkx89sdd', 3),
('b42sdwe', 4);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    board_id INTEGER REFERENCES boards(id) NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    text_content TEXT NOT NULL CHECK (text_content <> ''),
    sgc INTEGER NOT NULL CONSTRAINT sgc_must_be_greater_than_0 CHECK (sgc > 0), CONSTRAINT sgc_must_be_less_than_4 CHECK (sgc < 4)
);

INSERT INTO topics (board_id, user_id, text_content, sgc) VALUES
(1, 1, 'cake', 1),
(1, 1, 'cheesecake', 1),
(1, 2, 'chocolate cake', 2),
(1, 4, 'coffee and walnut', 2),
(1, 3, 'lemon drizzle', 3),
(1, 4, 'victoria sponge', 3),
(2, 2, 'more Chairs', 2),
(3, 3, 'Being awesome', 3),
(3, 4, 'being late', 1);

COMMIT;
