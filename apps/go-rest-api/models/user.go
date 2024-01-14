package models

import (
	"errors"
	"ethang.dev/rest-api/db"
	"ethang.dev/rest-api/utils"
)

type User struct {
	ID       int64  `json:"id"`
	Email    string `json:"email" binding:"required"`
	Password string `json:"password" binding:"required"`
}

type UserResponse struct {
	ID    int64  `json:"id"`
	Email string `json:"email"`
}

type UserLoginResponse struct {
	UserResponse
	Token string `json:"token"`
}

func (user *User) Save() error {
	query := `
	INSERT INTO users(email, password) VALUES (?, ?)
	`

	stmt, err := db.DB.Prepare(query)

	if err != nil {
		return err
	}
	defer stmt.Close()

	hashed, err := utils.HashPassword(user.Password)

	if err != nil {
		return err
	}

	result, err := stmt.Exec(user.Email, hashed)

	if err != nil {
		return err
	}

	userId, err := result.LastInsertId()
	user.ID = userId

	return err
}

func (user *User) ValidateCredentials() error {
	query := `
	SELECT id, password FROM users WHERE email = ?
	`

	row := db.DB.QueryRow(query, user.Email)

	var retrievedPassword string
	err := row.Scan(&user.ID, &retrievedPassword)

	if err != nil {
		return errors.New("invalid credentials")
	}

	isPasswordValid := utils.CheckPasswordHash(user.Password, retrievedPassword)

	if !isPasswordValid {
		return errors.New("invalid credentials")
	}

	return nil
}
