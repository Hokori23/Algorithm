export default (arr: number[]) => {
	if (arr.length <= 1) return arr
	recur(arr, 0, arr.length - 1)
  return arr
}
const swap = (arr: number[], idx1: number, idx2: number) => {
  if (idx1 === idx2) return
  arr[idx1] = arr[idx1] + arr[idx2]
  arr[idx2] = arr[idx1] - arr[idx2]
  arr[idx1] = arr[idx1] - arr[idx2]
}
const partition = (arr: number[], l: number, r: number) => {
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
const recur = (arr: number[], l: number, r: number) => {
	if (l >= r) return
	const q = partition(arr, l, r)
	recur(arr, l, q - 1)
	recur(arr, q + 1, r)
}
