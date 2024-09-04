import { ReactNode, Children, ReactElement } from 'react';
import cn from '../../common/utils/cn.util';
import '../../tailwind.css';


export interface SignInFormProps {
    children?:  ReactNode;
}

export default function SignInForm({ children } : SignInFormProps) {
    const childArray = Children.toArray(children) as ReactElement[];

return (
    <form className={cn(`h-92 w-128 rounded-lg shadow-form-custom p-7.5 gap-6`)} style={{ backgroundColor: '#FFFFFF' }}>
    <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6">
            <div className='flex flex-col gap-1.5'>
                {childArray[0] || null}
                {childArray[1] || null}
            </div>
            <div className='flex flex-col gap-1.5'>
                {childArray[2] || null} 
                {childArray[3] || null} 
                {childArray[4] || null} 
            </div>
        </div>
        <div className="flex flex-col gap-3">
        {childArray[5] || null} 
        {childArray[6] || null} 
        </div>
    </div>
</form>
);
}
