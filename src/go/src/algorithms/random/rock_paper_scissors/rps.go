package rockpaperscissors

// generates the combinations of [rock paper scissors] based on how many hands are played
// the number of combinations is 3^n where n is the number of hands

func rockPaperScissors(num int) [][]string {
	// determine the different combinations of rock paper scissors for num hands
	var traversed []string
	var output [][]string
	return rps(num, traversed, output)
}

func rps(num int, traversal []string, output [][]string) [][]string {
	//
	hands := []string{"rock", "paper", "scissors"}

	if num == 0 {
		// need to make a deep copy of the traversal slice, since slices are passed reference.
		temp := make([]string, len(traversal))
		copy(temp, traversal)
		output = append(output, temp)
		traversal = traversal[:len(traversal)-1]
		return output
	}

	for _, hand := range hands {
		traversal = append(traversal, hand)
		output = rps(num-1, traversal, output)
		traversal = traversal[:len(traversal)-1]
	}
	return output
}
