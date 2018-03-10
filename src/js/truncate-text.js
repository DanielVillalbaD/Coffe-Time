let cardTitle = $('.custom-card-title').text();
let cardSubtitle = $('.custom-card-subtitle').text();

function ellipsis(title = 6, subtitle = 60) {

  if (cardTitle.length > title) {
    let titleTruncated = cardTitle.trim().substring(0, title).split(" ").slice(0, -1).join(" ") + "…";
    $('.custom-card-title').text(titleTruncated);
  }

  if (cardSubtitle.length > subtitle) {
    let subtitleTruncated = cardSubtitle.trim().substring(0, subtitle).split(" ").slice(0, -1).join(" ") + "…";
    $('.custom-card-subtitle').text(subtitleTruncated);
  }

}