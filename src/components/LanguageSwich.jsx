import { useEffect, useState } from "react";
import getData from "../api/getData";
import { Autocomplete, TextField } from "@mui/material";
import { inputStyle, languageLocalStoreKey, languageUrl } from "../config/config";
import { useNavigate } from "react-router-dom";

function getOptions(data) {
    const optiopns = [];

    if (data) {
        for (const option of data) {
            optiopns.push({
                code: option.iso_639_1,
                label: option.english_name + ' (' + option.iso_639_1 + ')',
            });
        }
    }

    return optiopns;
}

export default function LanguageSwich() {
    const [language, setLanguage] = useState(
        () => JSON.parse(window.localStorage.getItem(languageLocalStoreKey)) || null
    );
    const [languageList, setLanguageList] = useState([]);
    const navigate = useNavigate();

    function handleChangeLanguage(event, option) {
        setLanguage(option);
        window.localStorage.setItem(languageLocalStoreKey, JSON.stringify(option));
        navigate(0);
    }

    useEffect(
        () => {
            async function getLanguach() {
                const data = await getData(languageUrl);
                setLanguageList(getOptions(data));
            }

            getLanguach();
        },
        []
    );

    return (
        <div>
            <Autocomplete
                disablePortal
                options={languageList}
                sx={{
                    width: 300,
                    "& .MuiInputBase-root": {
                        ...inputStyle.input
                    },
                    "& .MuiFormLabel-root": {
                        ...inputStyle.label
                    }
                }}
                value={language}
                getOptionLabel={(option) => option.label}
                onChange={handleChangeLanguage}
                isOptionEqualToValue={(option, value) => option.code === value.code}
                renderInput={(params) => <TextField {...params} size="small" label="Language Switcher" />}
            />
        </div>
    );
}
