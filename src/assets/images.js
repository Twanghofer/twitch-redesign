const thumbnails = importAll(
  require.context("../assets/images/thumbnails", false, /\.(png|jpe?g|svg)$/)
);

const users = importAll(
  require.context("../assets/images/users", false, /\.(png|jpe?g|svg)$/)
);

export { thumbnails, users };

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
