import PropTypes from 'prop-types';
import CheckItem from './CheckItem';
//import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { BsChevronDoubleDown } from "react-icons/bs";

FilterCheckList.propTypes = {
    checkList: PropTypes.array.isRequired,
    nameFilter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    titleFilter: PropTypes.string.isRequired,
};

function FilterCheckList({ checkList, nameFilter, titleFilter, onChange }) {
    function toggleCheck(id, isChecked) {
        onChange(id, nameFilter, isChecked);
    }

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<BsChevronDoubleDown className='text-white' />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='bg-gray-900 text-white'
                >
                    <Typography className='text-2xl'>{titleFilter}</Typography>
                </AccordionSummary>
                <AccordionDetails className='bg-gray-900 text-white'>
                    <ul>
                        {
                            checkList.map(
                                (item) => <CheckItem
                                    key={item.id}
                                    name={item.name}
                                    isChecked={item.checked}
                                    id={item.id}
                                    onChange={toggleCheck}
                                />
                            )
                        }
                    </ul>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

export default FilterCheckList;
