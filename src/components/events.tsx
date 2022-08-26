import { FC, useState } from "react";

const Events: FC = () => {
    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DRop');
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dragWithPreventHand = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
    
	return (
    	<div>
      		<input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>aaaaa</button>
            <div onDrag={dragHandler} draggable style={{background: 'gray', width: '200px', height: '200px', margin: 20}}></div>
            <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHand} style={{background: isDrag ? 'silver' : 'gray', width: '200px', height: '200px', margin: 20}}></div>
    	</div>
 	);
};

export default Events;
