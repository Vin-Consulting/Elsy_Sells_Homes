import Video from '@/components/Video';
import Featured from '@/components/Featured';
import Newsletter from '@/components/Newsletter';
import PreviousListings from '@/components/PreviousListings';
import YoutubeUploads from '@/components/YoutubeUploads';
import Testimonial from '@/components/Testimonial';

export default function Home() {
	return (
		<>
			<Video />
			<Featured />
			<Newsletter />
			<Video
				title_l1={'HOME SWEET HOME'}
				title_l2={''}
				title_l3={''}
				pl1={'One key'}
				pl2={'at a time'}
				isLoading={true}
				text='discover'
				video={
					'https://www.goyard.com/media/video/homepage/2023/08/desktop/Bloc-video-3-guide-de-porte-desktop.mp4'
				}
				urlLink='https://www.zillow.com/profile/Elcy-Pereira/'
			/>
			<Testimonial />
			<YoutubeUploads />
		</>
	);
}
