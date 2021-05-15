import React, {useState, useCallback} from "react";
import { MdBorderColor } from "react-icons/md"
import './TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
    const [value , setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(e => {
        onInsert(value);
        setValue('');
        e.preventDefault(); /*submit 이벤트는 브라우저에서 새로고침을 발생시킴 so 이 함수로 이를 방지*/
    },
        [onInsert, value],
    );

    return(
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={onChange}
            />
            <button type="submit">
                <MdBorderColor />
            </button>
        </form>

    );
}

export default TodoInsert;