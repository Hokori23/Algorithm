import { swap } from '../utils'
export default (arr: number[]): number[] => {
  if (arr.length <= 1) return arr
	for (let i = 0; i < arr.length - 1; i++) {
		let min = i
		for (let j = i + 1; j < arr.length; j++) {
			min = arr[j] > arr[min] ? min : j
		}
		swap(arr, i, min)
	}
  return arr
}
