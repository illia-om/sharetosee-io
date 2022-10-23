import utilStyles from '../styles/util.module.css';
import { useRouter } from 'next/router'


const SharedLayout = ({children}: {
    children: React.ReactNode
}) => {
    const router = useRouter();
    const query = router.query;

    const containerWidthClass = (query.share && query.screen && Number(query.share) <= 3 ? utilStyles[`sharedContainerX${query.share}`] : utilStyles.sharedContainerX1);
    const containerOffsetClass = query.share && query.screen && Number(query.share) <= 3 ? utilStyles[`sharedContainerDisplay${query.screen}o${query.share}`] : '';
    const sharedContainerClassName = `${containerWidthClass} ${containerOffsetClass}`

    return (
        <div className={utilStyles.globalContainer}>
            <div className={sharedContainerClassName}>
                {children}
            </div>
        </div>
    );
}

export default SharedLayout;