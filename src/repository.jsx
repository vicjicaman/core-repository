import {
  exec
} from '@nebulario/core-process';

export const clone = async (url, repositoryid) => {
  await exec(["git clone git@" + url + " " + repositoryid], {}, {}, {});
}
