import './patch-local-storage-for-github-pages';
import * as AdditionalTaskEvents from './analytics-events/additional-task.events'

import React, {StrictMode} from 'react'
import { render } from 'react-dom';
import App from './App'
import './index.scss'
import eruda from "eruda";
import TelegramAnalytics from '@telegram-apps/analytics'

TelegramAnalytics.init({
    appName: 'developerTest',
    token: 'eyJhcHBfbmFtZSI6ImRldmVsb3BlclRlc3QiLCJhcHBfdXJsIjoiaHR0cHMvL3QubWUvQm90RmF0aGVyIiwiYXBwX2RvbWFpbiI6Imh0dHBzOi8vdGdhbmFseXRpY3MueHl6In0=!IvfqLr4Z8W8rwExUqUzkOW2Nzy9aeCf2cNAhbFTWLFI=',
    env: 'STG',
});

if (AdditionalTaskEvents.initAdditionalEvent !== undefined) {
    window.dispatchEvent(AdditionalTaskEvents.initAdditionalEvent as Event);
} else {
    console.error('Init task ID is null')
}

eruda.init();



render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root') as HTMLElement
)
