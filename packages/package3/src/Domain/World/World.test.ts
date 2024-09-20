import { describe, expect, it } from 'vitest'
import { mock } from 'vitest-mock-extended'
import { helloWorld } from './World'
import { WorldClass } from './WorldClass'

describe('User', () => {
	it('should print hello user', () => {
		const world = mock<WorldClass>({
			name: 'SomeWorld'
		})
		expect(helloWorld(world)).toBe('Hello SomeWorld')
	})
})