export default (arr: number[]): number[] => {
	if (arr.length <= 1) return arr
	recur(arr, 0, arr.length - 1)
	return arr
}

const merge = (arr: number[], l: number, q: number, r: number): void => {
	let idx1 = l,
		idx2 = q + 1
	const temp = []
	while (idx1 <= q && idx2 <= r) {
		if (arr[idx1] < arr[idx2]) {
			temp.push(arr[idx1++])
		} else {
			temp.push(arr[idx2++])
		}
	}
	let start = idx1,
		end = q
	if (idx2 <= r) {
		start = idx2
		end = r
	}
	while (start <= end) temp.push(arr[start++])

	for (let i = 0; i <= r - l; i++) {
		arr[i + l] = temp[i]
	}
}
const recur = (arr: number[], l: number, r: number): void => {
	if (l >= r) return
	const q = ~~((l + r) / 2)

	recur(arr, l, q)
	recur(arr, q + 1, r)

	merge(arr, l, q, r)
}
