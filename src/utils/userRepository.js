const getUserRepos = repos => {
  return repos.filter(repo => !repo.fork && repo.language != null);
};

const getUserLanguages = userRepos => {
  return getUserRepos(userRepos).map(lan => lan.language);
};

const formatLanguages = userLanguages => {
  return userLanguages.filter((e, i) => userLanguages.indexOf(e) >= i);
};

export { getUserRepos, getUserLanguages, formatLanguages };
