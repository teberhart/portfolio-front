import 'react-multi-carousel/lib/styles.css';
import styles from './ProjectList.module.css';
import Carousel from "react-multi-carousel";

export default function ProjectList({list}) {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};
	return (
		<div>
			<div>
				{list.map((project)=>"Projet")}
			</div>
			<div className={styles.carousel}>
				<Carousel
					swipeable={false}
					draggable={true}
					showDots={true}
					responsive={responsive}
					ssr={true} // means to render carousel on server-side.
					infinite={true}
					autoPlay={false}
					autoPlaySpeed={1000}
					keyBoardControl={true}
					customTransition="all .5"
					transitionDuration={500}
					containerClass="carousel-container"
					removeArrowOnDeviceType={["tablet", "mobile"]}
					dotListClass="custom-dot-list-style"
					itemClass="carousel-item-padding-40-px"
					centerMode={true}
				>
					<div>
						<img src="https://avatars.githubusercontent.com/u/13420081?s=280&v=4" />
					</div>
					<div>
						<img src="https://api-platform.com/docs/images/logo_spider.svg"/>
					</div>
					<div>
						<img src="https://avatars.githubusercontent.com/u/13420081?s=280&v=4"/>
					</div>
					<div>
						<img src="https://api-platform.com/docs/images/logo_spider.svg"/>
					</div>
				</Carousel>;
			</div>
		</div>
	);
}