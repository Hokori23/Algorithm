import { swap } from '../utils'
export default (arr: number[]): number[] => {
	for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        break;
      } else {
        swap(arr, j - 1, j)
      }
    }
  }
  return arr
}
