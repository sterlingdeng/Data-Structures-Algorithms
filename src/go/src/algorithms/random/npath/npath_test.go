package npath

import "testing"

type testpair struct {
	input  int
	expect int
}

var testSlice = []testpair{
	{0, 0},
	{1, 1},
	{2, 2},
	{3, 12},
	{4, 184},
	{5, 8512},
	{6, 1262816},
	// {7, 575780564}, // takes ~3.5 minutes to complete
}

func TestNPath(t *testing.T) {
	//
	for _, pair := range testSlice {
		input := pair.input
		expect := pair.expect
		output := nPath(input)
		if output != expect {
			t.Error(
				"For", input,
				"Got", output,
				"Expected", expect,
			)
		}

	}
}
