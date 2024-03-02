import { ButtonGroup, Button } from '@mui/material';
import { useContext } from 'react';
import { LanguageContext } from "../App";

function Header({ language, setLanguaseClick }) {

    return (
        <>
            <ButtonGroup variant="outlined" aria-label="Basic button group">
                <Button onClick={setLanguaseClick}>{language === "en" ? ("english") : ("spanish")}</Button>
            </ButtonGroup>
        </>
    )
}
export default Header