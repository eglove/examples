package main

import (
	"fmt"
	"structs/user"
)

func main() {
	userFirstName := getUserData("Please enter your first name: ")
	userLastName := getUserData("Please enter your last name: ")
	userBirthdate := getUserData("Please enter your userBirthdate (MM/DD/YYYY): ")

	var appUser, err = user.New(
		userFirstName,
		userLastName,
		userBirthdate,
	)

	if err != nil {
		fmt.Println(err)
		return
	}

	admin := user.NewAdmin("admin@example.com", "password")
	admin.OutputUserDetails()

	appUser.OutputUserDetails()
	appUser.ClearUsername()
	appUser.OutputUserDetails()
}

func getUserData(promptText string) string {
	fmt.Print(promptText)
	var value string
	fmt.Scanln(&value)
	return value
}
