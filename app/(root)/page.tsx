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
				video={'/esh_2.mp4'}
				urlLink='https://www.zillow.com/profile/Elcy-Pereira/'
			/>
			<Testimonial />
			<YoutubeUploads />
		</>
	);
}
