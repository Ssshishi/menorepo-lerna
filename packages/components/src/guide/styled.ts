import styled from 'styled-components'

export const Component = styled.div`
	padding: 0 12px;
`

export const Guide = styled.div`
	position: relative;
	background: #fff;
	padding: 20px 13px 26px;
	border-radius: 8px;
`

export const Title = styled.div`
	padding-bottom: 16px;
	text-align: center;
	color: #000;
`

export const TitleText = styled.div`
	display: inline-block;
	font-weight: bold;
	height: 24px;
	line-height: 24px;
	font-size: 17px;
	position: relative;
	z-index: 0;
	&::after {
		position: absolute;
		left: 0;
		bottom: 0;
		content: ' ';
		height: 12px;
		width: 100%;
		background: #ffdc4b;
		z-index: -1;
	}
`

export const Body = styled.div`
	color: #4a4a4a;
	font-size: 13px;
	padding: 20px 14px;
	background: #f7f8fa;
	border-radius: 8px;
	line-height: 24px;
`

export const Tips = styled.div`
	text-align: center;
	height: 20px;
	line-height: 20px;
	margin-top: 15px;
`

export const TipsText = styled.div`
	font-size: 12px;
	color: rgba(54, 93, 176, 1);
	text-decoration: underline;
	vertical-align: top;
	display: inline;
	font-weight: 500;
`
