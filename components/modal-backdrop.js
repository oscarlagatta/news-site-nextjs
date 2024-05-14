'user client';

import {useRouter} from "next/navigation";


export default function ModalBackdrop(props) {
    const router = useRouter();
    return (
        <div className='modal-backdrop' onClick={router.back}/>
    )
}