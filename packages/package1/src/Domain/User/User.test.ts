import { describe, expect, it } from 'vitest'
import { mock } from 'vitest-mock-extended'
import { helloUser } from './User'
import { UserClass } from './UserClass'

describe('User', () => {
	it('should print hello user', () => {
		const user = mock<UserClass>({
			name: 'SomeUser'
		})
		expect(helloUser(user)).toBe('Hello SomeUser')
	})
})