BEGIN;

DROP TABLE IF EXISTS boards, users, topics CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL
);

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(100) NOT NULL,
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    board_id INTEGER REFERENCES boards(id),
    user_id INTEGER REFERENCES users(id),
    text_content TEXT,
    sgc INTEGER NOT NULL
);

COMMIT;
