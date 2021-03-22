import { swap } from '../utils'
export default (arr: number[]): number[] => {
	if (arr.length <= 1) return arr
	recur(arr, 0, arr.length - 1)
	return arr
}

const partition = (arr: number[], l: number, r: number): number => {
	const pivot = arr[r]
	let store_idx = l
	for (let i = l; i < r; i++) {
		if (arr[i] < pivot) {
			swap(arr, i, store_idx++)
		}
	}
	swap(arr, store_idx, r)
	return store_idx
}

const recur = (arr: number[], l: number, r: number): void => {
	if (l >= r) return
	const q = partition(arr, l, r)
	recur(arr, l, q - 1)
	recur(arr, q + 1, r)
}
