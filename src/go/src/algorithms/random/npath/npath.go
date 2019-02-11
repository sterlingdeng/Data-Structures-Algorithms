package npath

// finds the total number of unique paths from one corner of an NxN board to the farther corner

type board struct {
	board [][]bool
}

func (b *board) makeBoard(n int) {
	board := make([][]bool, n)

	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board); j++ {
			board[i] = append(board[i], false)
		}
	}
	b.board = board
}

func (b *board) togglePiece(i int, j int) {
	b.board[i][j] = !b.board[i][j]
}

func (b *board) hasBeenVisited(i int, j int) bool {
	return b.board[i][j]
}

func nPath(size int) int {
	if size == 0 {
		return 0
	}
	if size == 1 {
		return 1
	}
	matrix := &board{nil}
	matrix.makeBoard(size)

	return recursivePathRunner(0, 0, matrix)
}

func recursivePathRunner(i int, j int, b *board) int {
	// Base Cases:
	// If we go off the board, return 0
	if i < 0 || j < 0 || i > len(b.board)-1 || j > len(b.board)-1 {
		return 0
	}
	// If we have already visited, return 0
	if b.hasBeenVisited(i, j) {
		return 0
	}
	// If we reach the destination, return 1
	if i == len(b.board)-1 && j == len(b.board)-1 {
		return 1
	}
	// Initialize the counter
	counter := 0
	// Toggle hasBeenVisited to true
	b.togglePiece(i, j)
	// Move Up
	counter += recursivePathRunner(i-1, j, b)
	// Move Down
	counter += recursivePathRunner(i+1, j, b)
	// Move Left
	counter += recursivePathRunner(i, j-1, b)
	// Move Right
	counter += recursivePathRunner(i, j+1, b)
	// Toggle hasBeenVisited to false as we step out of current (j,i) location
	b.togglePiece(i, j)

	return counter
}
