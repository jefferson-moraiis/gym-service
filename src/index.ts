import env from './main/config/env';
import { App } from './main/config/app';

const app = new App();

(async function () {
        app.server.listen(env.port, () => {
            console.log(`Server running at http://localhost:${env.port}`);
        });
})();