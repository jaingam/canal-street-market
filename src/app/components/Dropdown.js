'use client'
import React, { useState } from "react";
import "./dropdown.css"
import Image from "next/image";
import Link from "next/link";
import { FontCormorant, FontHankenGrotesk } from "../layout"

const Dropdown = (props) => {

    const [isOpened, setIsOpened] = useState(false)
    const [selected, setSelected] = useState({ key: props.defaultKey ?? null, value: props.defaultValue ?? null })
    const onSelect = (e) => {
        setSelected({ value: e.target.value });
    }
    return <div className={isOpened ? `overflow-y-scroll ${FontHankenGrotesk.variable} z-[1]` : `overflow-y-hidden ${FontHankenGrotesk.variable}`}>
        <select name={props.name} className="dropdown-select hidden" onSelect={onSelect} value={selected.value}>
            {props.options.map((e) => {
                <option value={e.value}>{e.text}</option>
            })}
        </select>
        <div className="dropdown-displayed-option block">
            <span>
                {selected.key}
            </span>
        </div>
        {
            props.options.map((e) => {
                <div className="dropdown-displayed-option block">
                    <span>
                        {e.text}
                    </span>
                </div>
            })
        }
    </div>
}

export default Dropdown;