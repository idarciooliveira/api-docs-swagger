import { config } from 'dotenv';
config();

import express from 'express'
import swaggerUi from 'swagger-ui-express'
import routes from './routes'
import swaggerdocs from './swagger.json'

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerdocs))
app.use(express.json())
app.use(express.urlencoded({ extended: false}));

app.use('/v1', routes)

export default app;