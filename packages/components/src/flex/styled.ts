import styled from 'styled-components'

export const Flex = styled.div`
	flex-direction: row;
	display: flex;
	width: 100%;
`

export const Item = styled.div<{
	flex?: number
	gutter?: number
	isFirstChild?: boolean
	isLastChild?: boolean
}>`
	flex: ${props => props.flex ?? 1};
	margin-left: ${({ isFirstChild, gutter }) => {
		if (isFirstChild) {
			return 0
		}
		if (gutter) {
			return `${gutter / 2}px`
		}
		return 0
	}};
	margin-right: ${({ isLastChild, gutter }) => {
		if (isLastChild) {
			return 0
		}
		if (gutter) {
			return `${gutter / 2}px`
		}
		return 0
	}};
`
