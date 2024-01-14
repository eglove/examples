package user

import (
	"errors"
	"fmt"
	"time"
)

type User struct {
	firstName string
	lastName  string
	birthdate string
	createdAt time.Time
}

type Admin struct {
	email    string
	password string
	User
}

func (user *User) OutputUserDetails() {
	fmt.Println(user.firstName, user.lastName, user.birthdate)
}

func (user *User) ClearUsername() {
	user.firstName = ""
	user.lastName = ""
}

func NewAdmin(email string, password string) *Admin {
	return &Admin{
		email:    email,
		password: password,
		User: User{
			firstName: "ADMIN",
			lastName:  "ADMIN",
			birthdate: "---",
			createdAt: time.Now(),
		},
	}
}

func New(firstName string, lastName string, birthdate string) (*User, error) {
	if firstName == "" || lastName == "" || birthdate == "" {
		return nil, errors.New("first name, last name and birthdate are required")
	}

	return &User{
		firstName,
		lastName,
		birthdate,
		time.Now(),
	}, nil
}
