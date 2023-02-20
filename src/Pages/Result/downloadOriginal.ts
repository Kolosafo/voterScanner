export const handleDownloadDesigns = (
  profilePic: string,
  banner: string,
  post: string
) => {
  const a = document.createElement("a");
  a.download = `Profile-Picture`;
  a.href = profilePic;
  a.click();

  a.download = `Twitter-Banner`;
  a.href = banner;
  a.click();

  a.download = `Post-Banner`;
  a.href = post;
  a.click();
};
