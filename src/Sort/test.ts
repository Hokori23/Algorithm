import MergeSort from './MergeSort'
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
	it('#归并排序: MergeSort(arr: number[])', () => {
		testData.forEach((v) => {
			assert.deepStrictEqual(
				Array.from(v).sort((a, b) => a - b),
				MergeSort(Array.from(v))
			)
		})
	})
})
