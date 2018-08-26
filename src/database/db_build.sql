BEGIN;

DROP TABLE IF EXISTS boards, users, topics CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL
);

INSERT INTO users (user_name, email, pass) VALUES
('admin', 'admin@admin.com', 'pass123');

CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    board_name VARCHAR(100) UNIQUE,
    user_id INTEGER REFERENCES users(id) NOT NULL
);

CREATE TABLE topics (
    id SERIAL PRIMARY KEY,
    board_id INTEGER REFERENCES boards(id) NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    text_content TEXT NOT NULL CHECK (text_content <> ''),
    sgc INTEGER NOT NULL CONSTRAINT sgc_must_be_greater_than_0 CHECK (sgc > 0), CONSTRAINT sgc_must_be_less_than_4 CHECK (sgc < 4)
);

COMMIT;
