const thumbnails = importAll(
  require.context(
    "../assets/images/thumbnails",
    false,
    /\.(png|jpe?g|svg|jfif)$/
  )
);

const users = importAll(
  require.context("../assets/images/users", false, /\.(png|jpe?g|svg|jfif)$/)
);

const categories = importAll(
  require.context(
    "../assets/images/categories",
    false,
    /\.(png|jpe?g|svg|jfif)$/
  )
);

export { thumbnails, users, categories };

function importAll(r) {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
