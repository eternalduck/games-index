import React from "react"
import styled from "styled-components"
import {colors, media, mixins, sizes} from "../../style/vars-mixins/_index"
import "@splidejs/splide/dist/css/themes/splide-default.min.css"
import {Splide, SplideSlide} from "@splidejs/react-splide"

const Slider = (props) => {
	return(
		<SliderWrap>
			<Splide
				options = {{
					type: "loop",
					breakpoints: {
						0: {height: 250},
						576: {height: 300},
						750: {height: 400},
						990: {height: 500},
						1200: {height: 600},
					}
				}}
			>
				{props.screens && props.screens.map(img =>
					<SplideSlideSc key={img.id}>
						<Img src={img.image} alt={""}/>
					</SplideSlideSc>
				)}
			</Splide>
		</SliderWrap>
	)
}
export default Slider


const SliderWrap = styled.div`
	padding-top: 30px;
	overflow: hidden;
	${media.lg`
		padding-top: 50px;
	`}
`
const SplideSlideSc = styled(SplideSlide)`
	${mixins.flexCentered};
	overflow: hidden;
	background-color: ${colors.transparentWhite};
	color: ${colors.midGray};
	border-radius: 5px;
`
const Img = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`