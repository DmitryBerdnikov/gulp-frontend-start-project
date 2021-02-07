import gulp from 'gulp';
import clean from './gulp/tasks/clean';
import server from './gulp/tasks/server';
import config from './gulp/config';

config.setEnv();

export const build = gulp.series(
  clean,
);

export const watch = gulp.series(
  build,
  server,
);
