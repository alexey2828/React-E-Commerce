import { FC, ReactNode } from 'react';

export enum CardVariant {
    outLined = 'outLined',
    primary = 'primary'
};

export interface CardProps {
    width?: string;
    height?: string;
    childern?: ReactNode;
    variant?: CardVariant;
}

const Card: FC<CardProps> = ({width, height, childern, variant}) => {

    return (
        <div style={{
            width, height, border: variant === CardVariant.outLined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lime' : 'blue',
        }}>
            {childern}
        </div>
    );
}

export default Card;
