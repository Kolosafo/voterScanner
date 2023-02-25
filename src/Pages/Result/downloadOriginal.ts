export const handleDownloadDesigns = (
  profilePic: string,
  banner: string,
  post: string
) => {
  const a = document.createElement("a");
  a.download = `Profile-Picture`;
  a.href = profilePic;
  a.click();
  setTimeout(() => {
    a.download = `Twitter-Banner`;
    a.href = banner;
    a.click();
  }, 2000);

  setTimeout(() => {
    a.download = `Post-Banner`;
    a.href = post;
    a.click();
  }, 4000);
};
