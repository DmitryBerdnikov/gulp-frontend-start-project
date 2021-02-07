import del from 'del';
import config from '../config';

const clean = () => del(config.dest.root);

export default clean;
