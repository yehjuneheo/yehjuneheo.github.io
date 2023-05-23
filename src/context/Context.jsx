import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({children}) => {
    return (
            <IntlProvider>
                {children}
            </IntlProvider>
    );
};

export {LangProvider, langContext};