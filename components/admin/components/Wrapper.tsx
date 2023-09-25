import { createUrqlClient } from '@/utils/createUrqlClient';

interface WrapperProps {
	children: React.ReactNode;
	variant?: 'small' | 'regular';
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return <div className='min-h-screen min-w-screen'>{children}</div>;
};

export default Wrapper;
