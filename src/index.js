import { Application } from 'pixi.js';
import { StdBatchFactory } from 'pixi-batch-renderer';

const app = new Application();
const factory = new StdBatchFactory();

window.app = app;
window.factory = factory;

app.ticker.stop();
