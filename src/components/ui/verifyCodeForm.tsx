import { ReactNode, Children, ReactElement } from 'react';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css';


export interface VerifyCodeFormProps {
    children?:  ReactNode;
}

export default function VerifyCodeForm({ children } : VerifyCodeFormProps) {
    const childArray = Children.toArray(children) as ReactElement[];

return (
    <form className={cn(`h-80.5 w-128 rounded-lg shadow-form-custom p-7.5 gap-6`)} style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                <div className='flex flex-col gap-1.5'>
                    {childArray[0] || null}
                </div>
                    {childArray[1] || null} 
                <div className="flex flex-col gap-3">
                    {childArray[2] || null} 
                    <div className="flex justify-center items-center">
                    {childArray[3] || null} 
                    </div>
                </div>
            </div>
        </div>
    </form>
);
}
