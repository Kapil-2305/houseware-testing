import { useCallback } from "react";
import { Input } from "./Input";

import { ADD_ITEM } from "../constants";

export function Header({ dispatch, heading }) {
    const addItem = useCallback((title) => dispatch({ type: ADD_ITEM, payload: { title } }), [dispatch]);

    return (
        <header className="header" data-testid="header">
            <h1>{heading}</h1>
            <Input onSubmit={addItem} label="New Todo Input" placeholder="What needs to be done?" />
        </header>
    );
}
