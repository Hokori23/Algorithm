export const swap = (arr: number[], idx1: number, idx2: number) => {
	if (idx1 === idx2) return
	arr[idx1] = arr[idx1] + arr[idx2]
	arr[idx2] = arr[idx1] - arr[idx2]
	arr[idx1] = arr[idx1] - arr[idx2]
}
