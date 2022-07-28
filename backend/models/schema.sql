
USE BOOKSAPP ;
-----------------roles--------------------
CREATE TABLE roles (
    id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) UNIQUE NOT NULL,
    PRIMARY KEY (id)
);
-------------permissions------------------
------------------------------------------
CREATE TABLE permissions (
    id INT AUTO_INCREMENT  NOT NULL,
    permission VARCHAR(255) ,
    PRIMARY KEY (id)
);
------------------------------------------
---------role_permission------------------
CREATE TABLE role_permission(
    id INT AUTO_INCREMENT NOT NULL,
    role_id INT ,
    permission_id int ,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (permission_id) REFERENCES permissions(id),
    PRIMARY KEY (id)
);
-----------------------------------------------

------------------users------------------------
CREATE TABLE users (
    id INT AUTO_INCREMENT  NOT NULL,
    firstname VARCHAR(255)  ,
    lastname VARCHAR(255) ,
    email VARCHAR (255) ,
    password VARCHAR(255),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    PRIMARY KEY (id)
);
-----------------------------------------------

-------------------books-----------------------
CREATE TABLE books (
    id INT AUTO_INCREMENT NOT NULL,
    book VARCHAR(255) ,
    bookimage VARCHAR(255) ,
    PRIMARY KEY(id)
);
-------------------rooms-----------------------


CREATE TABLE rooms (
    id INT AUTO_INCREMENT NOT NULL,
    room VARCHAR (255) NOT NULL ,
    book_id INT ,
    user_id INT,
    FOREIGN KEY (book_id) REFERENCES books(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
        
    PRIMARY KEY (id)
);
-------------------------------------------------

---------------------reading---------------------
CREATE TABLE reading (
    id INT AUTO_INCREMENT NOT NULL,
    reading VARCHAR(255) NOT NULL,
    user_id INT ,
    book_id INT ,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id),
    PRIMARY KEY (id)

);
-------------------------------------------------