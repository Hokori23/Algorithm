import { swap } from '../utils'
export default (arr: number[]): number[] => {
  if (arr.length <= 1) return arr
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i; j < arr.length; j++) {
			if (arr[j - 1] > arr[j]) {
				swap(arr, j, j - 1)
			}
		}
	}
  return arr
}
