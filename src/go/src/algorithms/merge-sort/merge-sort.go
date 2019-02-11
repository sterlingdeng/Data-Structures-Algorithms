package mergesort

import "fmt"

func mergeSort(s []int) []int {
	if len(s) == 1 {
		return s
	}

	mid := len(s) / 2

	left := s[:mid]
	right := s[mid:]
	new := make([]int, len(s))

	arr := merge(mergeSort(left), mergeSort(right), new)
	return arr
}

func merge(l []int, r []int, s []int) []int {
	i, j, k := 0, 0, 0

	for i < len(l) && j < len(r) {
		if l[i] < r[j] {
			s[k] = l[i]
			k++
			i++
		} else {
			s[k] = r[j]
			k++
			j++
		}
	}

	for i < len(l) {
		s[k] = l[i]
		k++
		i++
	}

	for j < len(r) {
		s[k] = r[j]
		k++
		j++
	}
	fmt.Println("print", s)
	return s
}

// Time complexity n (log n)
// Total levels = O(log(n))
// Work per level = O(n)
