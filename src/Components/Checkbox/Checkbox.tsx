import * as React from 'react';
import css from './Checkbox.module.css';
import checkedImg from '../../materials/check.png';
import unCheckedImg from '../../materials/uncheck.png';

type PropsType = {
    name: string
    checked: boolean
    disable: boolean
    roleId: string
    checkboxId: string
    changeStatus: (checked: boolean, roleId: string, checkboxId: string) => void
};

export const Checkbox = (props: PropsType) => {

    console.log('render');

    const onChangeStatus = () => {
        if (!props.disable) {
            props.changeStatus(props.checked, props.roleId, props.checkboxId);
        }
    }

    const disabled = props.disable ? 'disabled' : 'active';
    const checkboxImg = props.checked ? <img src={checkedImg} alt="checked" className={css.checkboxImg}/> :
        <img src={unCheckedImg} alt="unchecked" className={css.checkboxImg}/>
    return (
        <div className={css.item}>
            <label className={css[disabled]} onClick={onChangeStatus}>
                <span>{checkboxImg}</span>
                <span>{props.name}</span>
            </label>
        </div>
    );
};


