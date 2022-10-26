import utilStyles from '../styles/util.module.css';


const SharedLayout = ({ children, screens, displayNumber }: {
    children: React.ReactNode;
    screens?: number;
    displayNumber?: number;
}) => {
    const containerWidthClass = screens && displayNumber && screens <= 3 ? utilStyles[`sharedContainerX${screens}`] : utilStyles.sharedContainerX1;
    const containerOffsetClass = screens && displayNumber && screens <= 3 ? utilStyles[`sharedContainerDisplay${displayNumber}o${screens}`] : '';
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