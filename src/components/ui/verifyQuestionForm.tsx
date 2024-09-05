import { ReactNode, Children, ReactElement } from 'react';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css';


export interface VerifyQuestionFormProps {
    children?:  ReactNode;
}

export default function VerifyQuestionForm({ children } : VerifyQuestionFormProps) {
    const childArray = Children.toArray(children) as ReactElement[];

return (
    <form className={cn(`h-58 w-128 rounded-lg shadow-form-custom p-7.5 gap-6`)} style={{ backgroundColor: '#FFFFFF' }}>
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-6">
                    {childArray[0] || null}
                <div className='flex flex-col gap-1.5'>
                    {childArray[1] || null} 
                    {childArray[2] || null} 
                </div>
                    {childArray[3] || null} 
            </div>
        </div>
    </form>
);
}
