package palindrome

import "fmt"

type Palindrome struct {
	Word string
}

func (p Palindrome) isPalindrome() bool {
	return p.isPalindromeHelper(0, len(p.Word)-1)
}

func (p Palindrome) isPalindromeHelper(l int, r int) bool {
	if p.Word[l] != p.Word[r] {
		return false
	}
	if l >= r {
		return true
	}

	return p.isPalindromeHelper(l+1, r-1)

}

func palindrome() {
	test1 := Palindrome{"tacocat"}
	fmt.Println(test1.isPalindrome())
}
