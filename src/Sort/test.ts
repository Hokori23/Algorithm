import InsertionSort from './InsertionSort'
import BubbleSort from './BubbleSort'
import SelectionSort from './SelectionSort'
import MergeSort from './MergeSort'
import QuickSort from './QuickSort'
import { describe, it } from 'mocha'
import assert from 'assert'

const testData = [
	[],
  [0],
	[1, 7, 8, 1, 2, 5, 10, 9, 4, 6],
	[3, 2, 1],
	[1, 1, 1, 1, 1, 1],
	[2, 2, 5]
]
describe('排序算法', () => {
	it('#插入排序: InsertionSort(arr: number[])', () => {
		testData.forEach((v) => {
			assert.deepStrictEqual(
				Array.from(v).sort((a, b) => a - b),
				InsertionSort(Array.from(v))
			)
		})
	})
	it('#冒泡排序: BubbleSort(arr: number[])', () => {
		testData.forEach((v) => {
			assert.deepStrictEqual(
				Array.from(v).sort((a, b) => a - b),
				BubbleSort(Array.from(v))
			)
		})
	})
	it('#选择排序: SelectionSort(arr: number[])', () => {
		testData.forEach((v) => {
			assert.deepStrictEqual(
				Array.from(v).sort((a, b) => a - b),
				SelectionSort(Array.from(v))
			)
		})
	})
	it('#归并排序: MergeSort(arr: number[])', () => {
		testData.forEach((v) => {
			assert.deepStrictEqual(
				Array.from(v).sort((a, b) => a - b),
				MergeSort(Array.from(v))
			)
		})
	})
	it('#快速排序: QuickSort(arr: number[])', () => {
		testData.forEach((v) => {
			assert.deepStrictEqual(
				Array.from(v).sort((a, b) => a - b),
				QuickSort(Array.from(v))
			)
		})
	})
})
