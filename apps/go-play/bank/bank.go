package main

import (
	"bank.go/fileops"
	"fmt"
	"github.com/Pallinder/go-randomdata"
)

const accountBalanceFile = "balance.txt"

func main() {
	accountBalance, err := fileops.GetFloatFromFile(accountBalanceFile)

	if err != nil {
		fmt.Println(err)
	}

	var choice int

	fmt.Println("Welcome to Go Bank!")
	fmt.Println("Reach us 24/7", randomdata.PhoneNumber())

	for {
		presentOptions()

		fmt.Print("Your choice: ")
		fmt.Scan(&choice)

		switch choice {
		case 1:
			fmt.Println("Your balance is ", accountBalance)
		case 2:
			var depositAmount float64
			fmt.Print("Enter the amount to deposit: ")
			fmt.Scan(&depositAmount)

			if depositAmount <= 0 {
				fmt.Println("Invalid deposit amount")
				continue
			}

			accountBalance += depositAmount
			fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
			fmt.Println("Deposit successful. Your new balance is ", accountBalance)
		case 3:
			var withdrawAmount float64
			fmt.Print("Enter the amount to withdraw: ")
			fmt.Scan(&withdrawAmount)
			if withdrawAmount > accountBalance {
				fmt.Println("Insufficient balance")
				continue
			} else {
				accountBalance -= withdrawAmount
				fileops.WriteFloatToFile(accountBalance, accountBalanceFile)
				fmt.Println("Withdrawal successful. Your new balance is ", accountBalance)
			}
		default:
			fmt.Println("Goodbye!")
			fmt.Println("Thanks for choosing our bank!")
			return
		}
	}
}
