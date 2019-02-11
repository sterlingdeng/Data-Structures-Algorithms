package bubblesort

func bubbleSort(slice []int) []int {
	swapped := true
	for swapped {
		swapped = false
		for i := 0; i < len(slice)-1; i++ {
			if slice[i] > slice[i+1] {
				swap(slice, i, i+1)
				swapped = true
			}
		}
	}
	return slice
}

func swap(slice []int, i int, j int) {
	temp := slice[i]
	slice[i] = slice[j]
	slice[j] = temp
}
