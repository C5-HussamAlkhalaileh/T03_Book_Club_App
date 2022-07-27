

------------------------------

USE BooksAPP ;
------------------------------


------------------------------
CREATE TABLE role (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) UNIQUE NOT NULL,
    PRIMARY KEY (role_id)
);
------------------------------



------------------------------
CREATE TABLE permission (
    permission_id INT AUTO_INCREMENT NOT NULL,
    permission VARCHAR(255) UNIQUE NOT NULL,
    PRIMARY KEY (permission_id)
);
------------------------------




------------------------------
CREATE TABLE role_permission (
    role_permission INT AUTO_INCREMENT NOT NULL,
    role INT,
    permission INT,
    FOREIGN KEY (role) REFERENCES role(role_id),
    FOREIGN KEY (role_permission) REFERENCES permission(permission_id)
    
);
------------------------------

CREATE TABLE user (
    user_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    passwordUser VARCHAR (255) NOT NULL,
    PRIMARY KEY (user_id)
);
------------------------------


------------------------------
CREATE TABLE book (
    book_id INT AUTO_INCREMENT NOT NULL,
    book_name VARCHAR(255) NOT NULL,
    book_url VARCHAR(255) NOT NULL,
    PRIMARY KEY (book_id)
);
------------------------------

------------------------------
CREATE TABLE room (
    room_id INT AUTO_INCREMENT NOT NULL,
    room VARCHAR (255) NOT NULL ,
    books_id INT ,
    user_id INT,
    FOREIGN KEY (books_id) REFERENCES book(book_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
        
    PRIMARY KEY (room_id)
);
------------------------------

------------------------------
CREATE TABLE reading (
    reading_id INT AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (reading_id)
    user_id INT ,
    book_id INT ,
    FOREIGN KEY (user_id) REFERENCES book(user_id),
    FOREIGN KEY (book_id) REFERENCES book(book_id),

);
------------------------------

CREATE TABLE user_room (
    user_room_id INT AUTO_INCREMENT NOT NULL,
    user INT,
    book INT,
    FOREIGN KEY (user) REFERENCES user(role_id),
    FOREIGN KEY (book) REFERENCES book(role_id),
    PRIMARY KEY (user_room_id)
    
   

);
