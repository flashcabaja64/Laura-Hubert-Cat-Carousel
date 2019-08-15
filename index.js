function handleClick() {
    $('.thumbnail').on('click', function(e) {
        const imgSrc = $(this).find('img').attr('src');
        const imgAlt = $(this).find('img').attr('alt');
        $('.hero img').attr('src', imgSrc).attr('alt', imgAlt);
        console.log(e.target);
      });
}

$(handleClick)

  