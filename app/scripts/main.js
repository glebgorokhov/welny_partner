/* eslint-disable */

/**
 * REMOVE IT
 *
 * Скрипты можно писать тут, либо подключать с помощь https://github.com/coderhaoxin/gulp-file-include
 *
 * ВАЖНО: Файлы просто подключаются, без транспиляции (babel) минификации, поэтому нужно писать на ES5
 * Так же доступа к блокам, которые собираются с помощью вебпака не будет.
 */

function labelsHeights () {
  $(document).find('.inputbox__label').height('auto');

  $(document).find('.inputbox__label').each(function () {
    const
      el = $(this),
      height = el.height(),
      pos = el.offset().top;

    let maxHeight = height;

    $(document).find('.inputbox__label').each(function () {
      const
        thisPos = $(this).offset().top,
        thisHeight = $(this).height();

      if (thisPos !== pos) return;
      if (thisHeight > maxHeight) maxHeight = thisHeight;

      $(this).height(maxHeight);
    });

    el.height(maxHeight);
  });
}

labelsHeights();

$(window).resize(labelsHeights);
/* eslint-enable */
