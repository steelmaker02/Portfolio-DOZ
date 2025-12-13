import React, { useRef, useEffect } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface AnimatedIconProps {
    animationData: any;
    size?: number;
    className?: string;
    isHovered?: boolean;
    speed?: number;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({
    animationData,
    size = 24,
    className,
    isHovered = null,
    speed = 1
}) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(speed);
        }
    }, [speed]);

    useEffect(() => {
        if (isHovered === true) {
            lottieRef.current?.play();
        } else if (isHovered === false) {
            lottieRef.current?.stop();
        }
    }, [isHovered]);

    return (
        <div
            className={`flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
            onMouseEnter={() => isHovered === null && lottieRef.current?.play()}
            onMouseLeave={() => isHovered === null && lottieRef.current?.stop()}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={false}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default AnimatedIcon;