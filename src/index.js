

import dva from 'dva';
import globalModel from './models/global';
import abouta from './models/abouta';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model( abouta );
app.model( globalModel );

// 4. Router
app.router( require( './router' ));

// 5. Start
app.start( '#root' );

