package main

import "fmt"

func main() {
	str1 := "akepqkxy"
	str2 := "qrkuekxy"

	lcsLength := recursiveLcs(str1, str2, 0, 0)
	fmt.Println(lcsLength)
}

func recursiveLcs(a string, b string, i int, j int) int {
	if i >= len(a) || j >= len(b) {
		return 0
	}
	if a[i] == b[j] {
		return 1 + recursiveLcs(a, b, i+1, j+1)
	}
	return max(recursiveLcs(a, b, i+1, j), recursiveLcs(a, b, i, j+1))

}

func max(m int, n int) int {
	if m > n {
		return m
	}
	return n
}
