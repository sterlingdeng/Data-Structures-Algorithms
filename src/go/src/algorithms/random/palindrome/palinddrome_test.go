package palindrome

import "testing"

type testpair struct {
	input  string
	expect bool
}

var testSlice = []testpair{
	{"tacocat", true},
	{"taco cat", false},
}

func TestPalindrome(t *testing.T) {
	for _, pair := range testSlice {
		v := Palindrome{pair.input}
		if v.isPalindrome() != pair.expect {
			t.Error(
				"For", pair.input,
				"Got", v,
				"Expected", pair.expect,
			)
		}
	}
}
